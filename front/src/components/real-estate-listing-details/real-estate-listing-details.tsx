import type { FunctionComponent} from 'react';

import type {ListingDetails} from '../types/types'
import { Activity } from 'lucide-react';

import './real-estate-listing-details.css';

interface Props {
  details: ListingDetails;
}

export const RealEstateListingDetails: FunctionComponent<Props> = ({
  details
}) => {
  const {
    property_address,
    listing_title,
    property_bedrooms,
    property_bathrooms,
    property_square_feet,
    listing_description
  } = details;

  return (
    <div className="details-container">
      <div className="listing-content">
        <h2>{listing_title}</h2>
        <p>{property_address}</p>
        <div className="details">
          <div className="detail_item">
            <Activity /> {property_square_feet.replace('sq ft', 'ft²')}
          </div>
          <div className="detail_item">
            <Activity /> {property_bathrooms}
          </div>
          <div className="detail_item">
            <Activity /> {property_bedrooms}
          </div>
        </div>

        <p className="description">{listing_description}</p>
      </div>
    </div>
  );
};
