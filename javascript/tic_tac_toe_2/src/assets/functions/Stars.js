//Creates stars for space background
function createStars() {
    const mainDoc = document.querySelector('main');
    const {width, height} = mainDoc.getBoundingClientRect();
    const prevStars = mainDoc.querySelectorAll('span.star').forEach(str => str.remove());

    //Creates 25 <span class="star small | large"> elements
    for (let num = 0; num < 25; num++) {
        let newStar = document.createElement('span');
        newStar.classList.add('star');
        newStar.classList.add(num < 20 ? 'small' : 'large');
        newStar.style.top = `${Math.floor(Math.random() * height)}px`;
        newStar.style.left = `${Math.floor(Math.random() * width)}px`;

        mainDoc.appendChild(newStar);
    }
}

window.addEventListener('load', createStars);
window.addEventListener('resize', createStars);