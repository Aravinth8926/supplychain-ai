# SupplyChainAI - Complete Sitemap

## 📁 Project Structure

```
SupplyChainAI/
│
├── 📄 HTML Pages (12 files)
│   ├── index.html                    ⭐ Landing Page (Public)
│   ├── login.html                    🔐 User Login (Public)
│   ├── admin-login.html              🔐 Admin Login (Public)
│   ├── dashboard.html                📊 Main Dashboard (Auth Required)
│   ├── demand-forecasting.html       📈 AI Forecasting (Auth Required)
│   ├── inventory-management.html     📦 Inventory System (Auth Required)
│   ├── supplier-scoring.html         ⭐ Supplier Tracking (Auth Required)
│   ├── disruption-alerts.html        🚨 Alert System (Auth Required)
│   ├── transportation.html           🚚 Logistics Tracking (Auth Required)
│   ├── analytics.html                📊 Analytics Dashboard (Auth Required)
│   ├── reports.html                  📄 Report Generation (Auth Required)
│   └── settings.html                 ⚙️ Configuration (Auth Required)
│
├── 🎨 Stylesheets (1 file)
│   └── styles.css                    Complete styling (1200+ lines)
│
├── 💻 JavaScript (4 files)
│   ├── script.js                     Landing page functionality
│   ├── login.js                      Authentication logic
│   ├── dashboard.js                  Dashboard interactions
│   └── settings.js                   Settings functionality
│
└── 📚 Documentation (4 files)
    ├── README.md                     Project overview & setup
    ├── QUICK_START.md                Getting started guide
    ├── FEATURES_GUIDE.md             Complete feature documentation
    ├── PROJECT_SUMMARY.md            Project summary & status
    └── SITEMAP.md                    This file
```

---

## 🗺️ Navigation Flow

### Public Access
```
index.html (Landing Page)
    ├── Click "Login" → login.html
    ├── Click "Admin Login" → admin-login.html
    └── Click "Get Started" → login.html
```

### User Login Flow
```
login.html
    ├── Enter credentials
    ├── Click "Login"
    └── Redirect → dashboard.html
```

### Admin Login Flow
```
admin-login.html
    ├── Enter Admin ID
    ├── Enter Password
    ├── Enter 2FA Code
    ├── Click "Secure Login"
    └── Redirect → dashboard.html
```

### Dashboard Navigation
```
dashboard.html (Main Hub)
    ├── Sidebar Navigation:
    │   ├── Dashboard (dashboard.html)
    │   ├── Demand Forecasting (demand-forecasting.html)
    │   ├── Inventory Management (inventory-management.html)
    │   ├── Supplier Scoring (supplier-scoring.html)
    │   ├── Disruption Alerts (disruption-alerts.html)
    │   ├── Transportation (transportation.html)
    │   ├── Analytics (analytics.html)
    │   ├── Reports (reports.html)
    │   └── Settings (settings.html)
    │
    └── Footer:
        └── Logout → index.html
```

---

## 📄 Page Details

### 1. index.html - Landing Page
**URL:** `/` or `/index.html`  
**Access:** Public  
**Purpose:** Marketing and conversion

**Sections:**
- Navigation bar with login link
- Hero section with CTAs
- About the system (4 cards)
- Key features (8 features)
- Why India needs this (5 challenges)
- System architecture
- Demo screenshots
- Benefits (6 items)
- Testimonials (3 detailed)
- Contact form
- Footer with links

**CTAs:**
- "Get Started" → login.html
- "Explore Features" → #features
- "Request a Demo" → #contact
- "Login" → login.html

---

### 2. login.html - User Login
**URL:** `/login.html`  
**Access:** Public  
**Purpose:** User authentication

**Features:**
- Email input
- Password input with toggle
- Remember me checkbox
- Forgot password link
- Login button
- Link to admin login
- Back to home link

**Actions:**
- Submit → dashboard.html
- "Admin Login" → admin-login.html
- "Back to Home" → index.html

---

### 3. admin-login.html - Admin Login
**URL:** `/admin-login.html`  
**Access:** Public  
**Purpose:** Administrator authentication

**Features:**
- Admin ID input
- Password input with toggle
- 2FA security code input
- Security notice
- Secure login button
- Link to user login
- Back to home link

