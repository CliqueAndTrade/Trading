/* ===========================
   PAYMENT REDIRECTION
   =========================== */
function goToPayment(plan, billing) {
    // 💳 Redirection vers la page de paiement
    // Utilise payment-simple.html (plus facile à configurer)
    // Pour une version plus avancée, utilisez payment.html
    window.location.href = `payment-simple.html?plan=${plan}&billing=${billing}`;
}

/* ===========================
   PRICING TABS FUNCTIONALITY
   =========================== */
function showPricing(period) {
    // Masquer tous les grilles de prix
    const monthlyGrid = document.getElementById('monthly');
    const annualGrid = document.getElementById('annual');
    
    // Retirer la classe active de tous les boutons
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => btn.classList.remove('active'));
    
    // Afficher la grille sélectionnée
    if (period === 'monthly') {
        monthlyGrid.classList.add('active');
        tabBtns[0].classList.add('active');
    } else if (period === 'annual') {
        annualGrid.classList.add('active');
        tabBtns[1].classList.add('active');
    }
}

/* ===========================
   SMOOTH SCROLL BEHAVIOR
   =========================== */
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

/* ===========================
   NAVBAR SCROLL EFFECT
   =========================== */
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 8px 30px rgba(255, 0, 110, 0.2)';
        navbar.style.borderColor = 'rgba(255, 0, 110, 0.4)';
    } else {
        navbar.style.boxShadow = '0 4px 20px rgba(255, 0, 110, 0.1)';
        navbar.style.borderColor = 'rgba(255, 0, 110, 0.2)';
    }
});

/* ===========================
   INTERSECTION OBSERVER - ANIMATION ON SCROLL
   =========================== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
            // Stagger animation
            entry.target.style.animationDelay = `${index * 0.1}s`;
        }
    });
}, observerOptions);

// Observer les éléments de la section features
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px) scale(0.95)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
    observer.observe(card);
});

// Observer les cartes de tarification
document.querySelectorAll('.price-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px) scale(0.95)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
    observer.observe(card);
});

// Observer les éléments de sécurité
document.querySelectorAll('.security-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px) scale(0.95)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
    observer.observe(item);
});

// Observer les cas d'usage
document.querySelectorAll('.case-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px) scale(0.95)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
    observer.observe(card);
});

/* ===========================
   PARALLAX EFFECT
   =========================== */
window.addEventListener('mousemove', (e) => {
    const radar = document.querySelector('.radar-animation');
    if (radar) {
        const x = (window.innerWidth - e.clientX * 2) / 100;
        const y = (window.innerHeight - e.clientY * 2) / 100;
        radar.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${Math.atan2(y, x) * 180 / Math.PI}deg)`;
    }
});

/* ===========================
   BUTTON ANIMATIONS
   =========================== */
document.querySelectorAll('.btn-subscribe, .btn-cta, .btn-hero').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Effect ripple
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.borderRadius = '50%';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'rippleEffect 0.6s ease-out';
        
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

/* ===========================
   RIPPLE ANIMATION
   =========================== */
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        from {
            transform: scale(1);
            opacity: 1;
        }
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

/* ===========================
   GLITCH EFFECT ON HOVER
   =========================== */
document.querySelectorAll('.btn-hero, .btn-cta').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.textShadow = '-2px -2px 0 #FF006E, 2px 2px 0 #00FF41';
        setTimeout(() => {
            this.style.textShadow = 'none';
        }, 100);
    });
});

/* ===========================
   FORM VALIDATION (If needed)
   =========================== */
// Ajoutez ici la validation de formulaire pour votre formulaire d'inscription

/* ===========================
   PERFORMANCE OPTIMIZATION
   =========================== */
// Lazy load images if needed
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

/* ===========================
   LOGGING
   =========================== */
console.log('✅ ClickN-Trade Website - Ultra Pro Edition Loaded!');
console.log('🎨 Design: Rose Néon #FF006E + Vert #00FF41');
console.log('⚡ Animations: Advanced CSS3 + JavaScript Effects');
console.log('🚀 Performance: Optimized & Ultra-Smooth');

