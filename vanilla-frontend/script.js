document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initCursorGlow();
    initWelcomeModal();
    initRippleEffect();
    initRoadmapInteractions();
    initThemeToggle();
    simulateLoading();
});

// 1. ANIMATED BACKGROUND (Canvas Particle System)
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = Math.min(window.innerWidth / 15, 100);
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.1;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) this.x = 0;
            else if (this.x < 0) this.x = canvas.width;
            
            if (this.y > canvas.height) this.y = 0;
            else if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// 2. CURSOR GLOW EFFECT (Bonus Feature)
function initCursorGlow() {
    const cursor = document.querySelector('.cursor-glow');
    if (!cursor) return;
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Expand glow on clickable items
    const clickables = document.querySelectorAll('button, a, .glass-card');
    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '400px';
            cursor.style.height = '400px';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '300px';
            cursor.style.height = '300px';
        });
    });
}

// 3. WELCOME EXPERIENCE
function initWelcomeModal() {
    const modal = document.getElementById('welcome-modal');
    const dismissBtn = document.getElementById('dismiss-welcome');
    
    // Show modal after slight delay
    setTimeout(() => {
        if (!sessionStorage.getItem('welcomed')) {
            modal.classList.add('active');
        }
    }, 500);
    
    dismissBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        sessionStorage.setItem('welcomed', 'true');
        showToast('Welcome aboard!', 'success');
        incrementStreak();
    });
}

// 4. ROADMAP & PROGRESS INTERACTIONS
function initRoadmapInteractions() {
    const toggleBtns = document.querySelectorAll('.toggle-complete');
    
    updateProgress();
    
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.disabled) return;
            
            const node = this.closest('.timeline-node');
            const isCompleted = this.getAttribute('data-completed') === 'true';
            
            if (!isCompleted) {
                // Mark complete
                this.setAttribute('data-completed', 'true');
                this.textContent = 'Completed';
                this.classList.remove('btn-outline');
                this.classList.add('btn-success');
                node.classList.add('completed');
                node.classList.remove('active');
                
                showToast('Step completed! +10 XP', 'success');
                
                // Unlock next sibling if exists
                const nextNode = node.nextElementSibling;
                if (nextNode && nextNode.classList.contains('locked')) {
                    setTimeout(() => {
                        nextNode.classList.remove('locked');
                        nextNode.classList.add('active');
                        const nextBtn = nextNode.querySelector('.toggle-complete');
                        nextBtn.removeAttribute('disabled');
                        nextBtn.textContent = 'Mark Complete';
                        showToast('New step unlocked!', 'info');
                    }, 800);
                }
            } else {
                // Unmark complete
                this.setAttribute('data-completed', 'false');
                this.textContent = 'Mark Complete';
                this.classList.add('btn-outline');
                this.classList.remove('btn-success');
                node.classList.remove('completed');
                node.classList.add('active');
            }
            
            updateProgress();
        });
    });
}

function updateProgress() {
    const nodes = document.querySelectorAll('.timeline-node');
    const completedNodes = document.querySelectorAll('.timeline-node.completed');
    
    const percentage = nodes.length === 0 ? 0 : Math.round((completedNodes.length / nodes.length) * 100);
    
    const progressBar = document.getElementById('main-progress');
    const progressGlow = document.querySelector('.progress-glow');
    const progressText = document.getElementById('progress-text');
    
    if (progressBar && progressText) {
        progressBar.style.width = percentage + '%';
        if (progressGlow) progressGlow.style.width = percentage + '%';
        
        // Counter animation
        let current = parseInt(progressText.textContent) || 0;
        const target = percentage;
        
        if (current !== target) {
            const timer = setInterval(() => {
                if (current < target) current++;
                else if (current > target) current--;
                else clearInterval(timer);
                progressText.textContent = current + '%';
            }, 20);
        }
    }
}

// 5. STREAK SYSTEM
function incrementStreak() {
    const streakEl = document.getElementById('current-streak');
    if (!streakEl) return;
    
    // Only increment once per session for demo
    if (sessionStorage.getItem('streakIncremented')) return;
    
    setTimeout(() => {
        let val = parseInt(streakEl.textContent);
        streakEl.textContent = val + 1;
        streakEl.classList.add('streak-animate');
        
        setTimeout(() => streakEl.classList.remove('streak-animate'), 600);
        sessionStorage.setItem('streakIncremented', 'true');
        
        showToast('Streak increased! 🔥', 'success');
    }, 1500);
}

// 6. MICRO-INTERACTIONS (Ripple)
function initRippleEffect() {
    const ripples = document.querySelectorAll('.ripple, .ripple-card');
    
    ripples.forEach(element => {
        element.addEventListener('mousedown', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const span = document.createElement('span');
            span.classList.add('ripple-span');
            
            const size = Math.max(rect.width, rect.height);
            span.style.width = span.style.height = size + 'px';
            span.style.left = x - size/2 + 'px';
            span.style.top = y - size/2 + 'px';
            
            this.appendChild(span);
            
            setTimeout(() => {
                span.remove();
            }, 600);
        });
    });
}

// 7. TOAST NOTIFICATIONS
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    
    let icon = '🔔';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '❌';
    
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('hiding');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// 8. THEME TOGGLE (Bonus)
function initThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    
    let isDark = true;
    
    btn.addEventListener('click', () => {
        const root = document.documentElement;
        if (isDark) {
            root.style.setProperty('--bg-color', '#f8fafc');
            root.style.setProperty('--text-main', '#0f172a');
            root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.7)');
            root.style.setProperty('--glass-border', 'rgba(0, 0, 0, 0.1)');
            root.style.setProperty('--glass-shadow', '0 8px 32px 0 rgba(0, 0, 0, 0.1)');
            document.getElementById('particle-canvas').style.background = 'radial-gradient(circle at 50% 50%, #e2e8f0 0%, #f8fafc 100%)';
            btn.textContent = '🌙';
        } else {
            root.style.setProperty('--bg-color', '#0b0f1a');
            root.style.setProperty('--text-main', '#f8fafc');
            root.style.setProperty('--glass-bg', 'rgba(15, 23, 42, 0.6)');
            root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.08)');
            root.style.setProperty('--glass-shadow', '0 8px 32px 0 rgba(0, 0, 0, 0.37)');
            document.getElementById('particle-canvas').style.background = 'radial-gradient(circle at 50% 50%, #111827 0%, #0b0f1a 100%)';
            btn.textContent = '✨';
        }
        isDark = !isDark;
        
        // Add subtle pop
        btn.style.transform = 'scale(0.8)';
        setTimeout(() => btn.style.transform = '', 150);
    });
}

// 9. SIMULATE LOADING
function simulateLoading() {
    const skeletons = document.querySelectorAll('.skeleton');
    
    setTimeout(() => {
        skeletons.forEach(sk => {
            sk.classList.remove('skeleton');
            sk.textContent = 'React, Next.js, and TypeScript';
            sk.style.color = 'var(--text-muted)';
            sk.style.fontSize = '0.9rem';
        });
    }, 1500);
}
