// Sidebar navigation active state
document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        document.querySelectorAll('.sidebar-nav .nav-item').forEach(nav => {
            nav.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Notification button - now links to notifications.html
const notificationBtn = document.querySelector('.notification-btn');
if (notificationBtn && notificationBtn.tagName !== 'A') {
    notificationBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'notifications.html';
    });
}

// Search functionality
const searchInput = document.querySelector('.header-search input');
if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        console.log('Searching for:', e.target.value);
    });
}

// Create Demand Forecast Chart
function createDemandChart() {
    const ctx = document.getElementById('demandChart');
    if (!ctx) return;

    // Generate sample data for 30 days
    const labels = [];
    const actualData = [];
    const predictedData = [];
    
    for (let i = 0; i < 30; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        labels.push(date.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' }));
        
        // Generate realistic data with trend
        const base = 1000 + (i * 20);
        const variation = Math.random() * 200 - 100;
        actualData.push(i < 15 ? Math.round(base + variation) : null);
        predictedData.push(i >= 10 ? Math.round(base + variation + 50) : null);
    }

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Actual Demand',
                    data: actualData,
                    borderColor: '#1e88e5',
                    backgroundColor: 'rgba(30, 136, 229, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Predicted Demand',
                    data: predictedData,
                    borderColor: '#43a047',
                    backgroundColor: 'rgba(67, 160, 71, 0.1)',
                    borderWidth: 3,
                    borderDash: [5, 5],
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return value.toLocaleString() + ' units';
                        }
                    }
                }
            }
        }
    });
}

// Initialize chart when page loads
if (document.getElementById('demandChart')) {
    createDemandChart();
}

// Stats cards animation on load
document.querySelectorAll('.stat-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    
    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100 + (index * 100));
});

// Alert actions
document.querySelectorAll('.alert-item').forEach(alert => {
    alert.addEventListener('click', function() {
        console.log('Alert clicked:', this.querySelector('h4').textContent);
    });
});

// Filter selects
document.querySelectorAll('.filter-select, .form-control').forEach(select => {
    select.addEventListener('change', function() {
        console.log('Filter changed:', this.value);
    });
});

// Button interactions
document.querySelectorAll('.btn-small, .btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (!this.type || this.type !== 'submit') {
            e.preventDefault();
            console.log('Button clicked:', this.textContent);
        }
    });
});

// Real-time clock
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-IN', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    });
    const dateString = now.toLocaleDateString('en-IN', { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
    
    // Update if clock element exists
    const clockElement = document.querySelector('.dashboard-clock');
    if (clockElement) {
        clockElement.textContent = `${dateString} ${timeString}`;
    }
}

setInterval(updateClock, 1000);
updateClock();

// Simulate real-time data updates
function simulateDataUpdate() {
    const statValues = document.querySelectorAll('.stat-value');
    statValues.forEach(stat => {
        // Add pulse animation
        stat.style.animation = 'pulse 0.5s ease';
        setTimeout(() => {
            stat.style.animation = '';
        }, 500);
    });
}

// Update data every 30 seconds
setInterval(simulateDataUpdate, 30000);

console.log('Dashboard loaded successfully!');
