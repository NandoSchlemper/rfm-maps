import {useEffect, useState} from 'react';

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import {APIProvider, Map} from '@vis.gl/react-google-maps';

import ControlPanel from '../control-panel';
import { CustomAdvancedMarker } from '../custom-advanced-marker/custom-advanced-marker';
import { loadRealEstateListing } from '../libs/load-real-estate-listing';
import type { RealEstateListing } from '../types/types';
import './style.css';

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

const App = () => {
  const [realEstateListing, setRealEstateListing] =
    useState<RealEstateListing | null>(null);

  useEffect(() => {
    void loadRealEstateListing().then(data => {
      setRealEstateListing(data);
    });
  }, []);

  return (
    <div className="advanced-marker-example">
      <APIProvider apiKey={API_KEY} libraries={['marker']}>
        <Map
          mapId={'bf51a910020fa25a'}
          defaultZoom={5}
          defaultCenter={{lat: 47.53, lng: -122.34}}
          gestureHandling={'greedy'}
          disableDefaultUI>
          {/* advanced marker with html-content */}
          {realEstateListing && (
            <CustomAdvancedMarker realEstateListing={realEstateListing} />
          )}
        </Map>

        <ControlPanel />
      </APIProvider>
    </div>
  );
};

export default App;

