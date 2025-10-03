// Funcionalidad específica para la galería

// Datos de los proyectos
const proyectosData = {
    proyecto1: {
        titulo: "Identidad Visual SENA",
        descripcion: "Rediseño completo de la identidad visual institucional del SENA CGMLTI, incluyendo logotipo, paleta de colores, tipografía y aplicaciones en diferentes medios. Este proyecto buscó modernizar la imagen institucional manteniendo los valores y la esencia de la organización.",
        imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwTQbdeHZ4Ge9HenyAzJHZ9RCNgP9vMv1I96bj2fBdUjr1qvYldjk0zWYhMNUbbZfmC3wpy31fi3R0Aa7RIqzxnODPX_L-C7mVGrGQFS7a-cyWhCKCT6fa6Z8LPd9KPjnhKThoTsKpiz6HD2iCh31p4ajPsEfp-bGi7Vz5LA2R37WuclQMNdNaT6deYfo/s16000/IMG-20251001-WA0013.jpg",
        categoria: "Branding",
        año: "2025",
        cliente: "SENA CGMLTI",
        duracion: "3 meses",
        equipo: "5 personas",
        herramientas: "Adobe Illustrator, Photoshop, InDesign"
    },
    proyecto2: {
        titulo: "Portal Web CGMLTI",
        descripcion: "Desarrollo de un portal web institucional completamente responsive, con sistema de gestión de contenidos, integración con bases de datos y optimización SEO. El sitio incluye secciones para programas formativos, noticias, eventos y servicios.",
        imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj60CxxJISQjDVHgYPjC0984bTVQ6YOXqN6ZBZlnqYwCmP-PAWFs0JuD542omX8kHN6F52yw8NhCvr543xvEQfTtyE58j43ldPCtoYbdl4Dka73OTzMTleg3FK0L_9KT304boUqgi7fypEZ2BHps_bAocqEls6ZG8XhiQL6DKhU2Gt_1Qs6y3vR1_6L6KE/s16000/IMG-20251001-WA0014.jpg",
        categoria: "Desarrollo Web",
        año: "2025",
        cliente: "SENA CGMLTI",
        duracion: "4 meses",
        equipo: "6 personas",
        herramientas: "HTML5, CSS3, JavaScript, PHP, MySQL"
    },
    proyecto3: {
        titulo: "Campaña Digital SENA",
        descripcion: "Estrategia integral de comunicación digital para redes sociales, incluyendo diseño de piezas gráficas, planificación de contenidos y gestión de comunidades. La campaña logró aumentar el engagement en un 150%.",
        imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1OLcTEIVhOfTT7qwD1OaLhO7vAe2X_TG-ZsEVCCEnr_Ygj5E5BsiaoDKHZRdcTyggUkE1_sxe63hsDyFLr0-ZVDu0NfZ_qhtjRUdZ-NyBuV_rgnqPVHv6EzvyTLNE1P3-KG_BKeY6rHYmCDPkEExFrChczi3TQjJio58EqGVRQkMI8tDvnUHia7tZl34/s16000/IMG-20251001-WA0015.jpg",
        categoria: "Diseño Gráfico",
        año: "2023",
        cliente: "SENA CGMLTI",
        duracion: "6 meses",
        equipo: "4 personas",
        herramientas: "Adobe Creative Suite, Canva, Hootsuite"
    },
    proyecto4: {
        titulo: "Video Institucional",
        descripcion: "Producción audiovisual completa para la promoción del centro, incluyendo guión, grabación, edición y post-producción. El video destaca los programas formativos y las instalaciones del CGMLTI.",
        imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiv_-FEh4tm9vIP_nHiyBxMaYAvYTBflGbjdFEDIUjtwTHfUXyv_suTMl37sZz8qtquv6hVsqCaFV66Yf8x5CWEOt92nmwHS4z3SNVUKpqtK4DgFNm5btQtdL2mgERZAQurffdd-SquIE9b22_F7su8EEAoL8SaYRINftJu6_pTiBf0ddpQmBi4WN-3OW0/s16000/IMG-20251001-WA0016.jpg",
        categoria: "Multimedia",
        año: "2023",
        cliente: "SENA CGMLTI",
        duracion: "2 meses",
        equipo: "5 personas",
        herramientas: "Adobe Premiere, After Effects, Audition"
    },
    proyecto5: {
        titulo: "Sesión Corporativa",
        descripcion: "Sesión de fotografía profesional para el equipo directivo y docente del centro, incluyendo retratos individuales y fotografías grupales para uso en materiales institucionales y sitio web.",
        imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLfVL8RQYr3XJZDoMWeGwet2HKpOcf37Xa7XgbA-O2z1GQdzSiQxGP3kwUTwtSLidYr3309TsVenT_q1kiBpiljh1ioLORb-J3O1Nne5QCsLcmKG1C_RL8oLKoh9U6KbkASqLq8nBxgXXQEvoXtBvbKn0FhVtbw6shvaXq2MPq8wTpks0YiIKOOWUvGj4/s16000/IMG-20251001-WA0017.jpg",
        categoria: "Fotografía",
        año: "2022",
        cliente: "SENA CGMLTI",
        duracion: "1 mes",
        equipo: "3 personas",
        herramientas: "Canon EOS R5, Adobe Lightroom, Photoshop"
    },
    proyecto6: {
        titulo: "Manual de Marca",
        descripcion: "Desarrollo de un manual completo de identidad visual que establece las normas y directrices para el uso correcto de la marca SENA CGMLTI en todos los medios y aplicaciones.",
        imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWwQJo_Wzbzvs7H0JkXkSTzqBobLZ0-OnCUz3NWxDHQZrUZ8fhFfD2D59LPEdWEbaNd4sDGY1EOQ1MsCb2txXf4a6FdSELNMzMzklBAkPibkCjWeOSCLhNt8Kv1ewICCOVTsBmlu_FJnuEqjyrBgk_jTBSGP9YWr5KnEUVx957XlYSk8I1lHR_l-Ame3U/s16000/IMG-20251001-WA0020.jpg",
        categoria: "Branding",
        año: "2022",
        cliente: "SENA CGMLTI",
        duracion: "2 meses",
        equipo: "3 personas",
        herramientas: "Adobe InDesign, Illustrator, Acrobat"
    },
    proyecto7: {
        titulo: "App Móvil Educativa",
        descripcion: "Desarrollo de una aplicación móvil para la gestión de aprendices, incluyendo consulta de horarios, calificaciones, eventos y comunicación directa con instructores. Disponible para iOS y Android.",
        imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFvd6N-0qUQWUtb1yLJxClDwdylqEcUH-0GDiAPiIVh2GmcLUMi1yDlHFCgpPFromQm3p2bwP7nzWdNjlw9t_5c4CImK7zONqyN_SGACta7P7Fs0Qnm-1WcGFp8AQb1eumxjsYRl4OyCE_THtfQHZEHtwnSCujUQ00VSOp1Xqeu-S1lQFgwuFUcnriWts/s16000/IMG-20251001-WA0018.jpg",
        categoria: "Desarrollo Web",
        año: "2021",
        cliente: "SENA CGMLTI",
        duracion: "5 meses",
        equipo: "7 personas",
        herramientas: "React Native, Node.js, MongoDB"
    },
    proyecto8: {
        titulo: "Material Impreso",
        descripcion: "Diseño y producción de material promocional impreso incluyendo folletos, carteles, banners y material POP para eventos y ferias educativas del centro.",
        imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmdebs5zTULAypS3Qsp4__FarcC2Jg6yPzsV3KS1I1y6ws49aDediQK6Y3O1gdcb5orcuYtm5DUx3exkJJjmVps-gYaqKL7eHaom_GmuGYBVuo7qJw6JgB0xMoq1_uIKhooeYjVZ9Xj639cbDhAE8-e-rtt9li_A6A5Wt3IquQgrvCY5NM_eCrXZG3ilk/s16000/IMG-20251001-WA0019.jpg",
        categoria: "Diseño Gráfico",
        año: "2021",
        cliente: "SENA CGMLTI",
        duracion: "3 meses",
        equipo: "4 personas",
        herramientas: "Adobe InDesign, Illustrator, Photoshop"
    }
};

