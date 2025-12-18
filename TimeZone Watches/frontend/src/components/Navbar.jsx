import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { getTotalItems } = useCart();

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>TimeZone Watches</h1>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>

        <Link to="/cart" style={styles.link}>
          Cart
          {getTotalItems() > 0 && (
            <span style={styles.badge}>{getTotalItems()}</span>
          )}
        </Link>

        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "80px",
    width: "100%",
    background: "#e91e63",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 30px",
    zIndex: 1000
  },
  logo: {
    color: "white",
    margin: 0
  },
  links: {
    display: "flex",
    gap: "20px"
  },
  link: {
    color: "white",
    textDecoration: "none",
    padding: "8px 16px"
  },
  badge: {
    marginLeft: "6px",
    background: "white",
    color: "#e91e63",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "12px"
  }
};

export default Navbar;
