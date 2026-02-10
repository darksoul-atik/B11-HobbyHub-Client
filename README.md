# 🎨 HobbyHub - Connect Through Shared Passions

<div align="center">
  
  ![HobbyHub Banner](https://i.postimg.cc/g0Ps8yCt/bgauth.png)
  
  ### 🌟 A Modern Community Platform for Hobby Enthusiasts
  
  **Build communities • Make friends • Explore new hobbies together**
  
  [![Live Demo](https://img.shields.io/badge/Live-Demo-cpink?style=for-the-badge&logo=vercel)](https://your-live-demo-link.com)
  [![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-181717?style=for-the-badge&logo=github)](https://github.com/yourusername/hobbyhub)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
  
</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🎯 Key Highlights](#-key-highlights)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📦 Installation](#-installation)
- [🔧 Configuration](#-configuration)
- [📸 Screenshots](#-screenshots)
- [🎨 Color Palette](#-color-palette)
- [📱 Responsive Design](#-responsive-design)
- [🔐 Authentication](#-authentication)
- [🌐 API Endpoints](#-api-endpoints)
- [👥 Contributing](#-contributing)
- [📄 License](#-license)
- [📞 Contact](#-contact)

---

## ✨ Features

### 🎯 **Core Functionality**

- 🏘️ **Group Management**
  - Create and customize hobby groups with rich details
  - Upload group images and set meeting locations
  - Define maximum member capacity and start dates
  - Edit and delete groups with host privileges

- 👥 **Member Management**
  - Join and leave groups seamlessly
  - View member profiles with avatars
  - Host-controlled member removal system
  - Real-time member count tracking

- 💬 **Interactive Comments System**
  - Post comments on group pages
  - Edit and delete your own comments
  - Host reply functionality with **multiple replies support**
  - Timestamped comments with edit indicators
  - Threaded conversation display

- 🔍 **Discovery & Browsing**
  - Browse all available hobby groups
  - Filter by categories (Sports, Arts, Tech, etc.)
  - View group details before joining
  - "My Groups" dashboard for personal management

### 🎨 **User Experience**

- 🌓 **Dual Theme System**
  - Elegant dark mode with purple-blue gradients
  - Clean light mode with warm tones
  - Smooth theme transitions
  - Persistent theme preference

- 📱 **Fully Responsive Design**
  - Mobile-first approach
  - Tablet and desktop optimized layouts
  - Touch-friendly interface elements
  - Adaptive navigation system

- 🎭 **Modern UI/UX**
  - Glass-morphism effects with backdrop blur
  - Smooth animations powered by Framer Motion & GSAP
  - Interactive hover states and transitions
  - Professional gradient backgrounds
  - Typewriter effects and marquees

- 🔔 **Smart Notifications**
  - Toast notifications for user actions
  - Success/error feedback with SweetAlert2
  - Styled confirmation dialogs
  - Real-time validation messages

### 🔐 **Security & Authentication**

- 🛡️ **Firebase Authentication**
  - Email/Password authentication
  - Google OAuth integration
  - GitHub OAuth integration
  - Protected routes with PrivateRoute component
  - Persistent login sessions

- 🔒 **Authorization**
  - Role-based access control (Host vs Member)
  - Host-only features (edit, delete, remove members)
  - Secure API endpoints
  - User-specific data access

### 🚀 **Performance & Optimization**

- ⚡ **Lightning Fast**
  - Vite for blazing-fast dev server and builds
  - Code splitting and lazy loading
  - Optimized bundle sizes
  - Efficient state management

- 📊 **Database Efficiency**
  - MongoDB with optimized queries
  - Indexed collections for faster lookups
  - Efficient data structures
  - RESTful API design

---

## 🎯 Key Highlights

### 💎 **Standout Features**

✅ **Multiple Host Replies** - Unique threaded reply system allowing hosts to respond multiple times to member comments

✅ **Advanced Member Management** - Comprehensive member removal system with visual feedback

✅ **Dynamic Theme System** - Beautiful dual-theme support with gradient backgrounds

✅ **Real-time Validation** - Instant feedback on all user inputs with styled error messages

✅ **Professional Modals** - Informative modals for Help Center, Guidelines, Privacy Policy, and Terms of Service

✅ **Responsive Cards** - Adaptive card layouts that look stunning on all devices

✅ **Smart Navigation** - Context-aware navigation with active state indicators

✅ **Avatar Fallbacks** - Graceful handling of missing profile images

---

## 🛠️ Tech Stack

### **Frontend**

<div align="center">

| Technology | Purpose | Version |
|------------|---------|---------|
| ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) | UI Framework | 19.1.1 |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) | Build Tool | 7.0.4 |
| ![TailwindCSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) | Styling | 4.1.11 |
| ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black) | Authentication | 12.1.0 |

</div>

**Animation & UI Libraries:**
- **Framer Motion** (12.23.12) - Advanced animations
- **GSAP** (3.13.0) - Professional animations
- **React Spring** (10.0.1) - Spring physics animations
- **Lucide React** (0.539.0) - Modern icons
- **SweetAlert2** (11.26.17) - Beautiful alerts
- **React Hot Toast** (2.6.0) - Toast notifications
- **Material Tailwind** (2.1.10) - Material Design components
- **DaisyUI** (5.0.50) - Tailwind component library

**Special Effects:**
- **React Simple Typewriter** - Typing animations
- **React Fast Marquee** - Scrolling text
- **Swiper** - Touch sliders
- **OGL** - WebGL library

### **Backend**

<div align="center">

| Technology | Purpose | Version |
|------------|---------|---------|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) | Runtime | Latest |
| ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white) | Web Framework | 5.1.0 |
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) | Database | 6.18.0 |

</div>

**Backend Dependencies:**
- **CORS** (2.8.5) - Cross-origin resource sharing
- **Dotenv** (17.2.4) - Environment variables

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **MongoDB** account (MongoDB Atlas recommended)
- **Firebase** project with Authentication enabled

---

## 📦 Installation

### **1. Clone the Repository**

```bash
git clone https://github.com/yourusername/hobbyhub.git
cd hobbyhub
```

### **2. Install Frontend Dependencies**

```bash
cd client
npm install
```

### **3. Install Backend Dependencies**

```bash
cd ../server
npm install
```

---

## 🔧 Configuration

### **Frontend Setup**

Create a `.env` file in the `client` directory:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
VITE_FIREBASE_PROJECT_ID=your_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here

# API URL
VITE_API_URL=http://localhost:3000
```

### **Backend Setup**

Create a `.env` file in the `server` directory:

```env
# MongoDB Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hobbyhubDB?retryWrites=true&w=majority

# Server Configuration
PORT=3000
NODE_ENV=development
```

### **Firebase Setup**

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing
3. Enable **Authentication** → Email/Password, Google, GitHub
4. Copy configuration to `.env` file

### **MongoDB Setup**

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Create database user
4. Whitelist your IP address
5. Get connection string and add to `.env`

---

## 🎬 Running the Application

### **Development Mode**

**Terminal 1 - Backend:**
```bash
cd server
npm start
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```

Visit: `http://localhost:5173`

### **Production Build**

```bash
cd client
npm run build
npm run preview
```

---

## 📸 Screenshots

<div align="center">

### 🏠 Home Page
![Home Page](https://via.placeholder.com/800x400?text=Home+Page+Screenshot)

### 🎨 Browse Groups
![Browse Groups](https://via.placeholder.com/800x400?text=Browse+Groups+Screenshot)

### 💬 Group Details & Comments
![Group Details](https://via.placeholder.com/800x400?text=Group+Details+Screenshot)

### 📱 Mobile Responsive
![Mobile View](https://via.placeholder.com/300x600?text=Mobile+View+Screenshot)

</div>

---

## 🎨 Color Palette

### **Dark Theme**
```css
--color-cblack:  #0f0f23;  /* Deep background */
--color-cpurple: #7c3aed;  /* Vibrant purple */
--color-cpink:   #f472b6;  /* Hot pink accent */
--color-ccyan:   #06b6d4;  /* Cyan highlights */
```

### **Light Theme**
```css
--color-lwhite:  #f7f5f4;  /* Soft background */
--color-lpurple: #5f59d6;  /* Muted purple */
--color-lpink:   #f06aa8;  /* Rose pink */
--color-lcyan:   #5b7893;  /* Slate cyan */
```

---

## 📱 Responsive Design

| Device | Breakpoint | Layout |
|--------|------------|--------|
| 📱 Mobile | < 640px | Single column, stacked cards |
| 📱 Tablet | 640px - 1024px | Two columns, compact navigation |
| 💻 Desktop | 1024px - 1280px | Multi-column grid, expanded UI |
| 🖥️ Large Desktop | > 1280px | Max-width container, optimal spacing |

---

## 🔐 Authentication

### Supported Methods

1. **Email/Password** - Traditional authentication
2. **Google OAuth** - One-click Google sign-in
3. **GitHub OAuth** - Developer-friendly authentication

### Application Routes

#### **Public Routes**
- `/` - Home page with featured groups
- `/groups` - Browse all available groups
- `/login` - User login page
- `/register` - New user registration

#### **Protected Routes** (Requires Authentication)
- `/groups/:id` - View group details and comments
- `/creategroup` - Create a new hobby group
- `/mygroups` - Manage your created groups
- `/updateGroup/:id` - Edit group details (Host only)
- `/remove/:groupid` - Remove members from group (Host only)

### Route Structure

```
Main Layout (/)
│
├── Home (/)
│   └── Featured groups, hero section
│
├── All Groups (/groups)
│   └── Browse and filter all groups
│
├── Group Details (/groups/:id) 🔒
│   ├── View group information
│   ├── Join/Leave group
│   └── Comment system with replies
│
├── Create Group (/creategroup) 🔒
│   └── Form to create new group
│
├── My Groups (/mygroups) 🔒
│   ├── View created groups
│   ├── Edit group (/updateGroup/:id)
│   └── Remove members (/remove/:groupid)
│
Authentication (Separate Layout)
├── Login (/login)
└── Register (/register)

🔒 = Protected Route (Requires Authentication)
```

---

## 🌐 API Endpoints

### **Groups**

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/groups` | Fetch all groups |
| GET | `/groups/:id` | Get single group |
| POST | `/groups` | Create new group |
| PUT | `/groups/:id` | Update group |
| PATCH | `/groups/:id` | Update members |
| DELETE | `/groups/:id` | Delete group |

### **Comments**

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/groups/:groupId/comments` | Get all comments |
| POST | `/groups/:groupId/comments` | Post new comment |
| PATCH | `/groups/:groupId/comments/:commentId` | Edit/Reply comment |
| DELETE | `/groups/:groupId/comments/:commentId` | Delete comment |
| DELETE | `/groups/:groupId/comments/:commentId/replies/:replyIndex` | Delete reply |

---

## 📁 Project Structure

```
hobbyhub/
├── client/                    # Frontend React app
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── CommentCard.jsx
│   │   │   ├── Groups.jsx
│   │   │   ├── MyGroup.jsx
│   │   │   ├── RemoveMember.jsx
│   │   │   └── Footers.jsx
│   │   ├── contexts/         # React contexts
│   │   │   └── AuthContext.jsx
│   │   ├── pages/            # Page components
│   │   ├── routes/           # Route configuration
│   │   ├── App.jsx           # Main app component
│   │   └── main.jsx          # Entry point
│   ├── .env                  # Environment variables
│   ├── package.json          # Dependencies
│   └── vite.config.js        # Vite configuration
│
└── server/                    # Backend Node.js app
    ├── index.js              # Server entry point
    ├── .env                  # Environment variables
    └── package.json          # Dependencies
```

---

## 🎯 Features Roadmap

### ✅ **Completed**
- [x] User authentication (Email, Google, GitHub)
- [x] Group CRUD operations
- [x] Comment system with multiple replies
- [x] Member management system
- [x] Responsive design
- [x] Dark/Light theme toggle
- [x] Real-time notifications

### 🚧 **In Progress**
- [ ] Real-time chat within groups
- [ ] Event scheduling system
- [ ] Image galleries for groups
- [ ] User profile customization

### 🔮 **Future Plans**
- [ ] Video conferencing integration
- [ ] Mobile app (React Native)
- [ ] AI-powered hobby recommendations
- [ ] Gamification and badges
- [ ] Multi-language support

---

## 👥 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. Create a **feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. Open a **Pull Request**

### Code Style Guidelines

- Use **ES6+** syntax
- Follow **React best practices**
- Use **Tailwind CSS** for styling
- Add **comments** for complex logic
- Write **meaningful commit messages**

---

## 🐛 Bug Reports

Found a bug? Please open an issue with:

- 🔍 **Description** of the bug
- 📝 **Steps to reproduce**
- 💻 **Expected vs actual behavior**
- 📸 **Screenshots** if applicable
- 🖥️ **Browser/Device** information

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---



---

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Firebase** for authentication services
- **MongoDB** for the flexible database
- **Framer Motion** for smooth animations
- All **open-source contributors** who make projects like this possible

---

<div align="center">

### ⭐ If you found this project helpful, please give it a star!

**Made with ❤️ and ☕ by [Your Name]**

</div>
