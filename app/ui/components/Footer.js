import Image from "next/image";
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaSnapchatGhost, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {

  return (
    <div className="px-4 lg:px-12 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
      <div className="flex flex-col items-start gap-3">

        <button>
          <div className="hover:underline cursor-pointer" style={styles.text16}>
            Blogs
          </div>
        </button>

        <button>
          <div className="hover:underline cursor-pointer" style={styles.text16}>
            Terms & Conditions
          </div>
        </button>

        <button >
          <div className="hover:underline cursor-pointer" style={styles.text16}>
            Store Locator
          </div>
        </button>


        <button className="pt-3">
          <div style={styles.text18}>
            Contact Information
          </div>
        </button>



        <p className="pt-3" style={styles.text17}>
          22-Km Ferozepur Road Near Nadir Chowk<br />Gajjumata Lahore
        </p>
        <p style={styles.text17}>Phone: <span className="hover:underline cursor-pointer" style={styles.text17}>
          042-32301484
        </span></p>
        <p style={styles.text17}>Email: <span className="hover:underline cursor-pointer" style={styles.text17}>
          info@cougar.com.pk
        </span></p>
      </div>


      <div className="flex flex-col items-center gap-4">
        <h4 style={styles.text18}>
          Get Latest Trends
        </h4>


        <input
          type="email"
          placeholder="Enter your email"
          className="bg-transparent border-b border-gray-400 text-white placeholder-gray-500 focus:outline-none focus:border-white w-full py-2"
        />

        <div className="flex gap-4 text-white text-xl mt-4">
          <button>
            <FaFacebookF />
          </button>
          <button>
            <FaTwitter />
          </button>
          <button>
            <FaPinterestP />
          </button>
          <button>
            <FaInstagram />
          </button>
          <button>
            <FaSnapchatGhost />
          </button>

          <button>
            <FaYoutube />
          </button>
          <button>
            <FaTiktok />
          </button>
        </div>

        <Image
          src={'/icons/mainLogo.png'}
          height={50} width={300}
          style={{ marginTop: 10, marginBottom: 40 }}
          alt="*"
        />

        <div style={{
          fontSize: 12, fontWeight: '300', color: 'white',
        }}>
          {`© Copyrights Reserved by Cougar Clothing 2025`}
        </div>
      </div>


      <div className="flex flex-col items-end">
        <div className="flex flex-col items-start gap-4" >

          <button>
            <div className="hover:underline cursor-pointer" style={styles.text16}>
              Contact Us
            </div>
          </button>

          <button>
            <div className="hover:underline cursor-pointer" style={styles.text16}>
              {`FAQ's`}
            </div>
          </button>

          <button >
            <div className="hover:underline cursor-pointer" style={styles.text16}>
              Feedback / Complaint
            </div>
          </button>

          <button >
            <div className="hover:underline cursor-pointer" style={styles.text16}>
              Track Your Order
            </div>
          </button>

          <button >
            <div className="hover:underline cursor-pointer" style={styles.text16}>
              Privacy Policy
            </div>
          </button>

          <button >
            <div className="hover:underline cursor-pointer" style={styles.text16}>
              Return & Exchange Policy
            </div>
          </button>

          <button >
            <div className="hover:underline cursor-pointer" style={styles.text16}>
              Shipping & Deliveries
            </div>
          </button>

          <button >
            <div className="hover:underline cursor-pointer" style={styles.text16}>
              Order Cencellation
            </div>
          </button>

        </div>
      </div>
    </div>
  );
}

const styles = {
  text16: {
    fontSize: 14, fontWeight: '3400', color: 'white',
  },

  text18: {
    fontSize: 18, fontWeight: '700', color: 'white',
  },
  text17: {
    fontSize: 15, fontWeight: '300', color: 'white',
  }

}
