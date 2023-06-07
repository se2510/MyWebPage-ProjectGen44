// // MDB 
// <script type="text/javascript" src="js/mdb.min.js"></script>

// // Custom scripts -
// <script type="text/javascript">



// </script>



const navbar = document.getElementById("main-navbar")

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) {
        navbar.classList.add("navbar-after-scroll")
    } else {
        navbar.classList.remove("navbar-after-scroll")
    }
})