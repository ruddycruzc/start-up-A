document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('#hamburger');
    const navList = document.querySelector('#nav-list');

    // 1. Escuchamos el evento click
    hamburger.addEventListener('click', () => {
        // 2. Alternamos la clase 'active' en la lista de navegación
        navList.classList.toggle('active');

        // 3. Gestionamos la accesibilidad (Aria-expanded)
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);

        // Opcional: Cambiar el icono de ☰ a ✕
        hamburger.textContent = isExpanded ? '☰' : '✕';
    });

    // 4. Cerrar el menú automáticamente al hacer click en un enlace 
    // (Muy importante para Single Page Applications como la tuya)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.textContent = '☰';
        });
    });
});