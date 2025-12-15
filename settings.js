// Load user data into forms
function loadUserData() {
    if (!auth.currentUser) return;
    
    const user = auth.currentUser;
    
    // Profile form
    const profileFirstName = document.getElementById('profileFirstName');
    const profileLastName = document.getElementById('profileLastName');
    const profileEmail = document.getElementById('profileEmail');
    const profilePhone = document.getElementById('profilePhone');
    
    if (profileFirstName) profileFirstName.value = user.firstName || '';
    if (profileLastName) profileLastName.value = user.lastName || '';
    if (profileEmail) profileEmail.value = user.email || '';
    if (profilePhone) profilePhone.value = user.phone || '';
    
    // Company form
    const companyName = document.getElementById('companyName');
    const companyIndustry = document.getElementById('companyIndustry');
    
    if (companyName) companyName.value = user.companyName || '';
    if (companyIndustry) companyIndustry.value = user.industry || '';
}

// Load data on page load
document.addEventListener('DOMContentLoaded', loadUserData);

// Settings tabs functionality
const settingsTabs = document.querySelectorAll('.settings-tab');
const settingsPanels = document.querySelectorAll('.settings-panel');

settingsTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        const targetPanel = this.getAttribute('data-tab');
        
        // Remove active class from all tabs and panels
        settingsTabs.forEach(t => t.classList.remove('active'));
        settingsPanels.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding panel
        this.classList.add('active');
        document.getElementById(`${targetPanel}-panel`).classList.add('active');
    });
});

// Toggle switches
document.querySelectorAll('.toggle-switch input').forEach(toggle => {
    toggle.addEventListener('change', function() {
        const label = this.parentElement.querySelector('.toggle-label').textContent;
        const status = this.checked ? 'enabled' : 'disabled';
        console.log(`${label} ${status}`);
    });
});

// Profile form submission
const profileForm = document.getElementById('profileForm');
if (profileForm) {
    profileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const updates = {
            firstName: document.getElementById('profileFirstName').value,
            lastName: document.getElementById('profileLastName').value,
            phone: document.getElementById('profilePhone').value
        };
        
        if (auth.updateProfile(updates)) {
            alert('Profile updated successfully!');
            initializeUserDisplay(); // Refresh display
        } else {
            alert('Failed to update profile');
        }
    });
}

// Company form submission
const companyForm = document.getElementById('companyForm');
if (companyForm) {
    companyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const updates = {
            companyName: document.getElementById('companyName').value,
            industry: document.getElementById('companyIndustry').value
        };
        
        if (auth.updateProfile(updates)) {
            alert('Company information updated successfully!');
        } else {
            alert('Failed to update company information');
        }
    });
}

// Other forms
document.querySelectorAll('.settings-form:not(#profileForm):not(#companyForm)').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Settings saved successfully!');
    });
});

// File upload
document.querySelectorAll('.file-upload button').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('File upload functionality would open here');
    });
});

console.log('Settings page loaded successfully!');
