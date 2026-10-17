
import React, { useEffect, useState } from "react";
import "../styles/MarsImage.css";

const marsImageUrl = "https://images.unsplash.com/photo-1630694093867-4b947d812bf0?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
function MarsImage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const image = new Image();

    image.onload = () => {
      setImageLoaded(true);
    };

    image.onerror = () => {
      setImageError(true);
    };

    image.src = marsImageUrl;

    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, []);

  return (
    <section className="mars-image-section">
      <h2>Welcome to the Red Planet</h2>

      {!imageLoaded && !imageError && (
        <p>Image Loading...</p>
      )}

      {imageError && (
        <p>Failed to load image.</p>
      )}
     {imageLoaded && (
        <img
          src={marsImageUrl}
          alt="The planet Mars against a black background"
          className="mars-image"
        />
      )}

    </section>
  );
}

export default MarsImage;