function Blog() {
    return (
        <div className="container">
            <div className="blog">
                <div className="blog__content content">
                    <h1 className="blog__title title">Blog</h1>
                    <div className="blog__info">
                        <div className="blog__item item">
                            <div className="item__img">
                                <img className="img1" src="/images/blog/blog1.png" alt="blog-img" />
                                <img className="img2" src="/images/more.png" alt="more" />
                            </div>
                            <div className="item__views view">
                                <span className="view__date">8 SEP 2020</span>
                                <span className="view__range"></span>
                                <img width={16} height={16} src="/images/view.svg" alt="view-img" />
                                <span className="view__amount">585</span>
                            </div>
                            <div className="item__content">
                                <div className="item__title">5 reasons to love organic</div>
                                <div className="item__text">There are many reasons to love organic food and farming. We take a look at why organic is good for you and your family.</div>
                            </div>
                        </div>
                        <div className="blog__item item">
                            <div className="item__img">
                                <img className="img1" src="/images/blog/blog2.png" alt="blog-img" />
                                <img className="img2" src="/images/more.png" alt="more" />
                            </div>
                            <div className="item__views view">
                                <span className="view__date">6 SEP 2020</span>
                                <span className="view__range"></span>
                                <img width={16} height={16} src="/images/view.svg" alt="view-img" />
                                <span className="view__amount">820</span>
                            </div>
                            <div className="item__content">
                                <div className="item__title">You're the Apple for My Pie</div>
                                <div className="item__text">This year, we plan to bake a home-made apple pie, but we need the main ingredient: apples, of course!</div>
                            </div>
                        </div>
                        <div className="blog__item item">
                            <div className="item__img">
                                <img className="img1" src="/images/blog/blog3.png" alt="blog-img" />
                                <img className="img2" src="/images/more.png" alt="more" />
                            </div>
                            <div className="item__views view">
                                <span className="view__date">4 SEP 2020</span>
                                <span className="view__range"></span>
                                <img width={16} height={16} src="/images/view.svg" alt="view-img" />
                                <span className="view__amount">923</span>
                            </div>
                            <div className="item__content">
                                <div className="item__title">Best Christmas food gifts for 2020</div>
                                <div className="item__text">From quick bites to comforting teas, Christmas is the right time of the year to spoil your loved ones with food gifts.</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Blog;