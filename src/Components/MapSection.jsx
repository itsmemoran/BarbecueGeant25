// components/MapSection.jsx

import { LocationEditIcon } from "lucide-react";


export default function MapSection() {
  return (
    <section className="w-full px-4 py-10 bg-gray-900">
                  <h3 
              className="text-center text-4xl sm:text-5xl font-bold text-white mb-12 uppercase tracking-wider"
              style={{ 
                fontFamily: "'Bebas Neue', cursive",
                letterSpacing: '0.08em'
              }}
            >
               Où Nous Trouver <LocationEditIcon className="inline-block ml-2 mb-1 size-16 text-orange-600" />
            </h3>

      <div className="max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
        <div className="relative w-full pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1028.4423972884294!2d-3.9676659833695407!3d5.3604898715876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ed0014236823%3A0xd43406c473e5e081!2sKatheho%20event!5e1!3m2!1sfr!2sus!4v1765496650914!5m2!1sfr!2sus"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
