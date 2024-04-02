export default function Product() {
    return (
        <div className="meal-item">
            <article>
                <img src="" alt="Product image" />
                <div>
                    <h3>Prouct name</h3>
                    <p className="meal-item-description">Description</p>
                    <p className="meal-item-price">$200</p>
                </div>
                <p className="meal-item-actions">
                    <button className="button">Add to cart</button>
                </p>
            </article>
        </div>
    );
}
