'use client';

import { useState } from 'react';

const images = ['axel.jpg', 'david.jpg', 'arsel.jpg', '4.jpg'];

export default function Nosvillas() {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <section
            className="relative w-full min-h-screen flex items-center justify-center bg-center bg-cover transition-all duration-700 px-4 sm:px-6"
            style={{ backgroundImage: `url('${selectedImage}')` }}
        >
            <div className="relative text-center max-w-5xl w-full z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 drop-shadow-xl">
                    Nos Suites de Luxe
                </h2>

                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Villa ${index + 1}`}
                            onClick={() => setSelectedImage(image)}
                            className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-lg object-cover border-4 shadow-md cursor-pointer transition-transform duration-300 hover:scale-110 ${
                                selectedImage === image
                                    ? 'border-yellow-400 ring-2 ring-yellow-400 scale-105'
                                    : 'border-transparent'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