// Variables globales
let currentFilter = 'todos';
let currentYear = 'todos';

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    initializeGallery();
    setupEventListeners();
});

function initializeGallery() {
    // Configurar animaciones de entrada
    const proyectos = document.querySelectorAll('.proyecto-item');
    proyectos.forEach((proyecto, index) => {
        proyecto.style.animationDelay = `${index * 0.1}s`;
        proyecto.classList.add('animate-in');
    });
}

function setupEventListeners() {
    // Event listeners para cerrar modal con Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            GaleriaInHouse52.closeProjectModal();
        }
    });
    
    // Event listener para cerrar modal al hacer click fuera
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                GaleriaInHouse52.closeProjectModal();
            }
        });
    }
}

// Función para filtrar proyectos por categoría
function filterProjects(categoria) {
    currentFilter = categoria;
    
    // Actualizar botones activos
    const filtros = document.querySelectorAll('.filtro-btn');
    filtros.forEach(btn => btn.classList.remove('active'));
    
    // Encontrar y activar el botón correspondiente
    const activeBtn = Array.from(filtros).find(btn => 
        btn.textContent.toLowerCase().includes(categoria.toLowerCase()) || 
        (categoria === 'todos' && btn.textContent === 'Todos')
    );
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    // Filtrar proyectos
    const proyectos = document.querySelectorAll('.proyecto-item');
    
    proyectos.forEach(proyecto => {
        const proyectoCategoria = proyecto.dataset.categoria;
        const proyectoAño = proyecto.dataset.año;
        
        let shouldShow = true;
        
        // Filtrar por categoría
        if (categoria !== 'todos') {
            // Convertir a minúsculas para comparación insensible a mayúsculas/minúsculas
            const categoriaLower = categoria.toLowerCase();
            const proyectoCategoriaLower = proyectoCategoria.toLowerCase();
            
            // Verificar si la categoría está contenida en la categoría del proyecto
            shouldShow = shouldShow && proyectoCategoriaLower.includes(categoriaLower);
        }
        
        // Filtrar por año si hay filtro activo
        if (currentYear !== 'todos') {
            shouldShow = shouldShow && proyectoAño === currentYear;
        }
        
        if (shouldShow) {
            proyecto.classList.remove('hidden');
            proyecto.classList.add('filtering-in');
            setTimeout(() => {
                proyecto.classList.remove('filtering-in');
            }, 500);
        } else {
            proyecto.classList.add('filtering-out');
            setTimeout(() => {
                proyecto.classList.add('hidden');
                proyecto.classList.remove('filtering-out');
            }, 300);
        }
    });
    
    // Mostrar mensaje si no hay proyectos
    checkEmptyResults();
}

