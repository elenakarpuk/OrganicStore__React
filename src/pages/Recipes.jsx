function Recipes() {
    return (
        <div className="recipes">
            <div className="container">
                <div className="recipes__content content">
                    <h1 className="recipes__title title">Recipes</h1>
                    <div className="recipes__info">
                        <div className="recipes__item recipe">
                            <div className="recipe__img">
                                <img className="img3" src="/images/recipes/recipe1.png" alt="recipe-img" />
                                <span>Breakfast</span>
                            </div>
                            <div className="recipe__title">Banana Crunch Pancakes</div>
                        </div>
                        <div className="recipes__item recipe">
                            <div className="recipe__img">
                                <img className="img3" src="/images/recipes/recipe2.png" alt="recipe-img" />
                                <span>Salads</span>
                            </div>
                            <div className="recipe__title">Minty Melon Salad </div>
                        </div>
                        <div className="recipes__item recipe">
                            <div className="recipe__img">
                                <img className="img3" src="/images/recipes/recipe3.png" alt="recipe-img" />
                                <span>Main Dishes</span>
                            </div>
                            <div className="recipe__title">Mexican Casserole</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Recipes;