/* ===========================
   CONFIGURATION SITE CLICKN-TRADE
   =========================== */

// 🎨 COULEURS PERSONNALISABLES
const COLORS = {
    primary: '#9945ff',        // Violet principal
    secondary: '#1a0f2e',      // Noir bleuté
    accent_green: '#00ff41',   // Vert radar
    dark_bg: '#0a0515',        // Fond très sombre
    card_bg: '#1a1530',        // Fond cartes
    text_primary: '#ffffff',   // Texte blanc
    text_secondary: '#b8a9c7', // Texte gris
    border: '#2d1f4a'          // Bordures
};

// 📱 TARIFS (À METTRE À JOUR)
const PRICING = {
    starter: {
        monthly: 14.99,
        annual: 149,
        pairs: 5,
        discount: 31
    },
    pro: {
        monthly: 29.99,
        annual: 299,
        pairs: 15,
        discount: 61
    },
    elite: {
        monthly: 69.99,
        annual: 649,
        pairs: 40,
        discount: 191
    }
};

// 📊 STATISTIQUES (À AFFICHER OPTIONNELLEMENT)
const STATS = {
    users_active: 2500,
    total_trades: 145000,
    win_rate: '73%',
    aum: '$12.5M',  // Assets Under Management
    uptime: '99.97%'
};

// 🔗 LIENS IMPORTANTS
const LINKS = {
    discord: 'https://discord.gg/clickntrade',
    twitter: 'https://twitter.com/clickntrade',
    telegram: 'https://t.me/clickntrade',
    github: 'https://github.com/clickntrade',
    email: 'support@clickn-trade.com',
    payment_stripe: 'https://buy.stripe.com/clickntrade',
    documentation: 'https://docs.clickn-trade.com',
    api_docs: 'https://api.clickn-trade.com'
};

// 🏢 INFORMATIONS ENTREPRISE
const COMPANY = {
    name: 'ClickN-Trade',
    legal_name: 'ClickN-Trade SAS',
    email: 'support@clickn-trade.com',
    phone: '+33 (0) 1 XX XX XX XX',
    address: '123 Rue de la Bourse, 75002 Paris, France',
    siret: 'XX XXX XXX XXXXX',
    tva: 'FR XX XXX XXX XXX',
    year_founded: 2024
};

// 🎯 FONCTIONNALITÉS À AFFICHER
const FEATURES = [
    {
        id: 'ai',
        icon: '🤖',
        title: 'Intelligence Artificielle',
        description: '48 indicateurs techniques avancés'
    },
    {
        id: 'automation',
        icon: '⚙️',
        title: 'Automatisation Complète',
        description: '24/7 sans interruption'
    },
    {
        id: 'risk',
        icon: '💼',
        title: 'Gestion des Risques',
        description: 'Position sizing intelligent'
    },
    {
        id: 'security',
        icon: '🔐',
        title: 'Sécurité Maximale',
        description: 'Vos fonds toujours contrôlés'
    },
    {
        id: 'speed',
        icon: '⚡',
        title: 'Exécution Ultra-Rapide',
        description: '< 50ms de latence'
    },
    {
        id: 'monitoring',
        icon: '📊',
        title: 'Monitoring 24/7',
        description: 'Dashboard + notifications'
    },
    {
        id: 'multipairs',
        icon: '💱',
        title: 'Multi-Paires Trading',
        description: 'BTC, ETH, SOL, XRP...'
    },
    {
        id: 'ml_models',
        icon: '🧠',
        title: 'Modèles ML Avancés',
        description: 'Random Forest, XGBoost, LightGBM'
    }
];

// 📝 CAS D'USAGE
const USE_CASES = [
    {
        type: 'Débutant',
        description: 'Apprendre le trading sans risque'
    },
    {
        type: 'Trader Actif',
        description: 'Automatiser votre stratégie'
    },
    {
        type: 'Investisseur',
        description: 'Revenu passif 24/7'
    },
    {
        type: 'Agence',
        description: 'Vendre le service à vos clients'
    }
];

// 🔒 GARANTIES DE SÉCURITÉ
const SECURITY_FEATURES = [
    {
        icon: '🔐',
        title: 'Clés API Sécurisées',
        description: 'Jamais stockées sur nos serveurs'
    },
    {
        icon: '🛡️',
        title: 'Configuration Chiffrée',
        description: 'Chiffrement local maximum'
    },
    {
        icon: '⚡',
        title: 'Limitation du Bot',
        description: 'Ne peut que trader, pas retirer'
    },
    {
        icon: '🚨',
        title: 'Kill Switch',
        description: 'Arrêt instantané en cas de problème'
    }
];