// Función para filtrar proyectos por año
function filterByYear(año) {
    currentYear = año;
    
    const proyectos = document.querySelectorAll('.proyecto-item');
    
    proyectos.forEach(proyecto => {
        const proyectoCategoria = proyecto.dataset.categoria;
        const proyectoAño = proyecto.dataset.año;
        
        let shouldShow = true;
        
        // Filtrar por año
        if (año !== 'todos') {
            shouldShow = shouldShow && proyectoAño === año;
        }
        
        // Filtrar por categoría si hay filtro activo
        if (currentFilter !== 'todos') {
            shouldShow = shouldShow && proyectoCategoria === currentFilter;
        }
        
        if (shouldShow) {
            proyecto.classList.remove('hidden');
            proyecto.classList.add('filtering-in');
            setTimeout(() => {
                proyecto.classList.remove('filtering-in');
            }, 500);
        } else {
            proyecto.classList.add('filtering-out');
            setTimeout(() => {
                proyecto.classList.add('hidden');
                proyecto.classList.remove('filtering-out');
            }, 300);
        }
    });
    
    checkEmptyResults();
}

// Función para verificar si hay resultados vacíos
function checkEmptyResults() {
    const proyectosVisibles = document.querySelectorAll('.proyecto-item:not(.hidden)');
    const grid = document.getElementById('proyectosGrid');
    
    // Remover mensaje anterior si existe
    const existingMessage = document.querySelector('.no-projects');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    if (proyectosVisibles.length === 0) {
        const noProjectsMessage = document.createElement('div');
        noProjectsMessage.className = 'no-projects';
        noProjectsMessage.innerHTML = `
            <i class="fas fa-search"></i>
            <h3>No se encontraron proyectos</h3>
            <p>No hay proyectos que coincidan con los filtros seleccionados.</p>
        `;
        grid.parentNode.appendChild(noProjectsMessage);
    }
}

