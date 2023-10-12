function changeTitle(title) {
    const movieTitle = document.querySelectorAll('.head-2');

    movieTitle.forEach(name => {
        name.classList.remove('active');
        if (name.classList.contains(title)) {
            name.classList.add('active');
        }
    });
};