// 🌍 ENVIRONNEMENTS
const ENVIRONMENTS = {
    development: 'http://localhost:8000',
    staging: 'https://staging.clickn-trade.com',
    production: 'https://clickn-trade.com'
};

// 🔔 NOTIFICATIONS
const NOTIFICATIONS = {
    enable_discord: true,
    discord_webhook: 'https://discord.com/api/webhooks/YOUR_WEBHOOK_ID',
    enable_email: true,
    email_service: 'smtp.gmail.com',
    enable_telegram: true,
    telegram_bot_token: 'YOUR_BOT_TOKEN',
};

// 📈 ANALYTIQUES
const ANALYTICS = {
    google_analytics_id: 'G-XXXXXXXXXX',
    gtag_enabled: false,
    hotjar_id: 'XXXXXXX',
    segment_key: 'YOUR_SEGMENT_KEY'
};

// 🛒 PAIEMENT
const PAYMENT = {
    stripe_public_key: 'pk_live_XXXXXXXXX',
    stripe_secret_key: 'sk_live_XXXXXXXXX',  // Ne JAMAIS committer!
    paypal_client_id: 'YOUR_PAYPAL_ID',
    currency: 'EUR',
    country: 'FR'
};

// ✉️ EMAILS
const EMAILS = {
    support: 'support@clickn-trade.com',
    sales: 'sales@clickn-trade.com',
    billing: 'billing@clickn-trade.com',
    noreply: 'noreply@clickn-trade.com'
};

// 🗣️ CONTENU MULTILINGUE (Prochainement)
const LANGUAGES = {
    fr: {
        nav_features: 'Fonctionnalités',
        nav_pricing: 'Tarifs',
        nav_security: 'Sécurité',
        nav_contact: 'Contact'
    },
    en: {
        nav_features: 'Features',
        nav_pricing: 'Pricing',
        nav_security: 'Security',
        nav_contact: 'Contact'
    },
    es: {
        nav_features: 'Características',
        nav_pricing: 'Precios',
        nav_security: 'Seguridad',
        nav_contact: 'Contacto'
    }
};

// 📱 APPAREILS
const BREAKPOINTS = {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
    wide: 1440,
    ultra_wide: 1920
};

// ⏱️ TIMEOUTS
const TIMEOUTS = {
    api_request: 30000,
    idle_session: 1800000,  // 30 minutes
    cache_ttl: 3600000      // 1 heure
};

// 🎬 ANIMATIONS
const ANIMATIONS = {
    fade_duration: 600,
    slide_duration: 400,
    bounce_duration: 300,
    radar_rotation: 8000  // 8 secondes pour rotation complète
};

// 📊 SEO
const SEO = {
    title: 'ClickN-Trade - Bot Trading IA | Automatisez vos trades 24/7',
    description: 'Bot de trading automatisé basé sur l\'IA pour maximiser vos gains sur Binance. Stratégies intelligentes 24h/24, 7j/7.',
    keywords: 'trading bot, trading automatisé, bot binance, trading ia, bot trading gratuit',
    author: 'ClickN-Trade Team',
    og_image: 'https://clickn-trade.com/logo.png'
};

// 🎯 GOALS & KPI
const GOALS = {
    conversion_rate_target: 0.05,  // 5%
    bounce_rate_target: 0.30,      // 30%
    avg_session_duration: 300,     // 5 minutes
    pages_per_session: 3
};

// 🔧 FONCTIONNALITÉS À IMPLÉMENTER
const TODO = [
    {
        priority: 'HIGH',
        task: 'Intégrer système de paiement Stripe',
        deadline: '2026-07-01'
    },
    {
        priority: 'HIGH',
        task: 'Ajouter formulaire de contact',
        deadline: '2026-06-25'
    },
    {
        priority: 'MEDIUM',
        task: 'Implémenter live chat',
        deadline: '2026-07-15'
    },
    {
        priority: 'MEDIUM',
        task: 'Ajouter blog/documentation',
        deadline: '2026-08-01'
    },
    {
        priority: 'LOW',
        task: 'Multi-langue (EN, ES, DE)',
        deadline: '2026-09-01'
    }
];

// 📝 Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        COLORS,
        PRICING,
        STATS,
        LINKS,
        COMPANY,
        FEATURES,
        USE_CASES,
        SECURITY_FEATURES,
        ENVIRONMENTS,
        NOTIFICATIONS,
        ANALYTICS,
        PAYMENT,
        EMAILS,
        LANGUAGES,
        BREAKPOINTS,
        TIMEOUTS,
        ANIMATIONS,
        SEO,
        GOALS,
        TODO
    };
}

// Pour débugage en console
console.log('✅ Configuration ClickN-Trade chargée');
console.log('Colors:', COLORS);
console.log('Pricing:', PRICING);
