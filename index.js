document.querySelectorAll('.door-image').forEach(img => {
    // Mouse enter: Change image to opened-door.png
    img.addEventListener('mouseenter', () => {
        setTimeout(() => {
            img.src = '/static/opened-door.png';
        }, 100);
    });

    // Mouse leave: Change image back to closed-door.png
    img.addEventListener('mouseleave', () => {
        setTimeout(() => {
            img.src = '/static/closed-door.png';
        }, 100);
    });

    // Click event: Redirect based on the class of the image
    img.addEventListener('click', () => {
        setTimeout(() => {
            if (img.classList.contains('art')) {
                window.location.href = "/art.html";
            } else if (img.classList.contains('melodies')) {
                window.location.href = "/music.html";
            } else if (img.classList.contains('tales')) {
                window.location.href = "/writing.html";
            } else {
                window.location.href = "/recommend.html";
            }
        }, 100);
    });
});