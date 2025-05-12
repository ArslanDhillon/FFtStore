import Head from "next/head";

export default function Checkout() {
    return (

        <div className="w-full"
            style={{
                display: "flex",
                gap: "40px",
                
                fontFamily: "Arial, sans-serif",
            }}
        >
            {/* Left: Contact & Delivery Form */}
            <div className="w-6/12 p-[40px] border border-r-2 border-[#f2f2f2]"
                style={{
                    flex: 1,
                    maxHeight: "100vh",
                    overflowY: "auto",
                    paddingRight: "20px",
                }}
            >
                <h2 style={{ fontSize: '24px', fontWeight: 700 }}>Contact

                </h2>
                <input
                    onFocus={(e) => {
                        e.target.style.border = "1px solid black";
                    }}
                    onBlur={(e) => {
                        e.target.style.border = "1px solid [#ccc]";
                    }}
                    type="email" placeholder="Email" required style={inputStyle} />
                <p style={errorStyle}>Enter an email</p>
                <label style={{ display: "block", marginBottom: "20px" }}>
                    <input type="checkbox" style={{ marginRight: "8px" }} />
                    Email me with news and offers
                </label>

                <h2 style={{ fontSize: '18px', fontWeight: 600 }}>Delivery</h2>

                <div className="flex flex-row items-center w-full gap-4">

                    <input
                        onFocus={(e) => {
                            e.target.style.border = "1px solid black";
                        }}
                        onBlur={(e) => {
                            e.target.style.border = "1px solid [#ccc]";
                        }}
                        type="text" placeholder="First name" style={inputStyle} />
                    <input type="text" placeholder="Last name"
                        onFocus={(e) => {
                            e.target.style.border = "1px solid black";
                        }}
                        onBlur={(e) => {
                            e.target.style.border = "1px solid [#ccc]";
                        }}
                        style={inputStyle} />

                </div>

                <input
                    onFocus={(e) => {
                        e.target.style.border = "1px solid black";
                    }}
                    onBlur={(e) => {
                        e.target.style.border = "1px solid [#ccc]";
                    }}
                    type="text" placeholder="Address" style={inputStyle} />
                <input
                    onFocus={(e) => {
                        e.target.style.border = "1px solid black";
                    }}
                    onBlur={(e) => {
                        e.target.style.border = "1px solid [#ccc]";
                    }}
                    type="text" placeholder="Apartment, suite, etc. (optional)" style={inputStyle} />

                <div className="flex flex-row items-center w-full gap-4">
                    <input
                        onFocus={(e) => {
                            e.target.style.border = "1px solid black";
                        }}
                        onBlur={(e) => {
                            e.target.style.border = "1px solid [#ccc]";
                        }}
                        type="text" placeholder="City" style={inputStyle} />
                    <input
                        onFocus={(e) => {
                            e.target.style.border = "1px solid black";
                        }}
                        onBlur={(e) => {
                            e.target.style.border = "1px solid [#ccc]";
                        }}
                        type="text" placeholder="Postal Code" style={inputStyle} />
                </div>


                <input
                    onFocus={(e) => {
                        e.target.style.border = "1px solid black";
                    }}
                    onBlur={(e) => {
                        e.target.style.border = "1px solid [#ccc]";
                    }}
                    type="tel" placeholder="Phone" style={inputStyle} />
                <p style={errorStyle}></p>

                <label style={{ display: "block", marginBottom: "20px" }}>
                    <input type="checkbox" style={{ marginRight: "8px" }} />
                    Email me with news and offers
                </label>

                <div>
                    <h3 style={headingStyle}>Shipping method</h3>
                    <div style={radioGroupStyle}>
                        <label style={{
                            borderTopLeftRadius: "8px",
                            borderTopRightRadius: "8px", ...radioOptionStyle
                        }}>
                            <input type="radio" name="shipping" defaultChecked />
                            <div style={radioContentStyle}>
                                <span>PrePaid (Free Shipping on Every Order )</span>
                                <span style={{ fontWeight: "bold" }}>FREE</span>
                            </div>
                        </label>
                        <label style={{
                            borderBottomLeftRadius: "8px",
                            borderBottomRightRadius: "8px", ...radioOptionStyle
                        }}>
                            <input type="radio" name="shipping" />
                            <div style={radioContentStyle}>
                                <span>Standard Shipping</span>
                                <span style={{ fontWeight: "bold" }}>Rs 180.00</span>
                            </div>
                        </label>
                    </div>
                </div>

                {/* Payment */}
                <div style={{ marginTop: "40px" }}>
                    <h3 style={headingStyle}>Payment</h3>
                    <p style={{ color: "#666", fontSize: "14px", marginBottom: "10px" }}>
                        All transactions are secure and encrypted.
                    </p>

                    <div style={paymentBoxStyle}>
                        <div style={paymentHeaderStyle}>
                            <span>Debit - Credit Card</span>
                            <span>
                                {/* <Image src="/icons/visa.png" alt="visa" width={40} height={25} /> */}
                                {/* <Image src="/icons/mastercard.png" alt="mastercard" width={40} height={25} /> */}
                            </span>
                        </div>
                        <div style={cardImageBoxStyle}>
                            {/* <Image src="/icons/browser-payment.png" alt="browser-payment" width={120} height={80} /> */}
                            <p style={{ fontSize: "14px", marginTop: "10px", textAlign: "center", color: "#333" }}>
                                After clicking “Pay now”, you will be redirected to Debit - Credit Card to complete your purchase securely.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Billing Address */}
                <div style={{ marginTop: "40px" }}>
                    <h3 style={headingStyle}>Billing address</h3>
                    <div style={radioGroupStyle}>
                        <label style={radioOptionStyle}>
                            <input type="radio" name="billing" defaultChecked />
                            <div style={radioContentStyle}>Same as shipping address</div>
                        </label>
                        <label style={radioOptionStyle}>
                            <input type="radio" name="billing" />
                            <div style={radioContentStyle}>Use a different billing address</div>
                        </label>
                    </div>
                </div>

                {/* Pay Now Button */}
                <div style={{ marginTop: "40px" }}>
                    <button style={payNowButtonStyle}>Pay now</button>
                </div>

            </div>

            {/* Right: Summary Section */}
            <div className="w-6/12" style={{ flexShrink: 0,backgroundColor:'#f9f9f9',paddingTop:'20px' }}>
                <div style={itemBox}>
                    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                        <div style={{ position: "relative", width: 64, height: 64 }}>
                            {/* <Image src="/sweater.png" alt="Product" width={64} height={64} /> */}
                            <div style={quantityBadge}>1</div>
                        </div>
                        <div>
                            <p style={{ fontWeight: "bold", margin: 0 }}>1/4 Button Down Knitted Sweater</p>
                            <p style={{ color: "#666", fontSize: 14, margin: 0 }}>7-8 Y / NAVY / Boy</p>
                        </div>
                    </div>
                    <div style={{ fontWeight: "bold" }}>Rs 2,749.00</div>
                </div>

                {/* Gift Card Input */}
                <div style={{ display: "flex", gap: 12, margin: "24px 0" }}>
                    <input
                        type="text"
                        placeholder="Gift card"
                        style={{
                            flex: 1,
                            padding: "10px",
                            border: "1px solid #ddd",
                            borderRadius: 6,
                            fontSize: 16,
                        }}
                    />
                    <button
                        disabled
                        style={{
                            padding: "10px 20px",
                            border: "1px solid #ddd",
                            borderRadius: 6,
                            background: "#f1f1f1",
                            color: "#aaa",
                            fontSize: 16,
                            cursor: "not-allowed",
                        }}
                    >
                        Apply
                    </button>
                </div>

                {/* Subtotal and Shipping */}
                <div style={{ fontSize: 16, marginBottom: 12 }}>
                    <div style={rowStyle}>
                        <span>Subtotal</span>
                        <span>Rs 2,749.00</span>
                    </div>
                    <div style={rowStyle}>
                        <span>
                            Shipping <span style={{ fontSize: 12, cursor: "help" }}>ⓘ</span>
                        </span>
                        <span>Rs 180.00</span>
                    </div>
                </div>

                {/* Total */}
                <div style={{ ...rowStyle, fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
                    <span style={{ color: "#999", fontWeight: "normal", fontSize: 14 }}>PKR</span>
                    <span>Rs 2,929.00</span>
                </div>
            </div>
        </div >
    );
}

const inputStyle = {
    display: "block",
    width: "100%",
    marginBottom: "12px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "7px",
    outline: "none",           // disables blue or orange outline
    boxShadow: "none",         // disables glow
    WebkitBoxShadow: "none",   // Safari-specific fix
};

const errorStyle = {
    color: "red",
    marginTop: "-10px",
    marginBottom: "10px",
    fontSize: "14px",
};
const headingStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
};

const radioGroupStyle = {
    display: "flex",
    flexDirection: "column",
    // gap: "12px",
};

const radioOptionStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "16px",
    border: "1px solid #ccc",
    // borderTop: "8px",

    cursor: "pointer",
};

const radioContentStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
};

const paymentBoxStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
};

const paymentHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 16px",
    backgroundColor: "#f9f9f9",
    borderBottom: "1px solid #ccc",
};

const cardImageBoxStyle = {
    textAlign: "center",
    padding: "30px",
};

const payNowButtonStyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "16px",
    fontSize: "16px",
    width: "100%",
    borderRadius: "8px",
    cursor: "pointer",
    border: "none",
};
const itemBox = {
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid #000",
    padding: 16,
    borderRadius: 6,
    backgroundColor: "#fff",
  };
  
  const quantityBadge = {
    position: "absolute",
    top: -8,
    right: -8,
    width: 20,
    height: 20,
    borderRadius: "50%",
    background: "#333",
    color: "#fff",
    fontSize: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  
  const rowStyle = {
    display: "flex",
    justifyContent: "space-between",
    margin: "6px 0",
  };
  