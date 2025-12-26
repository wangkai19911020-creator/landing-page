# Product Review Website

This is a pure static HTML website inspired by the Consumer Tested Reports design, ready to be uploaded directly to Cloudflare Pages or any static hosting service.

## Tech Stack

- **Pure HTML5** - Semantic tags, no framework
- **Pure CSS3** - Responsive design, mobile-first
- **Vanilla JavaScript** - No dependencies, pure native JS

## File Structure

```
.
├── index.html       # Main HTML file
├── styles.css       # Stylesheet
├── script.js        # JavaScript interactions
├── README.md        # Documentation
└── DEPLOY.md        # Deployment guide
```

## Features

✅ Fully responsive design, perfectly adapted for mobile, tablet, and desktop
✅ Modern UI design, based on the original website layout
✅ Smooth scrolling and animation effects
✅ Mobile hamburger menu
✅ Product card display system
✅ Rating and review system
✅ Special offer display area
✅ No build required, ready to use

## Usage

### Method 1: Open Directly in Browser

Simply double-click the `index.html` file to view it in your browser.

### Method 2: Use Local Server

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (requires http-server installation)
npx http-server
```

Then visit `http://localhost:8000`

### Method 3: Upload to Cloudflare Pages

1. Login to Cloudflare Dashboard
2. Go to Pages section
3. Create new project
4. Drag and drop these 3 files:
   - index.html
   - styles.css
   - script.js
5. Click Deploy

### Method 4: Upload to Other Static Hosting Services

This website can be deployed to any static file hosting service:

- **GitHub Pages**: Upload to repository, enable Pages
- **Netlify**: Drag folder to Netlify Drop
- **Vercel**: Deploy using Vercel CLI
- **AWS S3**: Upload to S3 bucket and enable static website hosting

## Customization

### Change Color Theme

Modify CSS variables in the `:root` section at the top of `styles.css`:

```css
:root {
    --primary-color: #2c5aa0;      /* Primary color */
    --secondary-color: #4CAF50;     /* Secondary color */
    --accent-color: #f44336;        /* Accent color */
}
```

### Modify Content

Directly edit the text content in the `index.html` file.

### Replace Images

Find image links in HTML and replace with your own image URLs:

```html
<img src="your-image-URL" alt="description">
```

## Mobile Adaptation

The website uses responsive design, automatically adapting to different screen sizes:

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

## Browser Compatibility

✅ Chrome/Edge (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Mobile browsers

## Performance Optimization

- Uses CDN image links (Unsplash)
- CSS uses flexbox and grid layouts
- JavaScript uses event delegation
- Image lazy loading effects
- Smooth scrolling experience

## License

This project is for learning and reference purposes only.

## Contact

If you have any questions, please contact the developer.
