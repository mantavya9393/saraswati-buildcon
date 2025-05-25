import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

// Fix default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const presenceData = [
    { city: 'Gujarat', coords: [22.2587, 71.1924], projects: '12+ Projects' },
    { city: 'Rajasthan', coords: [27.0238, 74.2179], projects: '2+ Projects' },
    { city: 'Orissa', coords: [20.9517, 85.0985], projects: '3+ Projects' },
];

const MapAnimation = ({ trigger }) => {
    const map = useMap();
    const markerRefs = useRef([]);

    useEffect(() => {
        if (!trigger) return;

        let index = 0;

        const flyToNext = () => {
            if (index < presenceData.length) {
                const { coords } = presenceData[index];
                map.flyTo(coords, 7, { duration: 2 });

                setTimeout(() => {
                    const marker = markerRefs.current[index];
                    if (marker) marker.openPopup();
                    index++;
                    setTimeout(flyToNext, 3000);
                }, 2000);
            } else {
                const lastMarker = markerRefs.current[presenceData.length - 1];
                if (lastMarker) lastMarker.closePopup();

                setTimeout(() => {
                    map.flyTo([22.9734, 78.6569], 4, { duration: 2 });
                }, 500);
            }
        };

        flyToNext();
    }, [trigger, map]);

    return (
        <>
            {presenceData.map(({ city, coords, projects }, i) => (
                <Marker
                    key={city}
                    position={coords}
                    ref={(ref) => {
                        if (ref) markerRefs.current[i] = ref;
                    }}
                >
                    <Popup>
                        <strong>{city}</strong><br />{projects}
                    </Popup>
                </Marker>
            ))}
        </>
    );
};

const OurPresence = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.4, // Adjust to trigger only when the map is partly in view
    });

    const [mapReady, setMapReady] = useState(false);

    useEffect(() => {
        if (inView) {
            const timer = setTimeout(() => setMapReady(true), 300);
            return () => clearTimeout(timer);
        }
    }, [inView]);

    return (
        <section
            id="Presence"
            ref={ref}
            className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#164e63] text-white py-20 px-6 md:px-20"
        >
            <motion.div
                className="max-w-6xl mx-auto text-center mb-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            // viewport={{ once: true, amount: 0.6 }}
            >
                <h2 className="text-3xl sm:text-5xl font-bold mb-4">
                    Our <span className="underline underline-offset-4 decoration-white font-light">Presence</span>
                </h2>
                <p className="text-blue-100 max-w-3xl mx-auto text-sm sm:text-base">
                    Our projects span across India. Click any marker to see the number of projects we've completed there.
                </p>
            </motion.div>

            <motion.div
                className="relative z-0 max-w-6xl mx-auto h-[400px] sm:h-[500px] rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                {mapReady && (
                    <MapContainer
                        center={[22.9734, 78.6569]}
                        zoom={4}
                        scrollWheelZoom={false}
                        className="h-full w-full"
                    >
                        <TileLayer
                            attribution="&copy; OpenStreetMap contributors"
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <MapAnimation trigger={inView} />
                    </MapContainer>
                )}
            </motion.div>
        </section>
    );
};

export default OurPresence;
