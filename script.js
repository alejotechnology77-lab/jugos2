document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const ctaButton = document.querySelector('.cta-button');
    const contentSections = document.querySelectorAll('.content-section');
    const nextSectionBtns = document.querySelectorAll('.next-section-btn');
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
            navMenu.classList.remove('show');
            menuToggle.classList.remove('active');
        });
    });

    // Manejar el clic en el botón "Ver Colección"
    ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = ctaButton.getAttribute('data-target');
        showSection(targetId);
    });

    // Manejar el clic en los botones de "Siguiente Sección"
    nextSectionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = btn.getAttribute('data-target');
            showSection(targetId);
        });
    });

    // Manejar el clic en el botón de menú hamburguesa
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        menuToggle.classList.toggle('active');
    });

    // Mostrar la primera sección al cargar la página
    showSection('home-content');
});