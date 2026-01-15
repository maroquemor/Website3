// Establecer fecha actual
const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
if (document.getElementById('current-date')) {
    document.getElementById('current-date').textContent = currentDate.toLocaleDateString('es-ES', options);
}

// Elementos principales de navegación
const cvBtn = document.getElementById('cv-btn');
const letterBtn = document.getElementById('letter-btn');
const projectsBtn = document.getElementById('projects-btn');
const articlesBtn = document.getElementById('articles-btn');

const cvContent = document.getElementById('cv-content');
const letterContent = document.getElementById('letter-content');
const projectsContent = document.getElementById('projects-content');
const articlesContent = document.getElementById('articles-content');
const proyecto1Content = document.getElementById('proyecto1-content');
const proyecto2Content = document.getElementById('proyecto2-content');

// Función para mostrar una sección específica
function showSection(sectionToShow) {
    // Ocultar todas las secciones
    cvContent.classList.add('hidden');
    letterContent.classList.add('hidden');
    if (projectsContent) projectsContent.classList.add('hidden');
    if (articlesContent) articlesContent.classList.add('hidden');
    if (proyecto1Content) proyecto1Content.classList.add('hidden');
    if (proyecto2Content) proyecto2Content.classList.add('hidden');
    
    // Remover clase active de todos los botones principales
    cvBtn.classList.remove('active');
    letterBtn.classList.remove('active');
    if (projectsBtn) projectsBtn.classList.remove('active');
    if (articlesBtn) articlesBtn.classList.remove('active');
    
    // Mostrar la sección seleccionada
    sectionToShow.classList.remove('hidden');
    
    // Scroll al inicio
    window.scrollTo(0, 0);
}

// Navegación principal
cvBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showSection(cvContent);
    cvBtn.classList.add('active');
});

letterBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showSection(letterContent);
    letterBtn.classList.add('active');
});

if (projectsBtn && projectsContent) {
    projectsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showSection(projectsContent);
        projectsBtn.classList.add('active');
    });
}

if (articlesBtn && articlesContent) {
    articlesBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showSection(articlesContent);
        articlesBtn.classList.add('active');
    });
}

// Navegación a proyectos específicos
document.addEventListener('DOMContentLoaded', function() {
    // Botones de vista de proyectos
    const viewProjectBtns = document.querySelectorAll('.view-project-btn');
    viewProjectBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const project = this.getAttribute('data-project');
            
            if (project === 'proyecto1' && proyecto1Content) {
                showSection(proyecto1Content);
                projectsBtn.classList.add('active');
            } else if (project === 'proyecto2' && proyecto2Content) {
                showSection(proyecto2Content);
                projectsBtn.classList.add('active');
            }
        });
    });
    
    // Enlaces de proyectos
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const project = this.getAttribute('data-project');
            
            if (project === 'proyecto1' && proyecto1Content) {
                showSection(proyecto1Content);
                projectsBtn.classList.add('active');
            } else if (project === 'proyecto2' && proyecto2Content) {
                showSection(proyecto2Content);
                projectsBtn.classList.add('active');
            }
        });
    });
    
    // Botones de navegación de proyectos
    const projectNavBtns = document.querySelectorAll('.project-nav-btn');
    projectNavBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const project = this.getAttribute('data-project');
            
            if (project === 'proyecto1' && proyecto1Content) {
                showSection(proyecto1Content);
                projectsBtn.classList.add('active');
            } else if (project === 'proyecto2' && proyecto2Content) {
                showSection(proyecto2Content);
                projectsBtn.classList.add('active');
            }
        });
    });
    
    // Botones de regreso a proyectos
    const backToProjectsBtns = document.querySelectorAll('.back-to-projects-btn');
    backToProjectsBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showSection(projectsContent);
            projectsBtn.classList.add('active');
        });
    });
});

// Botones de regreso generales
const backToCvBtn = document.getElementById('back-to-cv-btn');
const backToCvFromProjects = document.getElementById('back-to-cv-from-projects');
const backToCvFromArticles = document.getElementById('back-to-cv-from-articles');

if (backToCvBtn) {
    backToCvBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showSection(cvContent);
        cvBtn.classList.add('active');
    });
}

if (backToCvFromProjects) {
    backToCvFromProjects.addEventListener('click', function(e) {
        e.preventDefault();
        showSection(cvContent);
        cvBtn.classList.add('active');
    });
}

if (backToCvFromArticles) {
    backToCvFromArticles.addEventListener('click', function(e) {
        e.preventDefault();
        showSection(cvContent);
        cvBtn.classList.add('active');
    });
}

// Funcionalidad de impresión/descarga
if (document.getElementById('print-cv-btn')) {
    document.getElementById('print-cv-btn').addEventListener('click', function() {
        window.print();
    });
}

if (document.getElementById('print-letter-btn')) {
    document.getElementById('print-letter-btn').addEventListener('click', function() {
        window.print();
    });
}

if (document.getElementById('download-cv-btn')) {
    document.getElementById('download-cv-btn').addEventListener('click', function() {
        alert('Funcionalidad de descarga de PDF activada. En un entorno real, esto generaría un PDF del CV.');
        // En implementación real, aquí iría código para generar PDF
    });
}

if (document.getElementById('download-letter-btn')) {
    document.getElementById('download-letter-btn').addEventListener('click', function() {
        alert('Funcionalidad de descarga de PDF activada. En un entorno real, esto generaría un PDF de la carta.');
        // En implementación real, aquí iría código para generar PDF
    });
}

// Mejorar experiencia móvil
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 600) {
        document.querySelector('.container').style.padding = '10px';
    }
    
    // Manejar navegación inicial
    const hash = window.location.hash;
    if (hash === '#proyecto1' && proyecto1Content) {
        showSection(proyecto1Content);
        projectsBtn.classList.add('active');
    } else if (hash === '#proyecto2' && proyecto2Content) {
        showSection(proyecto2Content);
        projectsBtn.classList.add('active');
    }
});