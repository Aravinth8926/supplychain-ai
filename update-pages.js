// This script adds auth to all dashboard pages
// Run this to update all HTML files

const fs = require('fs');
const path = require('path');

const dashboardPages = [
    'demand-forecasting.html',
    'inventory-management.html',
    'supplier-scoring.html',
    'disruption-alerts.html',
    'transportation.html',
    'analytics.html',
    'reports.html',
    'notifications.html'
];

const authScript = `    <script src="auth.js"></script>
    <script>
        // Check authentication
        requireAuth();
        // Initialize user display
        initializeUserDisplay();
    </script>`;

const logoutLink = `            <div class="sidebar-footer">
                <a href="#" class="nav-item" onclick="event.preventDefault(); auth.logout();">
                    <i class="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                </a>
            </div>`;

dashboardPages.forEach(page => {
    try {
        let content = fs.readFileSync(page, 'utf8');
        
        // Add auth script before dashboard.js if not already present
        if (!content.includes('auth.js')) {
            content = content.replace(
                '<script src="dashboard.js"></script>',
                authScript + '\n    <script src="dashboard.js"></script>'
            );
        }
        
        // Update logout link
        content = content.replace(
            /<div class="sidebar-footer">[\s\S]*?<\/div>/,
            logoutLink
        );
        
        fs.writeFileSync(page, content);
        console.log(`Updated ${page}`);
    } catch (err) {
        console.error(`Error updating ${page}:`, err.message);
    }
});

console.log('All pages updated!');
