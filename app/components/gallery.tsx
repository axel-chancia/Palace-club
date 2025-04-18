'use client';

import { useState } from 'react';

const images = ['axel.jpg', 'david.jpg', 'arsel.jpg', '4.jpg'];

export default function Gallerie() {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <section
            className="relative w-full h-screen flex items-center justify-center bg-fixed bg-center bg shadow-lg"
            style={{ backgroundImage: `url('${selectedImage}')`, boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)' }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative text-center p-5">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    Nos suites de luxe
                </h1>
                <div className="flex flex-wrap justify-center">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className={`cursor-pointer m-2 w-24 h-24 object-cover border-4 rounded-lg transition-transform transform hover:scale-125 duration-300 animate-bounce ${
                                selectedImage === image ? 'border-red-100' : 'border-transparent'
                            }`}
                            onClick={() => setSelectedImage(image)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
