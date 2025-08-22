document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-links');

    // Función para mostrar la sección correcta y ocultar las demás
    function showSection(targetId) {
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Remover 'active' de todos los enlaces y agregarlo al seleccionado
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        const currentLink = document.querySelector(`[data-target="${targetId}"]`);
        if (currentLink) {
            currentLink.classList.add('active');
        }
    }

    // Manejar el clic en los enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            showSection(targetId);
            // Ocultar el menú en móviles después de la selección
            navMenu.classList.remove('show');
        });
    });

    // Manejar el clic en el botón de menú hamburguesa
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Mostrar la primera sección al cargar la página
    showSection('home-content');
});