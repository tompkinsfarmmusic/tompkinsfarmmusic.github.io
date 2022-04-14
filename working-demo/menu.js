var menu = document.getElementById('menu');
document.getElementById('equiv').addEventListener('click',
function(e) {
    if(menu.classList.contains('openmenu')) {
        menu.classList.remove('openmenu');
        menu.classList.add('closemenu');
    } else if(menu.classList.contains('closemenu')) {
        menu.classList.remove('closemenu');
        menu.classList.add('openmenu');
    } else {
        menu.classList.add('openmenu');
    }
});