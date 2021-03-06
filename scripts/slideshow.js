var items = [
    '<div class="sshowbox sshow01" role="img" aria-label="Ray Charles"></div>',
    '<div class="sshowbox sshow02" role="img" aria-label="Dave\'s True Story"></div>',
    '<div class="sshowbox sshow03" role="img" aria-label="Courtney Jones"></div>',
    '<div class="sshowbox sshow04" role="img" aria-label="Neil Rosengarden"></div>',
    '<div class="sshowbox sshow05" role="img" aria-label="Lipbone Redding"></div>',
    '<div class="sshowbox sshow06" role="img" aria-label="The Sixth Letter"></div>',
    '<div class="sshowbox sshow07" role="img" aria-label="M\'lumbo"></div>',
    '<div class="sshowbox sshow08" role="img" aria-label="Marc Berger"></div>',
    '<div class="sshowbox sshow09" role="img" aria-label="Buick 6"></div>',
    '<div class="sshowbox sshow10" role="img" aria-label="Julie Corbalis"></div>',
    '<div class="sshowbox sshow11" role="img" aria-label="Linda Draper"></div>',
    '<div class="sshowbox sshow12" role="img" aria-label="Squealer"></div>',
    '<div class="sshowbox sshow13" role="img" aria-label="Bobby Rosengarden"></div>',
    '<div class="sshowbox sshow14" role="img" aria-label="Riviera"></div>',
    '<div class="sshowbox sshow15" role="img" aria-label="Alectro"></div>',
    '<div class="sshowbox sshow16" role="img" aria-label="Kelly Flint"></div>',
    '<div class="sshowbox sshow17" role="img" aria-label="Craig Greenberg"></div>',
    '<div class="sshowbox sshow18" role="img" aria-label="Peter Malick"></div>',
    '<div class="sshowbox sshow19" role="img" aria-label="Milton"></div>',
    '<div class="sshowbox sshow20" role="img" aria-label="Jonathan Charles"></div>',
    '<div class="sshowbox sshow21" role="img" aria-label="Al Soma"></div>'
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