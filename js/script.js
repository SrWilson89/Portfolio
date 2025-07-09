// Datos de los proyectos
const projectsData = [
    {
        id: 1,
        name: "Previo",
        url: "https://srwilson89.github.io/previo/",
        description: "Proyecto de vista previa y demostración",
        icon: "fas fa-globe",
        tags: ["Web", "Demo"],
    },
    {
        id: 2,
        name: "Error 404",
        url: "https://srwilson89.github.io/error404/",
        description: "Página de error personalizada con diseño creativo",
        icon: "fas fa-exclamation-triangle",
        tags: ["UI/UX", "Error Page"],
    },
    {
        id: 3,
        name: "Reparaciones",
        url: "https://srwilson89.github.io/Reparaciones/",
        description: "Sistema de gestión de reparaciones",
        icon: "fas fa-wrench",
        tags: ["Sistema", "Gestión"],
    },
    {
        id: 4,
        name: "Warhammer 40K Shooter",
        url: "https://srwilson89.github.io/Warhammer40KShooter/",
        description: "Juego de disparos ambientado en el universo Warhammer 40K",
        icon: "fas fa-gamepad",
        tags: ["Juego", "JavaScript"],
    },
    {
        id: 5,
        name: "SQL Manager",
        url: "https://srwilson89.github.io/SQL/",
        description: "Herramienta para gestión y consultas SQL",
        icon: "fas fa-database",
        tags: ["Base de Datos", "SQL"],
    },
    {
        id: 6,
        name: "Generador de Contraseñas",
        url: "https://nerd-lat-passwordgenius-1751568873968-klq0p8.netlify.app/",
        description: "Herramienta para generar contraseñas",
        icon: "fa-solid fa-unlock",
        tags: ["Generador", "Contraseña"],
    },
    {
        id: 7,
        name: "Diseño Web Profesional",
        url: "https://v0-professional-web-design-gamma.vercel.app/",
        description: "Portfolio de diseño web profesional",
        icon: "fas fa-paint-brush",
        tags: ["Diseño", "Portfolio"],
    },
    {
        id: 8, // Puedes cambiar este ID si ya tienes uno con el número 8
        name: "Notas",
        url: "https://srwilson89.github.io/notas/",
        description: "Aplicación para la gestión de notas",
        icon: "fas fa-clipboard",
        tags: ["Productividad", "Notas"],
    }
];

let projects = [...projectsData];

// Función para renderizar proyectos
function renderProjects() {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = '';

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.onclick = () => openProject(project.url);

        projectCard.innerHTML = `
            <div class="card-header">
                <div class="card-header-top">
                    <div class="card-icon-title">
                        <div class="icon-container">
                            <i class="${project.icon} project-icon"></i>
                        </div>
                        <h3 class="project-title">${project.name}</h3>
                    </div>
                    <i class="fas fa-external-link-alt external-link"></i>
                </div>
            </div>
            <div class="card-content">
                <div class="preview-container">
                    <iframe class="preview-iframe" src="${project.url}" loading="lazy" title="Preview of ${project.name}"></iframe>
                    <div class="preview-overlay">
                        <span class="preview-text">Haz clic para ver el proyecto</span>
                    </div>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <button class="project-btn">
                    <i class="fas fa-globe"></i>
                    Ver Proyecto
                </button>
            </div>
        `;

        grid.appendChild(projectCard);
    });

    // Actualizar contador
    document.getElementById('project-count').textContent = projects.length;
}

// Función para añadir nuevos proyectos
function addProject(newProject) {
    projects.push({
        ...newProject,
        id: Date.now()
    });
    renderProjects();
}

// Función para abrir enlace en nueva pestaña
function openProject(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

// Animaciones de entrada
function animateCards() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Actualizar año en el footer
function updateYear() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    updateYear();
    setTimeout(animateCards, 100);
});

// Exponer funciones globalmente para uso en consola
window.addProject = addProject;
window.projects = projects;