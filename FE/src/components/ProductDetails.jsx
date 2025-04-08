import { useState, useEffect } from 'react';
import '../styles/ProductDetails.css';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('https://playshifu-gfo2.onrender.com/api/product');
        const data = await response.json();
        setProduct(data.productList[0]); // Using first product for now
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (!product) return <div>Product not found</div>;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="product-details">
      <div className="product-gallery">
        <button className="gallery-nav prev" onClick={prevImage}>←</button>
        <img 
          src={product.images[currentImageIndex]} 
          alt={`${product.name} - Image ${currentImageIndex + 1}`}
          className="product-image"
        />
        <button className="gallery-nav next" onClick={nextImage}>→</button>
        
        <div className="thumbnail-container">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>

      <div className="product-info">
        <h1 className="product-name">{product.name}</h1>
        <div className="product-rating">
          <span className="stars">{'★'.repeat(Math.floor(product.rating))}</span>
          <span className="rating-value">{product.rating}</span>
        </div>
        <div className="product-price">
          <span className="original-price">₹{product.price}</span>
          <span className="discounted-price">₹{product.discountedPrice}</span>
        </div>
        <div className="product-description">
          {product.description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
      </div>

      <div className="product-videos">
        <h2>Product Videos</h2>
        <div className="video-grid">
          {product.videos.slice(0, 3).map((video, index) => (
            <div key={index} className="video-container">
              <video controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 