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

// Password strength indicator
const passwordInput = document.getElementById('password');
if (passwordInput) {
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        const hint = this.parentElement.parentElement.querySelector('.password-hint');
        
        if (password.length === 0) {
            hint.textContent = 'Use at least 8 characters with letters and numbers';
            hint.style.color = '#666';
        } else if (password.length < 8) {
            hint.textContent = 'Password too short (minimum 8 characters)';
            hint.style.color = '#e74c3c';
        } else if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
            hint.textContent = 'Include both letters and numbers';
            hint.style.color = '#ff6f00';
        } else {
            hint.textContent = 'Strong password ✓';
            hint.style.color = '#43a047';
        }
    });
}

// Signup Form
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            companyName: document.getElementById('companyName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            industry: document.getElementById('industry').value,
            password: document.getElementById('password').value,
            confirmPassword: document.getElementById('confirmPassword').value
        };
        
        // Validate passwords match
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }
        
        // Validate password strength
        if (formData.password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }
        
        if (!/[A-Za-z]/.test(formData.password) || !/[0-9]/.test(formData.password)) {
            alert('Password must contain both letters and numbers.');
            return;
        }
        
        // Check terms acceptance
        const termsAccepted = document.querySelector('input[name="terms"]').checked;
        if (!termsAccepted) {
            alert('Please accept the Terms of Service and Privacy Policy to continue.');
            return;
        }
        
        console.log('Signup attempt:', formData);
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...';
        submitBtn.disabled = true;
        
        // Register user using auth system
        setTimeout(() => {
            // Register the user
            const user = auth.register(formData);
            
            alert(`Welcome ${formData.firstName}! Your account has been created successfully.\n\nA verification email has been sent to ${formData.email}.\n\nRedirecting to dashboard...`);
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

// Real-time email validation
const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('blur', function() {
        const email = this.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email && !emailRegex.test(email)) {
            this.style.borderColor = '#e74c3c';
            alert('Please enter a valid email address');
        } else {
            this.style.borderColor = '#43a047';
        }
    });
}

// Phone number formatting
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function() {
        let value = this.value.replace(/\D/g, '');
        if (value.length > 10) {
            value = value.substring(0, 10);
        }
        this.value = value;
    });
}

console.log('Signup page loaded successfully!');
