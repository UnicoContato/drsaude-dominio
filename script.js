document.addEventListener('DOMContentLoaded', () => {
    
    const header = document.getElementById('main-header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
        
        if (window.scrollY > 50) {
            header.classList.add('bg-white/80', 'shadow-md');
            header.classList.remove('border-white/10');
        } else {
            header.classList.remove('bg-white/80', 'shadow-md');
            header.classList.add('border-white/10');
        }
        
        lastScrollY = window.scrollY;
    });

    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = menuBtn.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.classList.replace('ph-x', 'ph-list');
        } else {
            icon.classList.replace('ph-list', 'ph-x');
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuBtn.querySelector('i').classList.replace('ph-x', 'ph-list');
        });
    });

    const revealElements = document.querySelectorAll('.reveal, .slide-left, .slide-right');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    const modal = document.getElementById('privacy-modal');
    const privacyBtn = document.getElementById('privacy-btn');
    const closeBtn = document.getElementById('close-modal-btn');
    const overlay = document.getElementById('close-modal-overlay');

    function openModal() {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    privacyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
});