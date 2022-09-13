
const MENU = `
    <div class="content-container menu">
        <div class="image-container">
            <h1>Menù</h1>
        </div>

        <div class="menu-container">
            <h2>Appetizers</h2>

            <div class="meals-container">
                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Pesto Breadsticks</h3>
                        <span class="line"></span>
                        <h3>$7</h3>
                    </div>
                    <p>Crunchy breadsticks baked with pesto and covered in mozzarella cheese</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Mamma's Home-spread</h3>
                        <span class="line"></span>
                        <h3>$8</h3>
                    </div>
                    <p>Eggplant spread seasoned with black pepper and garlic, served with toasted bread</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Caesar Salad</h3>
                        <span class="line"></span>
                        <h3>$10</h3>
                    </div>
                    <p>Fresh romaine served with crispy croutons, parmesan cheese, and homemade caesar dressing</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>House Green Salad</h3>
                        <span class="line"></span>
                        <h3>$10</h3>
                    </div>
                    <p>Mixed greens with chopped vegetables, parmesan, and house vinaigrette</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Beef Spiedini</h3>
                        <span class="line"></span>
                        <h3>$15</h3>
                    </div>
                    <p>Delicious Italian-style kebabs holding marinated steak pinwheels and served with tomato dipping sauce</p>
                </div>
            </div>

            <h2>Pizzas</h2>

            <div class="meals-container">
                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Margherita</h3>
                        <span class="line"></span>
                        <h3>$25</h3>
                    </div>
                    <p>Delicious tomato and basil baked in mozzarella and tomato puree</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Prosciutto & Arugula</h3>
                        <span class="line"></span>
                        <h3>$25</h3>
                    </div>
                    <p>Smoked prosciutto topped with arugula, mushrooms, and parmesan in tomato puree</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Vegetariana</h3>
                        <span class="line"></span>
                        <h3>$25</h3>
                    </div>
                    <p>Roasted Peppers, aubergines, tomatoes, olives, and zucchini for healthy option without meat</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Quattro Formaggi</h3>
                        <span class="line"></span>
                        <h3>$20</h3>
                    </div>
                    <p>Creamy provolone, parmigiano reggiano, stracchino, and mozzarella combine for ultimate cheesiness</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Diavola</h3>
                        <span class="line"></span>
                        <h3>$20</h3>
                    </div>
                    <p>Classic pepperoni pizza made with spicy salami</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Frutti di Mare</h3>
                        <span class="line"></span>
                        <h3>$30</h3>
                    </div>
                    <p>Tasty shrimp and mussels combine with garlic and parsley for all our seafood lovers</p>
                </div>
            </div>

            <h2>Main Dishes</h2>

            <div class="meals-container">
                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Focaccia Barese</h3>
                        <span class="line"></span>
                        <h3>$15</h3>
                    </div>
                    <p>Fresh olives, sliced sausage, and cherry tomatoes baked with potato-infused dough</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Barilla Lasagna</h3>
                        <span class="line"></span>
                        <h3>$15</h3>
                    </div>
                    <p>Delicious ricotta cheese, mozzarella, and parmesan baked in layers of sausage and beef</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Fettuccine Alfredo</h3>
                        <span class="line"></span>
                        <h3>$15</h3>
                    </div>
                    <p>Creamy alfredo sauce covering sliced chicken and fettuccine</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Pasta Napoletana</h3>
                        <span class="line"></span>
                        <h3>$15</h3>
                    </div>
                    <p>Tasty spaghetti covered in marinara sauce, homemade meatballs, and parmesan cheese</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Pasta all'Ortolana</h3>
                        <span class="line"></span>
                        <h3>$15</h3>
                    </div>
                    <p>Roasted bell peppers, carrots, zucchini, and eggplant combine with creamy tomato sauce for vegan pasta</p>
                </div>
            </div>

            <h2>Beverages</h2>

            <div class="meals-container">
                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Soda</h3>
                        <span class="line"></span>
                        <h3>$2</h3>
                    </div>
                    <p>Dr. Pepper, Coca-Cola, Fanta, Sprite, or Barq's Root Beer, served with ice.</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Sweet/Unsweet Tea</h3>
                        <span class="line"></span>
                        <h3>$3</h3>
                    </div>
                    <p>Freshly brewed and served with ice.</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Lemonade</h3>
                        <span class="line"></span>
                        <h3>$3</h3>
                    </div>
                    <p>Choice of raspberry, strawberry, peach, or blueberry flavor is offered.</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Pinot Bianco</h3>
                        <span class="line"></span>
                        <h3>$9 / $27</h3>
                    </div>
                    <p>Elegant white wine with refined hints of citrus, almonds, and ripe fruit.</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Vietti Barbera</h3>
                        <span class="line"></span>
                        <h3>$10 / $30</h3>
                    </div>
                    <p>Classic red wine with rich, earthy fruit flavor.</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Fattoria La Vialla</h3>
                        <span class="line"></span>
                        <h3>$12 / $32</h3>
                    </div>
                    <p>Sparkling wine with elegant aromas of lively green fruit, blossoms, and warm toast.</p>
                </div>
            </div>

            <h2>Desserts</h2>

            <div class="meals-container">
                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Gelato</h3>
                        <span class="line"></span>
                        <h3>$4</h3>
                    </div>
                    <p>Classic flavors like pistachio, dark chocolate, and stracciatella to invigorating raspberry, lemon, and strawberry.</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Panna Cotta</h3>
                        <span class="line"></span>
                        <h3>$5</h3>
                    </div>
                    <p>Fresh custard-like cream topped with fresh fruit and drizzled with caramel sauce.</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Tiramisu</h3>
                        <span class="line"></span>
                        <h3>$7</h3>
                    </div>
                    <p>Delicious layers of creamy mascarpone and coffee-soaked ladyfingers, combined with hints of liquor.</p>
                </div>
            </div>
        </div>
    </div>
`;

export default MENU;