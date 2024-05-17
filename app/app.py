from flask import Flask, render_template, redirect, request, url_for, flash, session
import mysql.connector, base64
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'your_secret_key'

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="Agenda2024"
)

cursor = db.cursor()

def encripcontra(password):
    # Generar un hash de la contraseña
    encriptar = generate_password_hash(password)
    return encriptar

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # VERIFICAR LAS CREDENCIALES DEL USUARIO
        username = request.form.get('txtusuario')
        password = request.form.get('txtcontrasena')
        
        cursor = db.cursor()
        sql= "SELECT usuarioper, contrasena, roles FROM personas WHERE usuarioper = %s"
        cursor.execute(sql,(username,))
        usuario = cursor.fetchone()
        
        print(usuario)

        if usuario is not None and check_password_hash(usuario[1], password):
            session['usuario'] = username
            session['rol']= usuario[2]

            if usuario[2] == 'Administrador':
                return redirect(url_for('registro_cancion'))
            else:
                return redirect(url_for('listarbuy'))
        else:
            print('credenciales invalidas')
            flash('Credenciales inválidas, por favor inténtalo de nuevo', 'error')
            return redirect(url_for('login'))
    else:
        #credenciales inválidas, mostrar mensaje de error
        print("Creedenciailes incorrectas. Por favor, intente nuevamente")
        return render_template('login.html')

@app.route('/logout')
def logout():
    # Eliminar el usuario de la sesión
    session.pop('usuario', None)
    print("la sesion se cerró")
    return redirect(url_for('login'))

@app.route('/')
def lista():
    if 'usuario' in session:
        cursor.execute('SELECT * FROM personas')
        personas = cursor.fetchall()
        return render_template('index.html', personas=personas)
    else:
        return redirect(url_for('login'))

@app.route('/Registrar', methods=['GET', 'POST'])
def Registrar_usuario():
    if request.method == 'POST':
        Nombres = request.form.get('nombre')
        Apellidos = request.form.get('apellido')
        Rol = request.form.get('roles')
        Email = request.form.get('email')
        Direccion = request.form.get('direccion')
        Telefono = request.form.get('telefono')
        Usuario = request.form.get('usuario')
        Contrasena = request.form.get('contrasena')
        
        

        Contrasenaencriptada = encripcontra(Contrasena)

        cursor.execute("SELECT * FROM personas WHERE usuarioper = %s", (Usuario,))
        existing_user = cursor.fetchone()
        if existing_user:
            flash('Usuario ya existe')
            return redirect(url_for('Registrar_usuario'))

        cursor.execute("INSERT INTO personas(nombreper, apellidoper, roles, emailper, direccionper, telefonoper, usuarioper, contrasena) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)", 
                       (Nombres, Apellidos, Rol, Email, Direccion, Telefono, Usuario, Contrasenaencriptada))
        db.commit()
        flash('Usuario creado correctamente', 'success')

        return redirect(url_for('Registrar_usuario'))
    return render_template('Registrar.html')



@app.route('/editar/<int:id>', methods=['POST', 'GET'])
def editar_usuario(id):
    if request.method == 'POST':
        nombreper = request.form.get('nombreper')
        apellidoper = request.form.get('apellidoper')
        emailper = request.form.get('emailper')
        direccionper = request.form.get('direccionper')
        telefonoper = request.form.get('telefonoper')
        usuarioper = request.form.get('usuarioper')
        contrasena = request.form.get('passwordper')

        sql = "UPDATE personas SET nombreper=%s, apellidoper=%s, emailper=%s, direccionper=%s, telefonoper=%s, usuarioper=%s, contrasena=%s WHERE polper=%s"
        cursor.execute(sql, (nombreper, apellidoper, emailper, direccionper, telefonoper, usuarioper, contrasena, id))
        db.commit()
        flash('Usuario actualizado correctamente', 'success')
        return redirect(url_for('lista'))
    else:   
        cursor.execute('SELECT * FROM personas WHERE polper = %s', (id,))
        data = cursor.fetchone()
        if data:
            return render_template('Editar.html', personas=data)
        else:
            flash('Usuario no encontrado', 'error')
            return redirect(url_for('lista'))

@app.route('/eliminar/<int:id>', methods=['POST'])
def eliminar_usuario(id):
    if request.method == 'POST':
        cursor.execute('DELETE FROM personas WHERE polper = %s', (id,))
        db.commit()
        flash('Usuario eliminado correctamente', 'success') 
        return redirect(url_for('lista'))
    
