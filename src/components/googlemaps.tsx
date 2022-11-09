//NO LONGER IN USE. HERE JUST FOR TESTING AND LEARNING PURPOSES//
import { GoogleMap } from '@capacitor/google-maps';
import { useRef } from 'react';

const mapRef = document.getElementById('map');

const MyMap: React.FC = () => {
  const mapRef = useRef<HTMLElement>();
  let newMap: GoogleMap;

  async function createMap() {
    if (!mapRef.current) return;

    newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: mapRef.current,
      apiKey: "AIzaSyC4JUh_ULu04GaYDk3J7NPFhmxS1EmcgvY",
      config: {
        center: {
          lat: -12.3717852,
          lng: 130.8689199
        },
        zoom: 15
      }
    })
  }

  return (
    <div className="component-wrapper">
      <capacitor-google-map ref={mapRef} style={{
        display: 'inline-block',
        width: 400,
        height: 400
      }}></capacitor-google-map>

      <button onClick={createMap}>Create Map</button>
    </div>
  )
}

export default MyMap;