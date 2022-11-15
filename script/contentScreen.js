let content = document.querySelector('.content');

if (window.screen.width >= 1200) {
    let widthRes = window.innerWidth - 320;
    content.style.width = widthRes + 'px';
    
    window.addEventListener('resize', changeSize);
    function changeSize() {
        widthRes = window.innerWidth - 320;
        content.style.width = widthRes + 'px';
    }
}