@app.route('/Registro', methods=['GET', 'POST'])
def registro_cancion():
    if request.method == 'POST':
       Titulo = request.form.get('titulo')
       Artista = request.form.get('artista')
       Genero = request.form.get('genero')
       Precio = request.form.get('precio')
       Duracion = request.form.get('duracion')
       Lanzamiento = request.form.get('lanzamiento')
       Imagen = request.files['img']
       Imagentrans = Imagen.read()

       cursor = db.cursor()
       cursor.execute(
           "SELECT * FROM canciones WHERE titulo = %s or artista = %s", (Titulo, Artista))
       existing_song = cursor.fetchone()
       if existing_song:
           flash('Canción ya existe')
           return redirect(url_for('registro_cancion'))

       cursor.execute("INSERT INTO canciones(titulo, artista, genero, precio, duracion, lanzamiento, img) VALUES (%s, %s, %s, %s, %s, %s, %s)",
                      (Titulo, Artista, Genero, Precio, Duracion, Lanzamiento, Imagentrans))
       db.commit()

       flash('Canción registrada correctamente', 'success')
       return redirect(url_for('lista'))  # Redirigir a la página principal
    return render_template("Registro.html")

#enlazar actualizar
@app.route('/actualizar_cancion/<int:id>',methods=['GET', 'POST'])
def editar_cancion(id):
    cursor = db.cursor()
    if request.method == 'POST':
        titulo = request.form.get('titulo')
        artista = request.form.get('artista')
        genero = request.form.get('genero')
        precio = request.form.get('precio')
        duracion = request.form.get('duracion')
        lanzamiento = request.form.get('lanzamiento')

        sql = "UPDATE canciones set titulo=%s,artista=%s,genero=%s,precio=%s,duracion=%s,lanzamiento=%s where id_can=%s"
        cursor.execute(sql,(titulo,artista,genero,precio,duracion,lanzamiento,id)) 
        db.commit()
        
        return redirect(url_for('listar'))
    
    else: 
        cursor = db.cursor()
        cursor.execute('SELECT * FROM canciones WHERE id_can=%s' ,(id,))
        data = cursor.fetchall()

        return render_template('actualizar.html', canciones=data[0])

@app.route("/eliminar_cancion/<int:id>", methods=['GET'])
def eliminar_cancion(id):

    cursor = db.cursor()
    cursor.execute('DELETE FROM canciones WHERE id_can = %s', (id,))
    db.commit()
    return redirect(url_for('listar'))

@app.route('/listar')
def listar():

    cursor=db.cursor()
    cursor.execute("SELECT id_can, titulo, artista, genero, precio, duracion, lanzamiento, img FROM canciones")
    cancionesguardar = cursor.fetchall()

    print("Listando las canciones")

    if cancionesguardar:
        
        listacanciones = []

        for cancion in cancionesguardar:

            Imagen = base64.b64encode(cancion[7]).decode('utf-8')
            listacanciones.append({

                'id_can': cancion[0],
                'Titulo': cancion[1],
                'Artista': cancion[2],
                'Genero': cancion[3],
                'Precio': cancion[4],
                'Duracion': cancion[5],
                'Lanzamiento': cancion[6],
                'Imagen': Imagen,
            })

        return render_template('listar.html', cancion = listacanciones) 
    
    else:

        return print("Canciones no encontradas. ")
        
#return print("Canciones no encontradas. ");

@app.route('/listarbuy')
def listarbuy():

    cursor=db.cursor()
    cursor.execute("SELECT id_can, titulo, artista, genero, precio, duracion, lanzamiento, img FROM canciones")
    cancionesguardar = cursor.fetchall()

    print("Listando las canciones")

    if cancionesguardar:
        
        listacanciones = []

        for cancion in cancionesguardar:

            Imagen = base64.b64encode(cancion[7]).decode('utf-8')
            listacanciones.append({

                'id_can': cancion[0],
                'Titulo': cancion[1],
                'Artista': cancion[2],
                'Genero': cancion[3],
                'Precio': cancion[4],
                'Duracion': cancion[5],
                'Lanzamiento': cancion[6],
                'Imagen': Imagen,
            })

        return render_template('listarbuy.html', cancion = listacanciones) 
    
    else:

        return print("Canciones no encontradas. ")

@app.route('/agregar_al_carrito/<int:id_can>', methods=['POST'])
def agregar_al_carrito(id_can):
    try:
        if 'carrito' not in session:
            session['carrito'] = {}

        carrito = session['carrito']
        carrito[id_can] = carrito.get(id_can, 0) + 1
        session['carrito'] = carrito

        print(f"Canción {id_can} agregada al carrito. Carrito actual: {session['carrito']}")  # Debugging

        flash('Canción agregada al carrito correctamente', 'success')
        return redirect(url_for('listarbuy'))
    except Exception as e:
        print(f"Error al agregar canción al carrito: {e}")
        flash('Ocurrió un error al agregar la canción al carrito', 'error')
        return redirect(url_for('listarbuy'))

if __name__ == '__main__':
    app.run(debug=True, port=5005)