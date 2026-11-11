// Script de interacción liviano para SPACE TEC Landing Page
document.addEventListener('DOMContentLoaded', () => {
    console.log("SPACE TEC Landing Page cargada correctamente.");

    // Smooth scroll para links de navegación
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
