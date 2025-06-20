import React from 'react';

const pariwisata = [
  {
    icon: "https://img.icons8.com/ios/50/000000/beach.png",
    title: "Pantai Indah",
    description: "Nikmati keindahan pantai pasir putih dan air laut jernih di sekitar kelurahan."
  },
  {
    icon: "https://img.icons8.com/ios/50/000000/hiking.png",
    title: "Wisata Alam",
    description: "Jelajahi keindahan alam pegunungan dan hutan yang memikat hati pengunjung."
  },
  {
    icon: "https://img.icons8.com/ios/50/000000/culture.png",
    title: "Budaya Lokal",
    description: "Kenali kekayaan budaya dan tradisi masyarakat setempat."
  },
  {
    icon: "https://img.icons8.com/ios/50/000000/food.png",
    title: "Kuliner",
    description: "Cicipi beragam makanan khas yang menggugah selera dan unik."
  }
];

const PariwisataSection = () => {
  return (
    <section
      id="pariwisata"
      className="py-12 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay semi-transparent untuk memperjelas teks */}
      <div className="bg-trasnparant bg-opacity-50 py-25 pt-8">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-green-800">Pariwisata</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pariwisata.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300">
                <div className="flex justify-center mb-4">
                  <img src={item.icon} alt={item.title} className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-green-700">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PariwisataSection;