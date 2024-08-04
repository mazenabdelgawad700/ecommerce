const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="image">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.lTmSRLPfVUJxz76w1rT8eQHaEX&pid=Api&P=0&h=220"
          alt=""
        />
      </div>

      <div className="cart-item-info">
        <div className="cart-item-info-title-and-price">
          <h3 className="cart-item-info-title">Product Name</h3>
          <p className="cart-item-info-price">Price: $100</p>
        </div>

        <div className="cart-item-info-quantity">
          <label htmlFor="quantity">Quantity: </label>
          <input type="number" id="quantity" min="1" defaultValue="1" />
          <div className="cart-item-info-quantity-buttons">
            <button className="cart-item-info-quantity-add-button">Add</button>
            <button className="cart-item-info-quantity-remove-button">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