**Actions:**
- Submit → dashboard.html
- "User Login" → login.html
- "Back to Home" → index.html

---

### 4. dashboard.html - Main Dashboard
**URL:** `/dashboard.html`  
**Access:** Authenticated users  
**Purpose:** Overview and quick access

**Components:**
- Header with search, notifications, profile
- 4 metric cards (inventory, accuracy, alerts, delivery)
- Demand forecast chart
- Inventory status breakdown
- Recent alerts feed
- Sidebar navigation

**Navigation:**
- All feature pages via sidebar
- Logout → index.html

---

### 5. demand-forecasting.html - AI Forecasting
**URL:** `/demand-forecasting.html`  
**Access:** Authenticated users  
**Purpose:** Demand prediction and planning

**Features:**
- Forecast controls (category, period, region, model)
- Accuracy metrics (94.5%)
- AI confidence indicators
- Seasonal factor detection
- Forecast visualization chart
- Product-wise predictions table
- AI-generated insights (3 items)

**Actions:**
- Refresh forecast
- Export data
- Create purchase orders
- View analytics

---

### 6. inventory-management.html - Inventory System
**URL:** `/inventory-management.html`  
**Access:** Authenticated users  
**Purpose:** Stock optimization

**Features:**
- Total inventory value (₹45.2 Cr)
- Status breakdown (optimal, low, out of stock)
- Category-wise overview table
- AI replenishment suggestions
- Warehouse filtering
- Export functionality

**Actions:**
- Add new item
- View details
- Create purchase order
- Export data

---

### 7. supplier-scoring.html - Supplier Tracking
**URL:** `/supplier-scoring.html`  
**Access:** Authenticated users  
**Purpose:** Supplier performance management

**Features:**
- Active suppliers count (127)
- Top-rated suppliers (45)
- Average delivery time (5.2 days)
- On-time delivery percentage (87.3%)
- Supplier performance table
- AI reliability scores
- Risk assessment

**Actions:**
- Add supplier
- View profile
- Filter by region/category
- Export data

---

### 8. disruption-alerts.html - Alert System
**URL:** `/disruption-alerts.html`  
**Access:** Authenticated users  
**Purpose:** Real-time disruption management

**Features:**
- Alert statistics (critical, warning, info, resolved)
- Active alerts list with details
- Impact analysis
- AI recommendations
- Action buttons
- Alert filtering

**Actions:**
- Configure alert settings
- Contact alternate supplier
- View impact analysis
- Mark as resolved
- Reroute shipments

---

### 9. transportation.html - Logistics Tracking
**URL:** `/transportation.html`  
**Access:** Authenticated users  
**Purpose:** Shipment and route management

**Features:**
- Active shipments (156)
- On-time delivery metrics (87.3%)
- Average transit time (5.2 days)
- Delayed shipments count (12)
- Live tracking map
- Active shipments table
- AI route optimization

**Actions:**
- New shipment
- Track shipment
- Apply route change
- Reschedule shipments
- Export data

---

### 10. analytics.html - Analytics Dashboard
**URL:** `/analytics.html`  
**Access:** Authenticated users  
**Purpose:** Performance analysis and insights

**Features:**
- Cost savings (₹2.4 Cr)
- Efficiency gain (32%)
- Time saved (450 hrs)
- Customer satisfaction (4.7/5)
- Performance trends chart
- Cost breakdown chart
- KPI dashboard (4 metrics)

**Actions:**
- Change time period
- Export report
- View detailed metrics

---

### 11. reports.html - Report Generation
**URL:** `/reports.html`  
**Access:** Authenticated users  
**Purpose:** Report creation and management

**Features:**
- 6 quick report templates
- Recent reports table
- Scheduled reports list
- One-click generation
- Email delivery setup

**Actions:**
- Create custom report
- Generate report
- Schedule report
- Download report
- View report
- Edit schedule
- Delete schedule

---

### 12. settings.html - Configuration
**URL:** `/settings.html`  
**Access:** Authenticated users  
**Purpose:** System and user configuration

**Tabs:**
1. **Profile** - Personal information
2. **Company** - Company details
3. **Notifications** - Alert preferences
4. **Integrations** - Third-party connections
5. **Security** - Password and 2FA

**Actions:**
- Save changes
- Upload photo
- Connect integrations
- Update password
- Enable 2FA
- Manage sessions

