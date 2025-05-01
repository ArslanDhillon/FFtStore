export default function Footer() {
    return (
      <div className="px-4 lg:px-12 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h4 className="font-bold mb-2">Contact Information</h4>
          <p>22-Km Ferozepur Road Near Nadir Chowk<br />Gajjumata Lahore</p>
          <p>Phone: 042-32301484</p>
          <p>Email: info@lltstore.com</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li>Track Order</li>
            <li>Return Policy</li>
            <li>Shipping Info</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Newsletter</h4>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-2 py-1 rounded w-full text-black"
          />
        </div>
      </div>
    );
  }
  