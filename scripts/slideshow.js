var items = [
    '<div class="sshowbox sshow01"></div>',
    '<div class="sshowbox sshow02"></div>',
    '<div class="sshowbox sshow03"></div>',
    '<div class="sshowbox sshow04"></div>',
    '<div class="sshowbox sshow05"></div>',
    '<div class="sshowbox sshow06"></div>',
    '<div class="sshowbox sshow07"></div>',
    '<div class="sshowbox sshow08"></div>',
    '<div class="sshowbox sshow09"></div>',
    '<div class="sshowbox sshow10"></div>',
    '<div class="sshowbox sshow11"></div>',
    '<div class="sshowbox sshow12"></div>',
];

document.getElementById('slideshow').innerHTML = items.toString().replaceAll(',','');

const slide = [
    { transform: 'translate(0)' },
    { transform: 'translate(-14vw)' }
];

const slideback = [
    { transform: 'translate(0)' },
    { transform: 'translate(14vw)' }
];

const slidetime = {
    duration: 100,
    iterations: 1,
    easing: "ease-in-out"
};

function next() {
    let els = document.getElementsByClassName('sshowbox');
    [].forEach.call(els, e => {
        e.animate(slide, slidetime);
    });
    let interv = setInterval(() => {
        items = items.concat(items.shift());
        document.getElementById('slideshow').innerHTML = items.toString().replaceAll(',','');
        clearInterval(interv); 
    }, 100);
}

function prev() {
    
    let els = document.getElementsByClassName('sshowbox');
    [].forEach.call(els, e => {
        e.animate(slideback, slidetime);
    });
    let interv = setInterval(() => {
        items.unshift(items.pop());
        document.getElementById('slideshow').innerHTML = items.toString().replaceAll(',','');
        clearInterval(interv); 
    }, 100);
}