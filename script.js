// Se obtiene el elemento del contenedor del carrusel/slider mediante su ID
const sliderContainer = document.getElementById('sliderContainer');

// Se obtienen todos los elementos de imagen con la clase 'img'
const images = document.querySelectorAll('.img');

// Se obtienen los elementos de botón anterior y siguiente mediante sus IDs
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Se declara una variable para mantener el índice de la imagen actual
let currentImageIndex = 0;

// Función para mostrar la imagen actual
function showImage() {
    // Se ocultan todas las imágenes
    hideImages();
    // Se agrega la clase 'active' a la imagen actual para mostrarla
    images[currentImageIndex].classList.add('active');
}

// Función para ocultar todas las imágenes
function hideImages() {
    // Se recorre cada imagen y se remueve la clase 'active' para ocultarla
    images.forEach((image) => {
        image.classList.remove('active');
    });
}

// Función para mostrar la siguiente imagen
function nextImage() {
    // Se actualiza el índice de la imagen sumando 1 y se utiliza el operador % para asegurar que el índice esté dentro del rango de imágenes
    currentImageIndex = (currentImageIndex + 1) % images.length;
    // Se llama a la función showImage() para mostrar la imagen actualizada
    showImage();
}

// Función para mostrar la imagen anterior
function prevImage() {
    // Se actualiza el índice de la imagen restando 1 y utilizando el operador % para asegurar que el índice esté dentro del rango de imágenes
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    // Se llama a la función showImage() para mostrar la imagen actualizada
    showImage();
}

// Se agrega un evento de clic al botón anterior que llama a la función prevImage() al hacer clic
prevBtn.addEventListener('click', prevImage);

// Se agrega un evento de clic al botón siguiente que llama a la función nextImage() al hacer clic
nextBtn.addEventListener('click', nextImage);

// Se llama a la función showImage() para mostrar la imagen inicial al cargar la página
showImage();

