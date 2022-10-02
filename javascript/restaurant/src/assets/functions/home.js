
const HOMEPAGE = (() => {
    const divContainer = document.createElement('div');
    divContainer.classList = 'content-container home';
    const innerHTML = `
        <div class="image-container">
            <h1>Ciao a Gianni's Pizza Stop!</h1>
        </div>
        <div class="welcome-container">
            <h2>Enjoy a taste of Italy!</h2>

            <p>Come stop by for a oven-baked pizza topped with savoury meat and fresh vegetables, along with refreshing beverages, and a delicious dessert for the gran finale. Whether for a family night out, first date, or get together with old friends, our authentic Italian meals will make you feel right at home.</p>

            <button>View Menu</button>

            <p>Or</p>

            <button>Make a Reservation</button>
        </div>

        <span class="divider"></span>

        <div class="info-container">
            <h3>Visit us in downtown Fort Worth!</h3>
            <p>123 Food Street, Fort Worth, TX 76179</p>

            <div>
                <p>Order Online and Takeout!</p>

                <img class="uber" />
                <img class="grubhub" />
                <img class="postmates" />
            </div>
        </div>
    `;

    divContainer.insertAdjacentHTML('afterbegin', innerHTML);
    return divContainer;
})();

export default HOMEPAGE;