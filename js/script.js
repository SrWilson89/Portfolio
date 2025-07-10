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
        id: 8,
        name: "Notas",
        url: "https://srwilson89.github.io/notas/",
        description: "Aplicación para la gestión de notas",
        icon: "fas fa-clipboard",
        tags: ["Productividad", "Notas"],
    },
    {
        id: 9, // Nuevo ID, asegúrate de que sea único
        name: "Calculadora",
        url: "https://srwilson89.github.io/Calculadora/",
        description: "Una aplicación de calculadora sencilla", // Puedes ajustar la descripción
        icon: "fas fa-calculator", // Icono sugerido para una calculadora
        tags: ["Herramienta", "JavaScript", "Cálculo"], // Tags sugeridos
    }
];

let projects = [...projectsData];

// Función para renderizar proyectos de forma eficiente
function renderProjects() {
    const grid = document.getElementById('projects-grid');
    const fragment = document.createDocumentFragment();
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const cardHeader = document.createElement('div');
        cardHeader.className = 'card-header';
        
        const cardHeaderTop = document.createElement('div');
        cardHeaderTop.className = 'card-header-top';
        
        const cardIconTitle = document.createElement('div');
        cardIconTitle.className = 'card-icon-title';
        
        const iconContainer = document.createElement('div');
        iconContainer.className = 'icon-container';
        
        const projectIcon = document.createElement('i');
        projectIcon.className = `${project.icon} project-icon`;
        
        const projectTitle = document.createElement('h3');
        projectTitle.className = 'project-title';
        projectTitle.textContent = project.name;
        
        const externalLink = document.createElement('i');
        externalLink.className = 'fas fa-external-link-alt external-link';
        
        iconContainer.appendChild(projectIcon);
        cardIconTitle.append(iconContainer, projectTitle);
        cardHeaderTop.append(cardIconTitle, externalLink);
        cardHeader.appendChild(cardHeaderTop);
        
        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';
        
        const previewContainer = document.createElement('div');
        previewContainer.className = 'preview-container';
        
        const placeholder = document.createElement('div');
        placeholder.className = 'preview-placeholder';
        placeholder.textContent = project.name;
        
        const iframe = document.createElement('iframe');
        iframe.className = 'preview-iframe';
        iframe.loading = 'lazy';
        iframe.title = `Preview of ${project.name}`;
        iframe.dataset.src = project.url;
        iframe.style.display = 'none';
        
        const previewOverlay = document.createElement('div');
        previewOverlay.className = 'preview-overlay';
        
        const previewText = document.createElement('span');
        previewText.className = 'preview-text';
        previewText.textContent = 'Haz clic para ver el proyecto';
        
        previewOverlay.appendChild(previewText);
        previewContainer.append(placeholder, iframe, previewOverlay);
        
        const projectDescription = document.createElement('p');
        projectDescription.className = 'project-description';
        projectDescription.textContent = project.description;
        
        const tags = document.createElement('div');
        tags.className = 'tags';
        
        project.tags.forEach(tagText => {
            const tag = document.createElement('span');
            tag.className = 'tag';
            tag.textContent = tagText;
            tags.appendChild(tag);
        });
        
        const projectBtn = document.createElement('button');
        projectBtn.className = 'project-btn';
        
        const btnIcon = document.createElement('i');
        btnIcon.className = 'fas fa-globe';
        
        const btnText = document.createElement('span');
        btnText.textContent = 'Ver Proyecto';
        
        projectBtn.append(btnIcon, btnText);
        cardContent.append(previewContainer, projectDescription, tags, projectBtn);
        projectCard.append(cardHeader, cardContent);
        
        // Event listeners
        projectCard.addEventListener('click', () => openProject(project.url));
        projectBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openProject(project.url);
        });
        
        fragment.appendChild(projectCard);
    });
    
    grid.appendChild(fragment);
    document.getElementById('project-count').textContent = projects.length;
    
    // Iniciar observador para lazy loading de iframes
    initIframeObserver();
}

// Observador para carga diferida de iframes
function initIframeObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target.querySelector('.preview-iframe');
                if (iframe && iframe.dataset.src) {
                    iframe.src = iframe.dataset.src;
                    iframe.style.display = 'block';
                    const placeholder = iframe.previousElementSibling;
                    if (placeholder && placeholder.classList.contains('preview-placeholder')) {
                        placeholder.style.display = 'none';
                    }
                    observer.unobserve(entry.target);
                }
            }
        });
    }, {rootMargin: '100px'});

    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });
}

// Función para abrir enlace
function openProject(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

// Actualizar año en el footer
function updateYear() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    updateYear();
});

// API para añadir proyectos desde consola (solo desarrollo)
if (process.env.NODE_ENV === 'development') {
    window.addProject = function(newProject) {
        projects.push({
            ...newProject,
            id: Date.now()
        });
        renderProjects();
    };
    window.projects = projects;
}