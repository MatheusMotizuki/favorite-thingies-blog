document.addEventListener('DOMContentLoaded', function () {
    // Get all the filter links
    const filterLinks = document.querySelectorAll('.sidebar ul li a');

    // Add event listeners to each filter link
    filterLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const filter = this.getAttribute('data-filter'); // Get the selected filter

            // Get all the image items (movies)
            const movieItems = document.querySelectorAll('.image-item');

            // Loop through all movies
            movieItems.forEach(item => {
                // If 'all' is selected or the movie item has the selected class, show it
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
