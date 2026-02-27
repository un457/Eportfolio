// Gallery Lightbox Functionality

// Get all photo items
const photoItems = document.querySelectorAll('.photo-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

let currentPhotoIndex = 0;

// Open lightbox when clicking on a photo
photoItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentPhotoIndex = index;
        openLightbox(item);
    });
});

// Open lightbox function
function openLightbox(item) {
    const img = item.querySelector('img');
    const caption = item.querySelector('.photo-caption');
    
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    
    if (caption) {
        lightboxCaption.innerHTML = caption.innerHTML;
        lightboxCaption.style.display = 'block';
    } else {
        lightboxCaption.style.display = 'none';
    }
    
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Close lightbox
lightboxClose.addEventListener('click', closeLightbox);

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling
}

// Navigate to previous photo
lightboxPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    currentPhotoIndex = (currentPhotoIndex - 1 + photoItems.length) % photoItems.length;
    openLightbox(photoItems[currentPhotoIndex]);
});

// Navigate to next photo
lightboxNext.addEventListener('click', (e) => {
    e.stopPropagation();
    currentPhotoIndex = (currentPhotoIndex + 1) % photoItems.length;
    openLightbox(photoItems[currentPhotoIndex]);
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'block') {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            currentPhotoIndex = (currentPhotoIndex - 1 + photoItems.length) % photoItems.length;
            openLightbox(photoItems[currentPhotoIndex]);
        } else if (e.key === 'ArrowRight') {
            currentPhotoIndex = (currentPhotoIndex + 1) % photoItems.length;
            openLightbox(photoItems[currentPhotoIndex]);
        }
    }
});

// Lazy loading for images
const lazyImages = document.querySelectorAll('.photo-wrapper img');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease';
            
            // Simulate loading (remove this if images are already optimized)
            setTimeout(() => {
                img.style.opacity = '1';
            }, 100);
            
            observer.unobserve(img);
        }
    });
}, {
    rootMargin: '50px'
});

lazyImages.forEach(img => {
    imageObserver.observe(img);
});

// Add animation on scroll for gallery items
const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, {
    threshold: 0.1
});

photoItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    galleryObserver.observe(item);
});
