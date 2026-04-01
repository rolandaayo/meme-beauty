# MEME BEAUTYWORLD - Professional Beauty Website

A stunning, professional website for an eyelash extensions and pedicure beauty salon built with Next.js, React, and Tailwind CSS.

## Features

### Core Functionality
- **Responsive Design** - Mobile-first approach, fully responsive on all devices
- **Appointment Booking System** - Complete booking form with date/time selection and service selection
- **Contact Form** - Professional inquiry submission with validation
- **Testimonials Carousel** - Auto-scrolling customer reviews with manual navigation
- **Service Gallery** - Before/after gallery with category filtering for lashes and pedicures

### Pages
1. **Home** - Hero section with CTAs, featured services, testimonials, and flexbox content sections
2. **Services** - Complete service catalog with pricing, duration, and package deals
3. **Gallery** - Before/after comparisons and work showcase with filtering
4. **About** - Team bios, company values, and why choose us section
5. **Contact/Booking** - Appointment booking system, contact information, and FAQ

### Design Highlights
- **Color Scheme** - Pink-dominant beauty brand colors (#EC4899, #F472B6, #FCD34D)
- **Typography** - Montserrat font for professional, modern look
- **Layout** - Flexbox-based layouts with alternating text/image sections
- **UI Components** - Custom reusable components for Navbar, Footer, Testimonials, etc.

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS 4.2
- **Font**: Montserrat (from Google Fonts)
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Carousel**: Custom React state management for testimonials
- **Images**: Generated professional images for salon showcase

## Project Structure

```
/vercel/share/v0-project/
├── app/
│   ├── page.tsx                 # Home page
│   ├── services/page.tsx        # Services catalog
│   ├── gallery/page.tsx         # Before/after gallery
│   ├── about/page.tsx          # About us page
│   ├── contact/page.tsx        # Booking & contact
│   ├── layout.tsx              # Root layout with Montserrat font
│   └── globals.css             # Global styles
├── components/
│   ├── Navbar.tsx              # Navigation with mobile menu
│   ├── Footer.tsx              # Footer with contact info
│   ├── HeroSection.tsx         # Homepage hero
│   ├── FeaturedServices.tsx    # Featured services cards
│   └── TestimonialsCarousel.tsx # Reviews carousel
├── public/
│   ├── lashes-hero.jpg         # Lash extensions image
│   ├── pedicure-hero.jpg       # Pedicure image
│   └── salon-interior.jpg      # Salon interior image
└── tailwind.config.ts          # Tailwind theme with custom colors
```

## Key Features Breakdown

### Appointment Booking System
- Service selection from dropdown
- Date picker for appointment date
- Time slot selection (10am-6pm)
- Client information collection (name, email, phone)
- Optional additional notes
- Form validation and submission feedback

### Testimonials Carousel
- 4 customer reviews with star ratings
- Auto-advance every 5 seconds
- Manual navigation with arrows
- Dot indicators for slide position
- Smooth transitions

### Responsive Layout
- Mobile-first design approach
- Flexbox layouts that stack on mobile
- Grid layouts for service cards
- Hamburger menu on mobile
- Touch-friendly buttons and inputs

## Color Palette

| Color | Value | Usage |
|-------|-------|-------|
| Primary Pink | #EC4899 | Buttons, CTA, highlights |
| Rose Pink | #F472B6 | Accents, secondary elements |
| Light Pink | #FCE7F3 | Backgrounds, cards |
| Dark Pink | #831843 | Footer, hover states |
| Gold | #FCD34D | Accent, testimonial stars |

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```ts
colors: {
  'beauty-pink': '#EC4899',
  'beauty-rose': '#F472B6',
  // ... etc
}
```

### Services
Update services in `/app/services/page.tsx` and `/app/contact/page.tsx` service dropdown

### Contact Info
Update contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

### Team Members
Edit team section in `/app/about/page.tsx`

## Form Integration

The booking form is currently set up with local form handling. To add email notifications, integrate:
- **Resend** - For transactional emails
- **Firebase/Supabase** - For storing bookings
- **SendGrid** - Alternative email service

## Performance Optimizations

- Responsive images with Next.js Image component
- CSS optimization with Tailwind purge
- Optimized font loading with Next.js Google Fonts
- Mobile-first CSS for better performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- Email confirmation for bookings
- Database integration for appointment storage
- Payment processing for deposits
- Loyalty program/rewards
- Blog section for beauty tips
- Social media integration
- Live chat support

## Credits

Built with Next.js and Tailwind CSS. Images generated with AI image generation. Icons from Lucide React.

---

**Note**: This is a professional portfolio showcase of web development skills demonstrating responsive design, component architecture, and modern web development best practices.