---

## 🔗 Internal Links

### From Landing Page (index.html)
- Navigation: Home, Features, Why India, Benefits, Contact, Login
- Hero CTAs: Get Started, Explore Features, Request Demo
- Footer: Quick links, Contact info, Social media

### From Login Pages
- User Login: Admin Login, Back to Home
- Admin Login: User Login, Back to Home

### From Dashboard Pages
- Sidebar: All 9 feature pages
- Header: Search, Notifications, Profile
- Footer: Logout to home

---

## 📊 Page Hierarchy

```
Level 0 (Public)
└── index.html (Landing)
    │
    ├── Level 1 (Authentication)
    │   ├── login.html (User)
    │   └── admin-login.html (Admin)
    │
    └── Level 2 (Authenticated - Main)
        └── dashboard.html (Hub)
            │
            └── Level 3 (Authenticated - Features)
                ├── demand-forecasting.html
                ├── inventory-management.html
                ├── supplier-scoring.html
                ├── disruption-alerts.html
                ├── transportation.html
                ├── analytics.html
                ├── reports.html
                └── settings.html
```

---

## 🎯 User Journeys

### Journey 1: New Visitor → User
1. Land on index.html
2. Read about features
3. Click "Get Started"
4. Arrive at login.html
5. Enter credentials
6. Redirect to dashboard.html
7. Explore features

### Journey 2: Returning User
1. Go directly to login.html
2. Enter credentials (remembered)
3. Redirect to dashboard.html
4. Navigate to needed feature
5. Complete task
6. Logout

### Journey 3: Administrator
1. Go to admin-login.html
2. Enter Admin ID
3. Enter password
4. Enter 2FA code
5. Redirect to dashboard.html
6. Access admin features
7. Configure system

### Journey 4: Demo Request
1. Land on index.html
2. Scroll to contact section
3. Fill demo request form
4. Submit form
5. Receive confirmation
6. Wait for contact

---

## 📱 Responsive Breakpoints

### Mobile (< 768px)
- Single column layouts
- Collapsible sidebar
- Stacked elements
- Touch-optimized

### Tablet (768px - 1024px)
- Two-column layouts
- Adjusted sidebar
- Optimized spacing
- Balanced content

### Desktop (1024px+)
- Full layouts
- Visible sidebar
- Multi-column grids
- All features visible

---

## 🔐 Access Control

### Public Pages (No Auth Required)
- ✅ index.html
- ✅ login.html
- ✅ admin-login.html

### Protected Pages (Auth Required)
- 🔒 dashboard.html
- 🔒 demand-forecasting.html
- 🔒 inventory-management.html
- 🔒 supplier-scoring.html
- 🔒 disruption-alerts.html
- 🔒 transportation.html
- 🔒 analytics.html
- 🔒 reports.html
- 🔒 settings.html

---

## 📈 Analytics & Tracking Points

### Landing Page
- Page views
- CTA clicks
- Form submissions
- Scroll depth
- Time on page

### Login Pages
- Login attempts
- Success rate
- Failed attempts
- Time to login

### Dashboard Pages
- Feature usage
- Time per page
- Actions taken
- Export frequency
- Settings changes

---

## 🎨 Design System

### Colors
- Primary: #1e88e5 (Blue)
- Secondary: #43a047 (Green)
- Accent: #ff6f00 (Orange)
- Dark: #0d1b2a (Navy)
- Light: #f8f9fa (Gray)

### Typography
- Font Family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Headers: Bold, 1.5rem - 3.5rem
- Body: Regular, 1rem
- Small: 0.85rem - 0.9rem

### Components
- Buttons: 6 variants
- Cards: 15+ types
- Forms: 5 styles
- Tables: 8 data tables
- Icons: 100+ Font Awesome

---

## 🚀 Performance

### Load Times (Target)
- Landing page: < 2s
- Login pages: < 1s
- Dashboard: < 3s
- Feature pages: < 2s

### Optimization
- Minified CSS
- Optimized images
- Lazy loading ready
- Cached assets
- CDN ready

---

**Total Pages:** 12  
**Total Files:** 21  
**Lines of Code:** ~5,100  
**Status:** ✅ Production Ready

---

**Built with AI for Indian Manufacturing Excellence**
