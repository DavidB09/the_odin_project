
const CONTACT = (() => {
    const divContainer = document.createElement('div');
    divContainer.classList = 'content-container contact';
    const innerHTML = `
        <div class="image-container">
            <h1>Contact</h1>
            <img class="background-image" />
        </div>

        <div class="background-container">

            <div class="reserve-container">
                <h2>Make a Reservation</h2>

                <div class="row-container">
                    <label for="reserve-date">
                        Date:
                        <input id="reserve-date" type="date" name="date"/>
                    </label>
                    <label for="reserve-time">
                        Time:
                        <input id="reserve-time" type="time" name="time"/>
                    </label>
                    <label for="reserve-guest">
                        # of Guests:
                        <input id="reserve-guest" type="number" name="guest" min="1" max="12"/>
                    </label>
                    <!--SET LIMIT ON TIME AND DATE-->
                </div>

                <div class="row-container">
                    <label for="reserve-info">
                        Special Requests:
                        <textarea id="reserve-info"></textarea>
                    </label>
                </div>

                <label for="reserve-email">
                    Email:
                    <input id="reserve-email" type="email" name="email" placeholder="Enter your email" />
                </label>
                <button type="submit">Submit Request</button>
            </div>

            <div class="contact-container">
                <h2>Contact Us!</h2>
                <p>Call us anytime at <a href="tel:1234567890">(123)-456-7890</a></p>
                <p>Or send an email to <a href="mailto:giannipizza@email.com">giannipizza@email.com</a></p>
            </div>

            <div class="address-container">
                <h2>Visit Us!</h2>
                <div class="hour-container">
                    <h3>Hours:</h3>
                    <p>Tuesday: 11:30 a.m. - 2:30 p.m.</p>
                    <p>Wed, Thurs, Fri, Sat: 10:00am - 3:00 a.m.</p>
                </div>
                <p>We promise you won't regret trying out freshly baked pizza and Italian cuisine!</p>
                <p>123 Food Street, Fort Worth, TX 76179</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429270.7030494513!2d-97.28931895000001!3d32.80081295000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e6e122dc807ad%3A0xa4af8bf8dd69acbd!2sFort%20Worth%2C%20TX!5e0!3m2!1sen!2sus!4v1663365866352!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    `;

    divContainer.insertAdjacentHTML('afterbegin', innerHTML);
    return divContainer;
})();

export default CONTACT;