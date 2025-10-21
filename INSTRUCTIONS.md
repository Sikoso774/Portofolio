# Zoléni Kokolo Zassi - Portfolio Website

## Pure HTML/CSS/JavaScript Version

This is a standalone portfolio website built with pure HTML, CSS, and vanilla JavaScript. No frameworks or build tools required!

## Features

✨ **Pure Frontend** - No React, Node.js, or any frameworks
📱 **Fully Responsive** - Works on all devices
🎨 **Custom Design** - Green-to-black gradient background as specified
⚡ **Fast Loading** - Minimal dependencies, just HTML/CSS/JS
🎯 **Smooth Animations** - Scroll animations and transitions
📧 **Contact Ready** - Links to email and GitHub

## File Structure

```
portfolio-html/
├── index.html       # Main HTML file
├── style.css        # All styles
├── script.js        # Vanilla JavaScript for interactivity
└── README.md        # This file
```

## How to Use

### Option 1: Open Directly in Browser
1. Simply open `index.html` in any web browser
2. That's it! No server needed for local viewing

### Option 2: Host on Any Web Server

**GitHub Pages:**
1. Create a new repository on GitHub
2. Upload all files (index.html, style.css, script.js)
3. Go to Settings → Pages → Select main branch
4. Your site will be live at `https://yourusername.github.io/repository-name`

**Netlify (Free):**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `portfolio-html` folder
3. Your site is live instantly!

**Any Web Hosting:**
- Upload all three files to your hosting provider
- Access via your domain

## Customization

### Change Colors
Edit `style.css` - Look for these color values:
- `#10b981` - Main green color
- `#059669` - Darker green
- Gradient background on `body` element

### Update Content
Edit `index.html` - All content is in semantic HTML sections:
- Hero section
- About section
- Skills section
- Experience section
- Projects section
- Languages & Interests
- Footer/Contact

### Add Your CV
Replace the CV download button's onclick handler with a link to your actual CV PDF:
```html
<a href="path/to/your-cv.pdf" download class="btn-primary">
```

### Add Your Photo
Replace the `ZK` placeholder in the profile circle:
```html
<div class="profile-circle">
    <img src="assets/images/photo_profile.jpg" alt="Zoléni Kokolo Zassi" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
</div>
```

## Browser Support

✅ Chrome/Edge (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Mobile browsers

## Performance

- **Zero Dependencies** - No frameworks to load
- **Minimal External Resources** - Only Google Fonts
- **Optimized Animations** - Hardware-accelerated CSS
- **Fast Load Time** - < 1 second on average connection

## Technologies Used

- HTML5 (Semantic markup)
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter)

## License

© 2025 Zoléni Kokolo Zassi. All rights reserved.

---

**Built with ❤️ by Zoléni Kokolo Zassi**