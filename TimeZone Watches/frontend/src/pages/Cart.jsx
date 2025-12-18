import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Your Cart is Empty</h2>
        <p>Add some products to get started.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Shopping Cart
      </h1>

      {cartItems.map(item => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            marginBottom: "20px",
            background: "#fff"
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "4px"
            }}
          />

          <div style={{ flex: 1 }}>
            <h3 style={{ margin: "0 0 10px 0" }}>{item.name}</h3>
            <p style={{ margin: 0, fontWeight: "bold" }}>
              ₹{item.price.toLocaleString()}
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
              -
            </button>

            <span>{item.quantity}</span>

            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              +
            </button>

            <button
              onClick={() => removeFromCart(item.id)}
              style={{ background: "#ff4444", color: "white" }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div style={{ textAlign: "right", marginTop: "30px" }}>
        <h2>Total: ₹{getTotalPrice().toLocaleString()}</h2>
        <button
          style={{
            marginTop: "10px",
            padding: "14px 30px",
            background: "#e91e63",
            color: "white",
            border: "none",
            borderRadius: "25px",
            fontSize: "16px"
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
