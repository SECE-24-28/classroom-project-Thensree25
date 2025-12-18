const Contact = () => {
  return (
    <div style={{ padding: "40px 20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Contact Us
      </h1>

      <p style={{ textAlign: "center", color: "#666", marginBottom: "40px" }}>
        Need help choosing the perfect watch? Contact us!
      </p>

      <form style={{
        background: "#fff",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}>
        <input placeholder="Name" style={input} />
        <input placeholder="Email" style={input} />
        <textarea placeholder="Message" rows="4" style={input} />
        <button style={btn}>Send Message</button>
      </form>
    </div>
  );
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "20px"
};

const btn = {
  width: "100%",
  padding: "14px",
  background: "#e91e63",
  color: "white",
  border: "none",
  borderRadius: "25px"
};

export default Contact;
