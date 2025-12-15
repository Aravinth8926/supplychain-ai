// Password toggle functionality
document.querySelectorAll('.toggle-password').forEach(button => {
    button.addEventListener('click', function() {
        const passwordInput = this.parentElement.querySelector('input');
        const icon = this.querySelector('i');
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
});

// User Login Form
const userLoginForm = document.getElementById('userLoginForm');
if (userLoginForm) {
    userLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
        submitBtn.disabled = true;
        
        // Login user
        setTimeout(() => {
            const user = auth.login(email, password);
            console.log('User logged in:', user);
            
            alert('Login successful! Redirecting to dashboard...');
            window.location.href = 'dashboard.html';
        }, 1500);
    });
}

// Admin Login Form
const adminLoginForm = document.getElementById('adminLoginForm');
if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const adminId = document.getElementById('adminId').value;
        const password = document.getElementById('adminPassword').value;
        const securityCode = document.getElementById('securityCode').value;
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating...';
        submitBtn.disabled = true;
        
        // Admin login
        setTimeout(() => {
            const admin = auth.adminLogin(adminId, password, securityCode);
            console.log('Admin logged in:', admin);
            
            alert('Admin authentication successful! Redirecting to admin panel...');
            window.location.href = 'dashboard.html';
        }, 2000);
    });
}

// Add animation to login features
document.querySelectorAll('.login-feature').forEach((feature, index) => {
    feature.style.opacity = '0';
    feature.style.transform = 'translateY(20px)';
    feature.style.transition = 'all 0.5s ease';
    
    setTimeout(() => {
        feature.style.opacity = '1';
        feature.style.transform = 'translateY(0)';
    }, 300 + (index * 150));
});

console.log('Login page loaded successfully!');
