import "./index.css";

export function ProductCard({ product }) {
  const { image, title, category, price } = product;
  return (
    <div className="product-card">
      <div className="product-card__main">
        <img className="product-card__image" src={image} alt="" />
        <p className="product-card__category">{category}</p>
        <h2 className="product-card__title">{title}</h2>
      </div>
      <div className="product-card__footer">
        <p className="product-card__price">${price}</p>
        <button className="product-card__button">Add to Card</button>
      </div>
    </div>
  );
}
