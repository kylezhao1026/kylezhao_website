# Kyle Zhao - Personal Website

A modern, minimalistic personal website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional aesthetic with generous whitespace
- **Responsive**: Mobile-first design that works beautifully on all devices
- **Performance**: Optimized for speed with Next.js 15 and static generation
- **Accessibility**: WCAG-compliant with semantic HTML and proper ARIA labels
- **SEO-Friendly**: Comprehensive metadata and sitemap support
- **Dark Mode**: Automatic dark mode support based on system preferences
- **Terminal Loader**: Modern terminal-style loading screen with typing animation on first visit

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd kylezhao_website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
kylezhao_website/
├── app/                    # Next.js App Router pages
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── resume/            # Resume page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Header navigation
│   ├── Footer.tsx         # Footer component
│   └── ProjectCard.tsx    # Project card component
├── public/                # Static assets
└── ...config files
```

## Customization

### Personal Information

1. **Navigation**: Update site name in `components/Navigation.tsx:21`
2. **Home Page**: Edit `app/page.tsx` to customize your bio and focus areas
3. **Projects**: Modify the projects array in `app/projects/page.tsx`
4. **Contact**: Update contact methods in `app/contact/page.tsx`
5. **Footer**: Edit links in `components/Footer.tsx`

### Resume

Place your resume PDF in the `/public` directory as `resume.pdf`. The resume page will automatically display it.

### Colors and Theme

Edit CSS variables in `app/globals.css` to customize the color scheme:

```css
:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --accent: #0070f3;
  /* ... more variables */
}
```

### Terminal Loader

The website features a modern terminal-style loading screen with typing animation on first visit. Customize it in `components/TerminalLoader.tsx`:

**Change the text:**
```tsx
const FULL_TEXT = 'your custom text here';
```

**Adjust typing speed:**
```tsx
const TYPING_SPEED = 60; // milliseconds per character (40-80 recommended)
```

**Modify colors:**
```tsx
// Terminal window
bg-[#1a1a1a]  // Dark background
text-[#4ade80]  // Green prompt and cursor
text-[#e5e5e5]  // Text color
```

**Features:**
- Character-by-character typing animation
- Blinking cursor
- Respects `prefers-reduced-motion`
- Only shows once per browser session
- Smooth fade out after completion

**See full documentation:** `TERMINAL_LOADER.md`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy with one click

Vercel will automatically:
- Install dependencies
- Build the project
- Deploy to a global CDN
- Provide automatic HTTPS

### Other Platforms

The built static site can be deployed to any hosting platform that supports Node.js:
- Netlify
- Cloudflare Pages
- AWS Amplify
- GitHub Pages (with some configuration)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own website.

## Contact

Kyle Zhao - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/kylezhao_website](https://github.com/yourusername/kylezhao_website)
