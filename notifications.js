// Filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');
const notificationCards = document.querySelectorAll('.notification-card');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        
        // Filter notifications
        notificationCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'flex';
            } else if (filter === 'unread') {
                card.style.display = card.classList.contains('unread') ? 'flex' : 'none';
            } else if (filter === 'critical') {
                card.style.display = card.classList.contains('critical') ? 'flex' : 'none';
            } else if (filter === 'alerts') {
                card.style.display = (card.classList.contains('critical') || card.classList.contains('warning')) ? 'flex' : 'none';
            } else if (filter === 'updates') {
                card.style.display = (card.classList.contains('info') || card.classList.contains('success')) ? 'flex' : 'none';
            }
        });
    });
});

// Mark all as read
document.getElementById('markAllRead')?.addEventListener('click', function() {
    notificationCards.forEach(card => {
        card.classList.remove('unread');
        card.classList.add('read');
    });
    
    // Update unread count
    const unreadCount = document.querySelector('[data-filter="unread"] .filter-count');
    if (unreadCount) unreadCount.textContent = '0';
    
    alert('All notifications marked as read');
});

// Clear all notifications
document.getElementById('clearAll')?.addEventListener('click', function() {
    if (confirm('Are you sure you want to clear all notifications? This action cannot be undone.')) {
        notificationCards.forEach(card => {
            card.style.opacity = '0';
            setTimeout(() => card.remove(), 300);
        });
        
        setTimeout(() => {
            document.querySelector('.main-content').innerHTML += `
                <div class="empty-state">
                    <i class="fas fa-bell-slash"></i>
                    <h3>No Notifications</h3>
                    <p>You're all caught up! Check back later for updates.</p>
                </div>
            `;
        }, 500);
    }
});

// Close individual notification
document.querySelectorAll('.notification-close').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.notification-card');
        card.style.opacity = '0';
        card.style.transform = 'translateX(100%)';
        setTimeout(() => card.remove(), 300);
    });
});

// Mark notification as read when clicked
notificationCards.forEach(card => {
    card.addEventListener('click', function(e) {
        if (!e.target.closest('.notification-close') && !e.target.closest('.btn-small')) {
            this.classList.remove('unread');
            this.classList.add('read');
        }
    });
});

console.log('Notifications page loaded successfully!');
