# Sholadis Executive Hotel

A modern, responsive website for Sholadis Executive Hotel, showcasing luxury accommodation, premium dining, and world-class amenities in Nigeria.

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Built with shadcn/ui components and Tailwind CSS
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, and structured data
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Accessibility**: WCAG compliant components and semantic HTML
- **Type Safety**: Full TypeScript implementation

## 🏨 Hotel Features

### Rooms & Accommodation

- Deluxe Rooms
- Executive Suites
- Presidential Suites
- Premium amenities and comfort

### Dining

- Fine dining restaurant
- Room service
- Special cuisine options

### Amenities

- Conference facilities
- Business center
- Fitness center
- Spa services
- 24/7 concierge

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Hooks
- **Form Handling**: React Hook Form with Zod validation

## 📋 Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

## 🛠️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd sholadis-executive-hotel
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components (shadcn/ui)
│   ├── Navbar.tsx    # Navigation component
│   ├── HeroSection.tsx
│   ├── RoomsSection.tsx
│   ├── DiningSection.tsx
│   ├── AmenitiesSection.tsx
│   ├── LocationSection.tsx
│   └── Footer.tsx
├── pages/
│   └── Index.tsx     # Main landing page
├── hooks/            # Custom React hooks
├── lib/
│   └── utils.ts      # Utility functions
└── assets/           # Static assets (images, icons)
```

## 🎨 Customization

### Colors & Branding

The hotel's color scheme is defined in `tailwind.config.ts`:

- Primary: Navy blue (`#1e3a8a`)
- Accent: Gold (`#fbbf24`)
- Background: Clean whites and grays

### Content Updates

- Update hotel information in component files
- Replace images in `src/assets/` with actual hotel photos
- Modify contact information and amenities as needed

## 🔍 SEO & Performance

### SEO Features

- Comprehensive meta tags
- Open Graph and Twitter Card support
- Structured data (JSON-LD) for search engines
- Semantic HTML structure
- Optimized images and assets

### Performance Optimizations

- Code splitting with Vite
- Lazy loading of components
- Optimized images
- Minimal bundle size

## 🌐 Deployment

### Recommended Platforms

- **Vercel**: Excellent for React apps with automatic deployments
- **Netlify**: Great for static sites with form handling
- **GitHub Pages**: Free hosting for open-source projects

### Deployment Steps

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting platform

3. **Configure domain** (optional)
   - Update DNS settings
   - Add SSL certificate

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary software for Sholadis Executive Hotel.

## 📞 Contact

**Sholadis Executive Hotel**

- Phone: +234 706 044 3225
- Email: info@sholadisexecutivehotel.com
- Website: https://sholadisexecutivehotel.com

## 🙏 Acknowledgments

- Built with [shadcn/ui](https://ui.shadcn.com/) components
- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