// Función para abrir modal de proyecto
function openProjectModal(proyectoId) {
    console.log('Abriendo modal para proyecto:', proyectoId);
    const proyecto = proyectosData[proyectoId];
    
    if (!proyecto) {
        console.error('No se encontró información para el proyecto:', proyectoId);
        return;
    }
    
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    
    if (!modal || !modalContent) {
        console.error('No se encontraron elementos del modal');
        return;
    }
    
    console.log('Datos del proyecto:', proyecto);
    
    modalContent.innerHTML = `
        <div class="modal-proyecto">
            <img src="${proyecto.imagen}" alt="${proyecto.titulo}">
            <h2>${proyecto.titulo}</h2>
            <p class="proyecto-descripcion">${proyecto.descripcion}</p>
            
            <div class="proyecto-detalles">
                <div class="detalle-item">
                    <h4>Categoría</h4>
                    <p>${proyecto.categoria}</p>
                </div>
                <div class="detalle-item">
                    <h4>Año</h4>
                    <p>${proyecto.año}</p>
                </div>
                <div class="detalle-item">
                    <h4>Cliente</h4>
                    <p>${proyecto.cliente}</p>
                </div>
                <div class="detalle-item">
                    <h4>Duración</h4>
                    <p>${proyecto.duracion}</p>
                </div>
                <div class="detalle-item">
                    <h4>Equipo</h4>
                    <p>${proyecto.equipo}</p>
                </div>
                <div class="detalle-item">
                    <h4>Herramientas</h4>
                    <p>${proyecto.herramientas}</p>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Agregar animación de entrada
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

// Función para cerrar modal de proyecto
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('show');
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Función para cargar más proyectos (para futuras expansiones)
function loadMoreProjects() {
    // Simular carga de más proyectos
    const grid = document.getElementById('proyectosGrid');
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading';
    loadingDiv.innerHTML = '<div class="spinner"></div>';
    
    grid.parentNode.appendChild(loadingDiv);
    
    // Simular tiempo de carga
    setTimeout(() => {
        loadingDiv.remove();
        // Aquí se cargarían más proyectos desde una API
        console.log('Cargando más proyectos...');
    }, 2000);
}

// Función para buscar proyectos
function searchProjects(searchTerm) {
    const proyectos = document.querySelectorAll('.proyecto-item');
    const term = searchTerm.toLowerCase();
    
    proyectos.forEach(proyecto => {
        const card = proyecto.querySelector('.proyecto-card');
        const titulo = card.querySelector('h3').textContent.toLowerCase();
        const descripcion = card.querySelector('p').textContent.toLowerCase();
        
        if (titulo.includes(term) || descripcion.includes(term)) {
            proyecto.classList.remove('hidden');
        } else {
            proyecto.classList.add('hidden');
        }
    });
    
    checkEmptyResults();
}

// Función para ordenar proyectos
function sortProjects(criteria) {
    const grid = document.getElementById('proyectosGrid');
    const proyectos = Array.from(grid.children);
    
    proyectos.sort((a, b) => {
        switch(criteria) {
            case 'año-desc':
                return b.dataset.año.localeCompare(a.dataset.año);
            case 'año-asc':
                return a.dataset.año.localeCompare(b.dataset.año);
            case 'nombre-asc':
                const titleA = a.querySelector('h3').textContent;
                const titleB = b.querySelector('h3').textContent;
                return titleA.localeCompare(titleB);
            case 'nombre-desc':
                const titleA2 = a.querySelector('h3').textContent;
                const titleB2 = b.querySelector('h3').textContent;
                return titleB2.localeCompare(titleA2);
            default:
                return 0;
        }
    });
    
    // Reordenar elementos en el DOM
    proyectos.forEach(proyecto => {
        grid.appendChild(proyecto);
    });
}

// Función para exportar galería (para futuras funcionalidades)
function exportGallery(format) {
    console.log(`Exportando galería en formato: ${format}`);
    // Implementar lógica de exportación
}

// Función para compartir proyecto
function shareProject(proyectoId) {
    const proyecto = proyectosData[proyectoId];
    if (!proyecto) return;
    
    if (navigator.share) {
        navigator.share({
            title: proyecto.titulo,
            text: proyecto.descripcion,
            url: window.location.href
        });
    } else {
        // Fallback para navegadores que no soportan Web Share API
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            showNotification('Enlace copiado al portapapeles', 'success');
        });
    }
}

// Función para mostrar notificaciones (reutilizada del script principal)
function showNotification(message, type = 'info', duration = 3000) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#39A900';
            break;
        case 'error':
            notification.style.backgroundColor = '#dc3545';
            break;
        case 'warning':
            notification.style.backgroundColor = '#ffc107';
            notification.style.color = '#000';
            break;
        default:
            notification.style.backgroundColor = '#17a2b8';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, duration);
}

// Exportar funciones para uso global
window.GaleriaInHouse52 = {
    filterProjects,
    filterByYear,
    openProjectModal,
    closeProjectModal,
    searchProjects,
    sortProjects,
    shareProject,
    loadMoreProjects
};