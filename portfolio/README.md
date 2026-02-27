# Personal Portfolio - Setup Guide

Welcome to your personal portfolio! This guide will help you customize the portfolio with your own information and pictures.

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file (edit your content here)
├── gallery.html        # Photo gallery/collage page
├── styles.css          # Styling (colors, layouts, animations)
├── gallery.css         # Gallery page styling
├── script.js           # Interactive features
├── gallery.js          # Gallery lightbox functionality
├── README.md           # This guide
└── images/             # Put your photos here
    ├── your-photo.jpg
    ├── project1.jpg
    ├── project2.jpg
    ├── project3.jpg
    └── gallery/          # Gallery photos folder
        ├── photo1.jpg
        ├── photo2.jpg
        └── ...
```

## 🚀 Quick Start

1. **Add your profile picture**
   - Put your photo in the `images/` folder
   - Name it `your-photo.jpg` (or update the filename in index.html)
   - Recommended size: 600x600 pixels or larger, square format

2. **Add your project screenshots**
   - Put project images in the `images/` folder
   - Name them `project1.jpg`, `project2.jpg`, etc.
   - Recommended size: 800x600 pixels

3. **Edit your information**
   - Open `index.html` in any text editor
   - Look for `<!-- EDIT: -->` comments to find what to change
   - Replace the placeholder text with your own information

## 📝 What to Edit

### 1. Hero Section (Your Profile)

Find this section in `index.html`:

```html
<!-- EDIT: Replace "your-photo.jpg" with your actual photo file name -->
<img src="images/your-photo.jpg" alt="Your Name" id="profile-img">

<!-- EDIT: Change to your name -->
<h1>Your Name</h1>

<!-- EDIT: Change to your title/profession -->
<p class="hero-subtitle">Web Developer & Designer</p>

<!-- EDIT: Add your brief introduction -->
<p class="hero-description">
    Welcome to my portfolio! I'm passionate about creating amazing digital experiences.
</p>
```

### 2. Skills Section

Add, remove, or modify skills in the skills-grid:

```html
<div class="skill-card">
    <i class="fab fa-html5 skill-icon"></i>
    <h3>HTML5</h3>
    <p>Building semantic and accessible web structures</p>
</div>
```

**Available icons:** Use Font Awesome icons (fab fa-[name] or fas fa-[name])
- Visit: https://fontawesome.com/icons

### 3. Achievements Section

Add your achievements by copying this block:

```html
<div class="achievement-item">
    <div class="achievement-date">2024</div>
    <div class="achievement-content">
        <h3>Your Achievement Title</h3>
        <p>Description of your achievement.</p>
    </div>
</div>
```

### 4. Works/Projects Section

Add your projects by copying this block:

```html
<div class="work-card">
    <div class="work-image">
        <img src="images/project1.jpg" alt="Project 1">
    </div>
    <div class="work-info">
        <h3>Project Name</h3>
        <p>Brief description of the project.</p>
        <div class="work-tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
        </div>
        <div class="work-links">
            <a href="#" class="work-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>
            <a href="#" class="work-link"><i class="fab fa-github"></i> Code</a>
        </div>
    </div>
</div>
```

### 5. Photo Gallery

The gallery page (`gallery.html`) displays your photos in a beautiful collage layout:

1. **Add your photos** to the `images/gallery/` folder
2. **Edit `gallery.html`** to add your photos:

```html
<div class="photo-item photo-large">
    <div class="photo-wrapper">
        <img src="images/gallery/photo1.jpg" alt="Photo 1">
        <div class="photo-overlay">
            <div class="photo-caption">
                <h3>Your Caption</h3>
                <p>Description of this photo</p>
            </div>
        </div>
    </div>
</div>
```

**Photo Size Classes:**
- `photo-large` - Takes 2x2 grid space (featured photos)
- `photo-medium` - Takes 2x1 grid space
- `photo-small` - Takes 1x1 grid space

**Features:**
- Click any photo to open in lightbox view
- Navigate with arrow keys or on-screen buttons
- Responsive grid layout

### 6. Contact Section

Update your contact information:

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <div>
        <h4>Email</h4>
        <p>your.email@example.com</p>
    </div>
</div>
```

Update your social media links:

```html
<a href="https://linkedin.com/in/yourprofile" class="social-link" title="LinkedIn">
    <i class="fab fa-linkedin-in"></i>
</a>
```

## 🎨 Customizing Colors

To change the color scheme, edit `styles.css`:

```css
:root {
    --primary-color: #6366f1;    /* Main purple color */
    --primary-dark: #4f46e5;     /* Darker purple */
    --secondary-color: #8b5cf6;  /* Secondary color */
    --accent-color: #ec4899;     /* Pink accent */
    /* ... more colors */
}
```

## 📱 Testing Your Portfolio

1. Open `index.html` in your web browser
2. Test on different screen sizes:
   - Desktop (1024px+)
   - Tablet (768px)
   - Mobile (480px)
3. Test the navigation menu on mobile
4. Test the contact form

## 🌐 Publishing Your Portfolio

### Option 1: GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository named `yourusername.github.io`
3. Upload all files to the repository
4. Your site will be live at `https://yourusername.github.io`

### Option 2: Netlify (Free)
1. Go to https://netlify.com
2. Drag and drop your portfolio folder
3. Your site will be live instantly

### Option 3: Any Web Hosting
1. Upload all files to your web server
2. Make sure `index.html` is in the root folder

## 💡 Tips

- **Images:** Use high-quality images but keep them under 500KB for fast loading
- **SEO:** Update the `<title>` tag in index.html with your name
- **Favicon:** Add a favicon.ico file for the browser tab icon
- **Google Analytics:** Add your tracking code in the `<head>` section

## ❓ Need Help?

- **HTML/CSS:** https://www.w3schools.com/
- **Font Awesome Icons:** https://fontawesome.com/icons
- **Color Palettes:** https://coolors.co/

## 📄 License

This portfolio template is free to use for personal and commercial projects.
