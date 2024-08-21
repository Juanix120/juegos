document.addEventListener('DOMContentLoaded', () => {
    // Añadir eventos a las imágenes de la galería
    const galleryItems = document.querySelectorAll('.gallery-item img');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            alert('Has hecho clic en una imagen: ' + item.alt);
        });
    });
});