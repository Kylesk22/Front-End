import React, { useState, useMemo } from "react";
import "../../styles/gym.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
  } from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

export const Gym = () => {
	const {isLoaded} = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
		libraries: ['places'],
	})

	if (!isLoaded) return <div>Loading...</div>
	return <Map />
};

const Map = () => {
	const center = useMemo(() => ({ lat:25.761681, lng: -80.191788 }), []);
	const [selected, setSelected] = useState(null);
    return (
		<>
            <div className="placeContainer">
				<PlacesAutocomplete setSelected={setSelected} />
			</div>

        <GoogleMap zoom={15} 
		center={center}
		mapContainerClassName="mapContainer">
			{selected && <Marker position={selected} />}
		</GoogleMap>
		</>
	);
}

const PlacesAutocomplete = ({ setSelected }) => {
	const {
		ready, 
		value, 
		setValue, 
		suggestions: { status, data}, 
		clearSuggestions
		} = usePlacesAutocomplete();

		const handleSelect = async (address) => {
			setValue(address, false);
			clearSuggestions();

			const result = await getGeocode({address});
			const {lat, lng} = await getLatLng(result[0]);
			setSelected({lat, lng});
		}

	return (
		<Combobox onSelect={handleSelect}>
			<ComboboxInput
                value={value} onChange={(e) => setValue(e.target.value)} disabled={!ready} className="combobox-input"/>
			<ComboboxPopover>
				<ComboboxList>
					{status === "OK" && data.map(({place_id, description}) => <ComboboxOption key={place_id} value={description} />)}
                </ComboboxList>
			</ComboboxPopover>
		</Combobox>
	)
}