import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="stats-section">
        <div className="stat-item">
          <img src="https://via.placeholder.com/50" alt="Parents" />
          <div className="stat-text">
            <h3>2M+</h3>
            <p>Parents & Educators</p>
          </div>
        </div>
        <div className="stat-item">
          <img src="https://via.placeholder.com/50" alt="Countries" />
          <div className="stat-text">
            <h3>35+</h3>
            <p>Countries & Counting</p>
          </div>
        </div>
        <div className="stat-item">
          <img src="https://via.placeholder.com/50" alt="Toys" />
          <div className="stat-text">
            <h3>20+</h3>
            <p>Educational Toys</p>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="feature">
          <i className="fas fa-shipping-fast"></i>
          <span>Free Shipping</span>
        </div>
        <div className="feature">
          <i className="fas fa-undo"></i>
          <span>30 Days Return</span>
        </div>
        <div className="feature">
          <i className="fas fa-shield-alt"></i>
          <span>6 Months Warranty</span>
        </div>
        <div className="feature">
          <i className="fas fa-lock"></i>
          <span>Secure Checkout</span>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-section">
          <h4>Shop</h4>
          <ul>
            <li><a href="#">Problem Solving Toys</a></li>
            <li><a href="#">Stem Toys</a></li>
            <li><a href="#">Social & Emotional Development Toys</a></li>
            <li><a href="#">Birthday Gift Toys</a></li>
            <li><a href="#">Super Saver Deals</a></li>
            <li><a href="#">Best Seller Toys</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>More</h4>
          <ul>
            <li><a href="#">Device Compatability</a></li>
            <li><a href="#">Free-E-Books</a></li>
            <li><a href="#">Parent Hub</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h4>Get notified of new launches, product updates, contests, and more exciting news!</h4>
          <button className="whatsapp-btn">Join our WhatsApp Community</button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-links">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
        <p className="copyright">© 2025 PlayShifu.com</p>
        <div className="payment-methods">
          <img src="https://via.placeholder.com/40" alt="Apple Pay" />
          <img src="https://via.placeholder.com/40" alt="Mastercard" />
          <img src="https://via.placeholder.com/40" alt="Visa" />
          <img src="https://via.placeholder.com/40" alt="Google Pay" />
        </div>
      </div>
    </footer>
  );
};

export default Footer; 