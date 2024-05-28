$(document).ready(function() {
    // Función para agregar una canción al carrito
    $('.add-to-cart').on('click', function() {
        const idcan = $(this).data('id');
        const titulocan = $(this).data('titulo');
        const preciocan = $(this).data('precio');

        $.post('/agregarcarro', {
            idcan: idcan,
            titulocan: titulocan,
            preciocan: preciocan
        }, function(data) {
            alert(data.message || "Canción agregada al carro");
        });
    });

    // Función para vaciar el carrito
    $('#clear-cart').on('click', function() {
        $.post('/vaciarcarro', function(data) {
            alert(data.message || "Carrito vaciado");
            location.reload(); // Recargar la página para actualizar el carrito
        });
    });

    // Función para eliminar una canción del carrito
    $('.cart').on('click', '.remove-from-cart', function() {
        const idcan = $(this).data('id');
        $.post('/eliminarcarro', {
            idcan: idcan
        }, function(data) {
            alert(data.message || "Canción eliminada del carrito");
            location.reload(); // Recargar la página para actualizar el carrito
        });
    });

    // Verificar si hay canciones en el carrito
    $(document).ready(function() {
        if ($('.cart-item').length === 0) {
            $('#clear-cart').hide();
        }
    });
});
