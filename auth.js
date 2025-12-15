// Authentication and User Management System

// User roles
const USER_ROLES = {
    USER: 'user',
    ADMIN: 'admin'
};

// Store user data in localStorage (in production, this would be in a database)
class AuthManager {
    constructor() {
        this.currentUser = this.getCurrentUser();
    }

    // Register new user
    register(userData) {
        const user = {
            id: this.generateUserId(),
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            phone: userData.phone,
            companyName: userData.companyName,
            industry: userData.industry,
            role: USER_ROLES.USER, // Default role for new registrations
            createdAt: new Date().toISOString(),
            profilePicture: null
        };

        // Store user data
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        // Store in users list
        const users = this.getAllUsers();
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        return user;
    }

    // Login user
    login(email, password, role = USER_ROLES.USER) {
        // In production, validate against backend
        // For demo, we'll check if user exists or create a demo user
        
        const users = this.getAllUsers();
        let user = users.find(u => u.email === email);

        if (!user) {
            // Create demo user for login
            user = {
                id: this.generateUserId(),
                firstName: 'Demo',
                lastName: 'User',
                email: email,
                phone: '+91 98765 43210',
                companyName: 'Demo Company',
                industry: 'Electronics',
                role: role,
                createdAt: new Date().toISOString(),
                profilePicture: null
            };
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
        }

        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
    }

    // Admin login
    adminLogin(adminId, password, securityCode) {
        // Create admin user
        const admin = {
            id: adminId,
            firstName: 'Admin',
            lastName: 'User',
            email: 'admin@supplychainai.com',
            phone: '+91 98765 43210',
            companyName: 'SupplyChainAI',
            industry: 'Technology',
            role: USER_ROLES.ADMIN,
            createdAt: new Date().toISOString(),
            profilePicture: null
        };

        localStorage.setItem('currentUser', JSON.stringify(admin));
        return admin;
    }

    // Logout
    logout() {
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    }

    // Get current logged-in user
    getCurrentUser() {
        const userStr = localStorage.getItem('currentUser');
        return userStr ? JSON.parse(userStr) : null;
    }

    // Get all users
    getAllUsers() {
        const usersStr = localStorage.getItem('users');
        return usersStr ? JSON.parse(usersStr) : [];
    }

    // Check if user is logged in
    isLoggedIn() {
        return this.currentUser !== null;
    }

    // Check if user is admin
    isAdmin() {
        return this.currentUser && this.currentUser.role === USER_ROLES.ADMIN;
    }

    // Check if user has access to a feature
    hasAccess(feature) {
        if (!this.isLoggedIn()) return false;
        
        // Admin-only features
        const adminOnlyFeatures = [
            'user-management',
            'system-settings',
            'advanced-analytics',
            'audit-logs'
        ];

        if (adminOnlyFeatures.includes(feature)) {
            return this.isAdmin();
        }

        // All logged-in users have access to other features
        return true;
    }

    // Update user profile
    updateProfile(updates) {
        if (!this.currentUser) return false;

        this.currentUser = { ...this.currentUser, ...updates };
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

        // Update in users list
        const users = this.getAllUsers();
        const index = users.findIndex(u => u.id === this.currentUser.id);
        if (index !== -1) {
            users[index] = this.currentUser;
            localStorage.setItem('users', JSON.stringify(users));
        }

        return true;
    }

    // Generate unique user ID
    generateUserId() {
        return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    // Get user initials for avatar
    getUserInitials() {
        if (!this.currentUser) return 'U';
        const first = this.currentUser.firstName?.charAt(0) || '';
        const last = this.currentUser.lastName?.charAt(0) || '';
        return (first + last).toUpperCase();
    }

    // Get user full name
    getUserFullName() {
        if (!this.currentUser) return 'User';
        return `${this.currentUser.firstName} ${this.currentUser.lastName}`;
    }
}

// Create global auth instance
const auth = new AuthManager();

// Check authentication on protected pages
function requireAuth() {
    if (!auth.isLoggedIn()) {
        alert('Please login to access this page');
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// Check admin access
function requireAdmin() {
    if (!auth.isLoggedIn()) {
        alert('Please login to access this page');
        window.location.href = 'login.html';
        return false;
    }
    
    if (!auth.isAdmin()) {
        alert('Access Denied: This feature is only available to administrators');
        window.location.href = 'dashboard.html';
        return false;
    }
    
    return true;
}

// Initialize user display on page load
function initializeUserDisplay() {
    if (!auth.isLoggedIn()) return;

    // Update user profile display
    const userProfileElements = document.querySelectorAll('.user-profile');
    userProfileElements.forEach(element => {
        const nameSpan = element.querySelector('span');
        const img = element.querySelector('img');
        
        if (nameSpan) {
            nameSpan.textContent = auth.getUserFullName();
        }
        
        if (img) {
            // Update avatar with initials
            const initials = auth.getUserInitials();
            img.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%231e88e5'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' fill='white' font-size='40' font-family='Arial'%3E${initials}%3C/text%3E%3C/svg%3E`;
        }
    });

    // Update welcome message
    const welcomeMessages = document.querySelectorAll('.header-left h1');
    welcomeMessages.forEach(element => {
        if (element.textContent.includes('Welcome back')) {
            element.textContent = `Welcome back, ${auth.currentUser.firstName}!`;
        }
    });

    // Hide admin-only features for regular users
    if (!auth.isAdmin()) {
        document.querySelectorAll('[data-admin-only]').forEach(element => {
            element.style.display = 'none';
        });
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { auth, requireAuth, requireAdmin, initializeUserDisplay };
}
