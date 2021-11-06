

// execute script after page load
window.onload = function digital_fn(){

    // toggle button
    let toggle = document.querySelector("#nav .toggle-btn");
    let collapse = document.querySelector("#nav .collapse");

    toggle.addEventListener('click', function(event){
        collapse.classList.toggle('active')
        // console.log(toggle)
    });

    // mansonry js
    let grid = document.querySelector("#site-main .recent-work-area .images-flex");

    let msnry = new Masonry(grid, {
        itemSelector : '.flex-item',
        gutter : 100,
        fitWidth: true,
    })

}

// rellax js code
var rellax = new Rellax('.rellax', {
    center : true
})