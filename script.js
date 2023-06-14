const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const anchorOverlay = document.getElementById('overlay').querySelectorAll('a');
const navItems = document.getElementById('overlay').querySelectorAll('li');

// Control navigation animation
function navAnimation(from, to) {
    for(let i = 0; i < navItems.length; i++) {
        navItems[i].classList.replace(`slide-${from}-${i+1}`, `slide-${to}-${i+1}`);
    };
}

function toggleNav() {
    // Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change');
    // Toggle: Manu Active
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')) {
        // Animate-in overlay
        overlay.classList.replace('overlay-slide-left','overlay-slide-right');
        // Animate-in nav items
        navAnimation('out','in');
    } else {
        // Animate-out overlay
        overlay.classList.replace('overlay-slide-right','overlay-slide-left');
        // Animate-out nav items
        navAnimation('in','out');
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
console.log(anchorOverlay);
anchorOverlay.forEach((item) => {
    item.addEventListener('click', toggleNav)
});