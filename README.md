# DriveTheory - Website Học Lý Thuyết Lái Xe

Website học lý thuyết lái xe hiện đại với Tailwind CSS v4, Next.js 15 và animations đẹp mắt.

## 🚀 Công nghệ sử dụng

- **Next.js 15** - React framework
- **Tailwind CSS v4** - Utility-first CSS framework (mới nhất)
- **TypeScript** - Type safety
- **Lucide React** - Beautiful icons
- **Radix UI** - Accessible components

## 📦 Cài đặt

\`\`\`bash
# Clone repository
git clone <repository-url>
cd driving-theory-website

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
\`\`\`

## 🎨 Tailwind CSS v4 Features

### Cú pháp mới:
- `@import 'tailwindcss'` thay vì `@tailwind` directives
- `@theme` block để define custom properties
- `@utility` để tạo custom utilities
- Zero-config by default

### Custom Properties:
\`\`\`css
@theme {
  --color-brand-blue: 217.2 91.2% 59.8%;
  --color-brand-purple: 262.1 83.3% 57.8%;
  --color-brand-pink: 322.2 84.5% 64.9%;
}
\`\`\`

### Custom Utilities:
\`\`\`css
@utility animate-slide-up {
  animation: slide-up 0.8s ease-out;
}

@utility bg-gradient-brand {
  background: linear-gradient(135deg, hsl(var(--color-brand-blue)), hsl(var(--color-brand-purple)));
}
\`\`\`

## 🎭 Animations

Website bao gồm 20+ custom animations:
- Scroll-triggered animations
- Hover effects
- Loading animations
- Particle systems
- Gradient shifts

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg, xl, 2xl
- Touch-friendly interactions
- Optimized for all devices

## ♿ Accessibility

- `prefers-reduced-motion` support
- High contrast mode
- Keyboard navigation
- Screen reader friendly
- WCAG 2.1 compliant

## 🔧 Configuration

### PostCSS Config:
\`\`\`js
// postcss.config.mjs
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
\`\`\`

### No Tailwind Config Needed!
Tailwind v4 is zero-config by default. All customization is done in CSS.

## 📂 Project Structure

\`\`\`
src/
├── app/
│   ├── page.tsx          # Main homepage
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Tailwind v4 styles
├── components/
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── StatsSection.tsx
│   ├── FeaturesSection.tsx
│   ├── TopicsSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   ├── FloatingActionButton.tsx
│   └── ParticleBackground.tsx
└── components/ui/         # Radix UI components
\`\`\`

## 🚀 Deployment

\`\`\`bash
# Build for production
npm run build

# Start production server
npm start
\`\`\`

## 📝 License

MIT License - feel free to use for your projects!
