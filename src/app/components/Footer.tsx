export default function Footer() {
    return (
      <>
        <footer className="bg-gray-100 py-16">
          {/* Footer Main Content */}
          <div className="footer-container flex flex-wrap justify-between px-8 gap-8">
            {/* Brand Section */}
            <div className="w-[14rem]">
              <h2 className="font-bold text-2xl mb-4">Funiro.</h2>
              <p className="text-gray-600">
                400 University Drive Suite 200 Coral Gables, FL 33134 USA
              </p>
            </div>
  
            {/* Navbar Section */}
            <div>
              <h4 className="font-bold text-lg mb-4">Navbar</h4>
              <ul className="text-gray-600 space-y-2">
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
  
            {/* Help Section */}
            <div>
              <h4 className="font-bold text-lg mb-4">Help</h4>
              <ul className="text-gray-600 space-y-2">
                <li>Payment Option</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
              </ul>
            </div>
  
            {/* Newsletter Section */}
            <div>
              <h4 className="font-bold text-lg mb-4">Newsletter</h4>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="p-2 border border-white-300 rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 font-bold rounded-r-md hover:bg-gray-800 transition"
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-8 text left-center text-gray-600">
            <hr className="border-gray-300 mb-4" />
            <p>2023 Funiro. All rights reserved</p>
          </div>
        </footer>
      </>
    );
  }
  