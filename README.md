# 🏠 HouseLy - Real Estate Application

A modern, responsive real estate platform built with Next.js, featuring property listings, user authentication, and a comprehensive mocking system for development.

![HouseLy App](https://img.shields.io/badge/Next.js-14.2.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Chakra UI](https://img.shields.io/badge/Chakra_UI-2.8.2-319795?style=for-the-badge&logo=chakra-ui)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.14-38B2AC?style=for-the-badge&logo=tailwind-css)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Mocking System](#-mocking-system)
- [Available Routes](#-available-routes)
- [Components](#-components)
- [Development](#-development)
- [Testing](#-testing)
- [Deployment](#-deployment)

## ✨ Features

### 🏘️ Property Management
- **Property Listings**: Browse available properties with detailed information
- **Property Details**: View comprehensive property information with image galleries
- **Search & Filter**: Find properties by location, price range, and features
- **Image Gallery**: Interactive image carousel for property photos

### 👤 User Authentication
- **User Registration**: Create new user accounts
- **User Login**: Secure authentication system
- **User Dashboard**: Personalized dashboard for registered users
- **Profile Management**: Update user information and preferences

### 🎨 Modern UI/UX
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Smooth Animations**: Framer Motion powered transitions
- **Modern Styling**: Chakra UI components with Tailwind CSS
- **Interactive Elements**: Hover effects and smooth interactions

### 🧪 Development Features
- **Mock API System**: Complete mocking system for development without backend
- **Hot Reload**: Fast development with Next.js hot reloading
- **Type Safety**: JavaScript with proper configuration
- **Testing Utilities**: Built-in testing and debugging tools

## 🛠️ Tech Stack

### Frontend
- **Next.js 14.2.5** - React framework with App Router
- **React 18** - UI library
- **Chakra UI 2.8.2** - Component library
- **Tailwind CSS 3.4.14** - Utility-first CSS framework
- **Framer Motion 11.4.0** - Animation library
- **React Icons 5.3.0** - Icon library

### Development Tools
- **MSW (Mock Service Worker) 2.10.2** - API mocking
- **Axios 1.7.3** - HTTP client
- **PostCSS 8.4.47** - CSS processing
- **Autoprefixer 10.4.20** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd housely
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
housely/
├── app/                     # Next.js App Router pages
│   ├── dashboard/          # User dashboard
│   ├── login/              # Login page
│   ├── property/[id]/      # Property details page
│   ├── register/           # Registration page
│   ├── globals.css         # Global styles
│   ├── layout.js           # Root layout
│   └── page.js             # Home page
├── components/             # Reusable React components
│   ├── ContactInformation.jsx
│   ├── FinishComponent.jsx
│   ├── GeneralSections.jsx
│   ├── Header.js
│   ├── Footer.js
│   ├── ImagesAndVideo.jsx
│   ├── Login.jsx
│   ├── MapSection.jsx
│   ├── PropertiesList.js
│   ├── PropertyOverview.jsx
│   ├── Register.jsx
│   └── VerticalTabs.jsx
├── helpers/               # Utility functions
│   └── numbers.js         # Number formatting utilities
├── mocks/                 # Mock API system
│   ├── data.js           # Mock data and CRUD operations
│   ├── handlers.js       # MSW request handlers
│   ├── browser.js        # MSW browser setup
│   ├── init.js           # Initialization utilities
│   ├── config.js         # Configuration settings
│   ├── testUtils.js      # Testing utilities
│   └── README.md         # Mock system documentation
├── public/               # Static assets
│   ├── mockServiceWorker.js
│   ├── next.svg
│   └── vercel.svg
├── package.json          # Dependencies and scripts
├── next.config.mjs       # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── jsconfig.json         # JavaScript configuration
```

## 🎭 Mocking System

HouseLy includes a comprehensive mocking system that allows you to develop without a backend server. The system automatically intercepts all API requests and provides realistic mock data.

### Features
- **Automatic Setup**: Works out of the box in development mode
- **Realistic Data**: 5 sample properties with full details
- **User Authentication**: 3 test users with credentials
- **CRUD Operations**: Full create, read, update, delete support
- **Testing Utilities**: Browser console utilities for testing

### Test Credentials
```
Email: john@example.com     Password: hashed_password_123
Email: jane@example.com     Password: hashed_password_456
Email: admin@housely.com    Password: hashed_admin_password
```

### Browser Console Utilities
```javascript
// Add test property
window.mockUtils.addTestProperty({
  name: "Test Property",
  minPrice: 200000,
  maxPrice: 250000,
  rooms: 3,
  bathrooms: 2,
  city: "Test City"
});

// View current data
window.mockUtils.getMockData();

// Reset to initial state
window.mockUtils.resetMockData();
```

For detailed mocking documentation, see [mocks/README.md](mocks/README.md).

## 🛣️ Available Routes

### Public Routes
- `/` - Home page with property listings
- `/login` - User login page
- `/register` - User registration page
- `/property/[id]` - Individual property details

### Protected Routes
- `/dashboard` - User dashboard (requires authentication)

## 🧩 Components

### Core Components
- **Header** - Navigation bar with login/register buttons
- **Footer** - Site footer with social links and legal pages
- **PropertiesList** - Grid display of property cards
- **PropertyOverview** - Detailed property information
- **Login/Register** - Authentication forms

### Feature Components
- **ContactInformation** - Property contact forms
- **ImagesAndVideo** - Media gallery components
- **MapSection** - Location mapping
- **VerticalTabs** - Dashboard navigation
- **GeneralSections** - Reusable content sections

### Utility Components
- **MockInitializer** - Automatic mocking setup
- **MockDemo** - Development testing interface

## 💻 Development

### Code Style
- **JavaScript** with modern ES6+ features
- **Chakra UI** for component styling
- **Tailwind CSS** for utility classes
- **Framer Motion** for animations

### File Naming
- **Components**: PascalCase (e.g., `PropertiesList.js`)
- **Pages**: kebab-case (e.g., `property/[id]/page.jsx`)
- **Utilities**: camelCase (e.g., `numbers.js`)

### State Management
- **React Hooks** for local state
- **useState** for component state
- **useEffect** for side effects
- **useRouter** for navigation

## 🧪 Testing

### Manual Testing
1. **Start the app**: `npm run dev`
2. **Test authentication**: Use provided test credentials
3. **Test property browsing**: Navigate through property listings
4. **Test responsive design**: Check different screen sizes

### Mock Testing
```javascript
// Add test data
window.mockUtils.addTestProperty({
  name: "Beautiful Beach House",
  minPrice: 500000,
  maxPrice: 600000,
  rooms: 4,
  bathrooms: 3,
  city: "Miami Beach"
});

// Test different scenarios
window.mockUtils.resetMockData();
```

### Browser Testing
- **Chrome DevTools** for debugging
- **Network tab** to verify mocking
- **Console** for testing utilities
- **Responsive design** testing

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm run start
```

### Environment Variables
Create a `.env.local` file for production:
```env
NEXT_PUBLIC_API_URL=your-api-url
NEXT_PUBLIC_APP_NAME=HouseLy
```

### Deployment Platforms
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Docker** containerization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the [mocks/README.md](mocks/README.md) for technical details

---

**Built with ❤️ using Next.js, React, and Chakra UI**
