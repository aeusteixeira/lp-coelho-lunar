// Animação de entrada ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos que devem animar
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.card-lunar, .package-card, .diferencial-item, .process-step, .netflix-card, .portfolio-featured, .portfolio-item');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.4s ease';
        el.style.transitionDelay = `${(index % 6) * 0.08}s`;
        observer.observe(el);
    });
});

// Smooth scroll para links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efeito parallax suave no hero (apenas desktop)
window.addEventListener('scroll', () => {
    // Desativar parallax em mobile (telas menores que 992px)
    if (window.innerWidth < 992) return;
    
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-section');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ========================================
// MODAL DE VÍDEO - ESTILO NETFLIX
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const videoModal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    const videoTitle = document.getElementById('videoTitle');
    const closeModal = document.getElementById('closeModal');
    const netflixCards = document.querySelectorAll('.netflix-card');

    // Abrir modal ao clicar no card de vídeo
    netflixCards.forEach(card => {
        card.addEventListener('click', () => {
            const videoUrl = card.getAttribute('data-video');
            const title = card.getAttribute('data-title');
            
            if (videoUrl) {
                // Usar a URL completa do embed
                videoFrame.src = videoUrl;
                videoTitle.textContent = title;
                
                // Mostrar modal com animação
                videoModal.style.display = 'flex';
                setTimeout(() => {
                    videoModal.classList.add('active');
                }, 10);
                
                // Bloquear scroll do body
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Fechar modal de vídeo
    function closeVideoModal() {
        videoModal.classList.remove('active');
        setTimeout(() => {
            videoModal.style.display = 'none';
            videoFrame.src = '';
        }, 300);
        document.body.style.overflow = '';
    }

    // Fechar ao clicar no X
    if (closeModal) {
        closeModal.addEventListener('click', closeVideoModal);
    }

    // Fechar ao clicar fora do vídeo
    if (videoModal) {
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                closeVideoModal();
            }
        });
    }

    // Fechar com tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
            closeVideoModal();
        }
    });
});

// ========================================
// PORTFÓLIO - NOSSOS TRABALHOS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const videoModal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    const videoTitle = document.getElementById('videoTitle');

    // Clique no vídeo destaque
    const featured = document.querySelector('.portfolio-featured');
    if (featured) {
        featured.addEventListener('click', () => {
            const videoUrl = featured.getAttribute('data-video');
            const title = featured.getAttribute('data-title');
            if (videoUrl && videoModal) {
                videoFrame.src = videoUrl;
                videoTitle.textContent = title;
                videoModal.style.display = 'flex';
                setTimeout(() => videoModal.classList.add('active'), 10);
                document.body.style.overflow = 'hidden';
            }
        });
    }

    // Clique nos items do carrossel
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const videoUrl = item.getAttribute('data-video');
            const title = item.getAttribute('data-title');
            if (videoUrl && videoModal) {
                videoFrame.src = videoUrl;
                videoTitle.textContent = title;
                videoModal.style.display = 'flex';
                setTimeout(() => videoModal.classList.add('active'), 10);
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Navegação do carrossel
    const row = document.querySelector('.portfolio-row');
    const prevBtn = document.querySelector('.portfolio-nav-prev');
    const nextBtn = document.querySelector('.portfolio-nav-next');

    if (row && prevBtn && nextBtn) {
        const scrollAmount = 220;
        prevBtn.addEventListener('click', () => {
            row.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
        nextBtn.addEventListener('click', () => {
            row.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }
});

// ========================================
// MODAL DE IMAGEM - DEPOIMENTOS WHATSAPP
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const imageModal = document.getElementById('imageModal');
    const imageFrame = document.getElementById('imageFrame');
    const imageTitle = document.getElementById('imageTitle');
    const closeImageModal = document.getElementById('closeImageModal');
    const whatsappCards = document.querySelectorAll('.whatsapp-card');

    // Abrir modal ao clicar no card de WhatsApp
    whatsappCards.forEach(card => {
        card.addEventListener('click', () => {
            const imageUrl = card.getAttribute('data-image');
            const title = card.getAttribute('data-title');
            
            if (imageUrl) {
                imageFrame.src = imageUrl;
                imageTitle.textContent = title;
                
                // Mostrar modal com animação
                imageModal.style.display = 'flex';
                setTimeout(() => {
                    imageModal.classList.add('active');
                }, 10);
                
                // Bloquear scroll do body
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Fechar modal de imagem
    function closeImgModal() {
        imageModal.classList.remove('active');
        setTimeout(() => {
            imageModal.style.display = 'none';
            imageFrame.src = '';
        }, 300);
        document.body.style.overflow = '';
    }

    // Fechar ao clicar no X
    if (closeImageModal) {
        closeImageModal.addEventListener('click', closeImgModal);
    }

    // Fechar ao clicar fora da imagem
    if (imageModal) {
        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal) {
                closeImgModal();
            }
        });
    }

    // Fechar com tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && imageModal && imageModal.classList.contains('active')) {
            closeImgModal();
        }
    });
});

