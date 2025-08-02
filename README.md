# Zelalem Abera Regassa - Portfolio

A modern, animated portfolio website showcasing my work as a Senior Frontend Developer. Built with Next.js 14, TypeScript, and Tailwind CSS, featuring unique animations and interactive elements for each page.

## ✨ Features

### 🎨 **Unique Page Animations**
- **Projects Page**: Tech-themed animations with floating code elements (`</>`, `{}`, `[]`)
- **Resume Page**: Professional document theme with timeline animations
- **Contact Page**: Communication-focused animations with message elements
- **About Page**: Nature/growth theme with plant elements and bounce effects

### 🎯 **Interactive Elements**
- **Glass morphism effects** with backdrop blur
- **Staggered animations** with calculated delays
- **Hover effects** with color transitions and scale animations
- **Gradient text and button effects**
- **Responsive design** optimized for all screen sizes

### 🛠 **Technical Stack**
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Custom CSS animations** and keyframes
- **Dark mode support**

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/zolbera-portfolio.git
   cd zolbera-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📁 Project Structure

```
zolbera-portfolio/
├── src/
│   ├── app/
│   │   ├── about/          # About page with nature theme
│   │   ├── contact/        # Contact page with communication theme
│   │   ├── projects/       # Projects page with tech theme
│   │   ├── resume/         # Resume page with document theme
│   │   ├── globals.css     # Global styles and animations
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/
│   │   ├── ui/            # Reusable UI components
│   │   ├── navigation.tsx # Navigation component
│   │   └── theme-provider.tsx # Theme provider
│   ├── lib/
│   │   ├── data.ts        # Portfolio data
│   │   └── utils.ts       # Utility functions
│   └── types/
│       └── index.ts       # TypeScript type definitions
├── public/                # Static assets
└── package.json
```

## 🎨 Animation System

The portfolio features a sophisticated animation system with:

- **Page-specific themes** with unique color schemes
- **Floating background elements** that match each page's theme
- **Staggered entrance animations** for content sections
- **Interactive hover states** with smooth transitions
- **Glass morphism effects** for modern UI elements

### Animation Classes
- `animate-slide-in-up` - Content slides up from bottom
- `animate-slide-in-left` - Content slides in from left
- `animate-bounce-in` - Bouncy entrance animation
- `animate-float` - Floating background elements
- `animate-gradient` - Animated gradient backgrounds

## 🌙 Dark Mode

The portfolio includes full dark mode support with:
- Automatic theme detection
- Manual theme toggle
- Consistent color schemes across themes
- Optimized contrast ratios

## 📱 Responsive Design

- **Mobile-first approach**
- **Flexible grid layouts**
- **Optimized typography scaling**
- **Touch-friendly interactions**

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel for optimal Next.js performance
```

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 Customization

### Adding New Projects
Edit `src/lib/data.ts` to add new projects to the portfolio.

### Modifying Animations
Customize animations in `src/app/globals.css` under the animation keyframes section.

### Updating Content
- **Personal info**: Update `src/lib/data.ts`
- **Styling**: Modify Tailwind classes or add custom CSS
- **Layout**: Edit component files in `src/components/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: [your-email@example.com]
- **LinkedIn**: [your-linkedin-profile]
- **GitHub**: [your-github-profile]

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
