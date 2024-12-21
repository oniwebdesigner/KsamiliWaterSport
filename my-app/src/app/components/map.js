'use client';
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapComponent({ className = '' }) {
    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current) {
            const map = L.map(mapRef.current).setView(
                [39.775972820756785, 20.001458456416774],
                13
            );

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors',
            }).addTo(map);

            const customIcon = L.icon({
                iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png', // Default Leaflet icon
                iconSize: [25, 41], 
                iconAnchor: [12, 41],
                popupAnchor: [1, -34], 
                shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png', // Icon shadow
                shadowSize: [41, 41],
                shadowAnchor: [12, 41],
            });
            L.marker([39.775972820756785, 20.001458456416774], { icon: customIcon })
                .addTo(map)
                .bindPopup('Ksamil WaterSport')
                .openPopup();

            return () => map.remove();
        }
    }, []);

    return (
        <section className={`relative z-10 rounded-2xl shadow-lg overflow-hidden ${className}`}>
            <figure
                ref={mapRef}
                className="h-[400px] w-full border shadow-sm mt-[calc(60px+1rem)]" // Adjust margin-top based on navbar height
            ></figure>
        </section>
    );
}
