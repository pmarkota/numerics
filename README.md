# Numerics - Digital Accounting Website

A modern, responsive one-page website for Numerics accounting firm built with Next.js 14, featuring multilingual support, animations, and a functional contact form.

## Features

- Modern, light-themed design with gradients and animations
- Multilingual support (Croatian/English) with language switcher
- Fully responsive design
- Smooth scrolling navigation
- Functional contact form with CAPTCHA verification
- Email sending functionality
- Professional icons from Lucide React
- Framer Motion animations
- Glassmorphism effects

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **CAPTCHA**: hCaptcha
- **Email**: Nodemailer
- **Language**: React Context for i18n

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create environment variables file `.env.local`:
```env
# Email Configuration (Gmail recommended)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=contact@numerics.hr

# hCaptcha Configuration
HCAPTCHA_SECRET_KEY=your-hcaptcha-secret-key
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=your-hcaptcha-site-key
```

### Email Setup (Gmail)

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
   - Use this password in `EMAIL_PASS`

### CAPTCHA Setup (hCaptcha)

1. Sign up at [hCaptcha.com](https://hcaptcha.com)
2. Create a new site
3. Get your Site Key and Secret Key
4. Add them to your environment variables

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
├── app/
│   ├── api/contact/          # Contact form API endpoint
│   ├── globals.css           # Global styles
│   ├── layout.js            # Root layout with language provider
│   └── page.js              # Main page component
├── components/              # React components
│   ├── About.js
│   ├── Careers.js
│   ├── Contact.js           # Contact form with CAPTCHA
│   ├── CookieConsent.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── Navbar.js            # Navigation with language switcher
│   └── Services.js          # Redesigned services section
├── contexts/
│   └── LanguageContext.js   # Language context provider
├── utils/
│   └── translations.js      # Translation strings
└── docs/                    # Project documentation
```

## Sections

1. **Hero** - Main banner with animated elements and CTA buttons
2. **Services** - Four main services with modern card design
3. **About** - Company information with feature highlights
4. **Careers** - Job opportunities and application process
5. **Contact** - Contact form with CAPTCHA and company info
6. **Footer** - Company details and navigation

## Customization

### Adding Translations

Edit `utils/translations.js` to add new translation keys:

```javascript
export const translations = {
  hr: {
    newKey: "Croatian text"
  },
  en: {
    newKey: "English text"
  }
};
```

### Styling

The project uses Tailwind CSS. Modify component classes or extend the theme in `tailwind.config.js`.

### Contact Form

The contact form sends emails via the `/api/contact` endpoint. Customize the email template in `app/api/contact/route.js`.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

Ensure your hosting platform supports:
- Node.js 18+
- Environment variables
- API routes

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `EMAIL_USER` | Gmail address for sending emails | Yes |
| `EMAIL_PASS` | Gmail app password | Yes |
| `CONTACT_EMAIL` | Recipient email address | Optional |
| `HCAPTCHA_SECRET_KEY` | hCaptcha secret key | Yes |
| `NEXT_PUBLIC_HCAPTCHA_SITE_KEY` | hCaptcha site key | Yes |

## Support

For issues or questions, contact the development team or refer to the project documentation in the `docs/` folder.

## License

 2024 Numerics Co. d.o.o. All rights reserved.
