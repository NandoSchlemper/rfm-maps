import {useState, type FunctionComponent, type MouseEvent} from 'react';

import './real-estate-gallery.css';

interface Props {
  images: string[];
  isExtended: boolean;
}

export const RealEstateGallery: FunctionComponent<Props> = ({
  images,
  isExtended = false
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleBack = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNext = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <div className={`photo-gallery ${isExtended ? 'extended' : ''}`}>
      {/* biome-ignore lint/a11y/noRedundantAlt: <explanation> */}
<img src={images[currentImageIndex]} alt="Real estate listing photo" />

      <div className="gallery-navigation">
        <div className="nav-buttons">
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button onClick={handleBack} disabled={currentImageIndex === 0}>
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
            onClick={handleNext}
            disabled={currentImageIndex === images.length - 1}>
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
        <div className="indicators">
          {images.map((_, index) => (
            // biome-ignore lint/style/useSelfClosingElements: <explanation>
            <span
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className={`dot ${index === currentImageIndex ? 'active' : ''}`}></span>
          ))}
        </div>
      </div>
    </div>
  );
};
