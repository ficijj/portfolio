function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = function() {
    let scroller = document.getElementById('autoscroll-wrapper');

    scroller.style.transition = 'all 60000ms ease-in-out';
    scroller.style.transform = 'translateX(-110rem)';
    sleep(60000).then(() => { scroller.style.transform = 'translateX(2rem)'; });
}
