
window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        for (entry of entries) {
            const id = entry.target.getAttribute('id');
            if(entry.isIntersecting) {
                document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
            } else {
                document.querySelector(`nav a[href="#${id}"]`).classList.remove('active');
            }
        }
    });

    [ document.getElementById('jumbo'), document.getElementById('about'), 
      document.getElementById('roster'), document.getElementById('contact')
    ].forEach((e) => {
        observer.observe(e);
    });

});
