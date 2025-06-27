// Menu Mobile Elegante
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuOverlay = document.querySelector('.nav-menu-overlay');
    const body = document.body;
    
    // Função para fechar o menu
    function closeMenu() {
        navMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        body.style.overflow = 'auto';
    }
    
    // Função para abrir o menu
    function openMenu() {
        navMenu.classList.add('active');
        menuOverlay.classList.add('active');
        menuToggle.setAttribute('aria-expanded', 'true');
        body.style.overflow = 'hidden';
    }
    
    // Abrir/fechar menu ao clicar no botão
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        
        if (isExpanded) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    
    // Fechar menu ao clicar no overlay
    menuOverlay.addEventListener('click', closeMenu);
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Fechar menu ao pressionar ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Fechar menu ao redimensionar para desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            closeMenu();
        }
    });

    // Rolagem suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                closeMenu();
            }
        });
    });
});

// Adicionar classe de ativo ao item do menu ativo

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Animação de elementos ao rolar a página
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .about-content, .contact-content');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Inicializar animações na primeira renderização
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    
    // Adicionar classe de carregamento para animações iniciais
    setTimeout(() => {
        document.querySelector('.hero h2').classList.add('animate');
        document.querySelector('.hero p').classList.add('animate');
        document.querySelector('.hero .btn').classList.add('animate');
    }, 500);
});

// Validação do formulário de contato
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulação de envio do formulário
        const formData = new FormData(this);
        const formValues = Object.fromEntries(formData.entries());
        
        // Aqui você pode adicionar o código para enviar os dados para um servidor
        console.log('Formulário enviado:', formValues);
        
        // Feedback visual para o usuário
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        this.reset();
    });
}

// Atualizar o ano no rodapé
document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear();
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        footerYear.innerHTML = `&copy; ${year} PetLife - Todos os direitos reservados`;
    }
});

// Adicionar efeito de hover nos cards de serviço
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('i');
        icon.style.transform = 'scale(1.1) rotate(5deg)';
        icon.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('i');
        icon.style.transform = 'scale(1) rotate(0)';
    });
});

// Adicionar classe de carregamento ao body para transições suaves
document.body.classList.add('loaded');
