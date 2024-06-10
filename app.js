const navbarList = document.querySelectorAll(".nav-list");

navbarList.forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all items
        navbarList.forEach(navItem => navItem.classList.remove('active'));
        console.log("clicked");
        // Add active class to the clicked item
        this.classList.add('active');
    });
});