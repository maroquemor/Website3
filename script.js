// Establecer fecha actual
const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('current-date').textContent = currentDate.toLocaleDateString('es-ES', options);

// Navegación entre CV, carta, proyectos y artículos
const cvBtn = document.getElementById('cv-btn');
const letterBtn = document.getElementById('letter-btn');
const projectsBtn = document.getElementById('projects-btn');
const articlesBtn = document.getElementById('articles-btn');

const cvContent = document.getElementById('cv-content');
const letterContent = document.getElementById('letter-content');
const projectsContent = document.getElementById('projects-content');
const articlesContent = document.getElementById('articles-content');

// Función para mostrar una sección y ocultar las demás
function showSection(sectionToShow) {
    // Ocultar todas las secciones
    cvContent.classList.add('hidden');
    letterContent.classList.add('hidden');
    projectsContent.classList.add('hidden');
    articlesContent.classList.add('hidden');
    
    // Remover active de todos los botones
    cvBtn.classList.remove('active');
    letterBtn.classList.remove('active');
    projectsBtn.classList.remove('active');
    articlesBtn.classList.remove('active');
    
    // Mostrar la sección seleccionada
    sectionToShow.classList.remove('hidden');
    
    // Scroll al inicio
    window.scrollTo(0, 0);
}

// Event listeners para los botones
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

projectsBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showSection(projectsContent);
    projectsBtn.classList.add('active');
});

articlesBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showSection(articlesContent);
    articlesBtn.classList.add('active');
});

// Botones de volver al CV
const backToCvBtn = document.getElementById('back-to-cv-btn');
const backToCvBtnProjects = document.getElementById('back-to-cv-btn-projects');
const backToCvBtnArticles = document.getElementById('back-to-cv-btn-articles');

if (backToCvBtn) {
    backToCvBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showSection(cvContent);
        cvBtn.classList.add('active');
    });
}

if (backToCvBtnProjects) {
    backToCvBtnProjects.addEventListener('click', function(e) {
        e.preventDefault();
        showSection(cvContent);
        cvBtn.classList.add('active');
    });
}

if (backToCvBtnArticles) {
    backToCvBtnArticles.addEventListener('click', function(e) {
        e.preventDefault();
        showSection(cvContent);
        cvBtn.classList.add('active');
    });
}

// Funcionalidad de impresión/descarga
document.getElementById('print-cv-btn').addEventListener('click', function() {
    window.print();
});

document.getElementById('print-letter-btn').addEventListener('click', function() {
    window.print();
});

document.getElementById('download-cv-btn').addEventListener('click', function() {
    alert('Funcionalidad de descarga de PDF activada. En un entorno real, esto generaría un PDF del CV.');
    // En implementación real, aquí iría código para generar PDF
});

document.getElementById('download-letter-btn').addEventListener('click', function() {
    alert('Funcionalidad de descarga de PDF activada. En un entorno real, esto generaría un PDF de la carta.');
    // En implementación real, aquí iría código para generar PDF
});

document.getElementById('download-article-btn').addEventListener('click', function() {
    alert('Funcionalidad de descarga de PDF activada. En un entorno real, esto generaría un PDF del artículo.');
    // En implementación real, aquí iría código para generar PDF
});

// Mejorar experiencia móvil
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 600) {
        document.querySelector('.container').style.padding = '10px';
    }
    
    // Inicializar con CV visible
    showSection(cvContent);
    cvBtn.classList.add('active');
});