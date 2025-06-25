import React from "react";

const pariwisata = [
  {
    icon: "https://img.icons8.com/?size=100&id=914&format=png&color=000000",
    title: "Wisata Alam",
    description:
      "Jelajahi keindahan alam pegunungan dan hutan yang memikat hati pengunjung.",
  },
  {
    icon: "https://t4.ftcdn.net/jpg/05/58/58/57/360_F_558585759_5gAotjEd5OmigBlYNlxwwyGci71nGZEZ.jpghttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR62R5rPr14m87yFuNFibf183VEaTBDgrkCtiygHW4Oh5HvMtnduwdyHX4Fylf1wuXsHpY&usqp=CAU",
    title: "Budaya Lokal",
    description: "Kenali kekayaan budaya dan tradisi masyarakat setempat.",
  },
  {
    icon: "https://img.icons8.com/ios/50/000000/food.png",
    title: "Kuliner",
    description: "Cicipi beragam makanan khas yang menggugah selera dan unik.",
  },
];

const PariwisataSection = () => {
  return (
    <section
      id="pariwisata"
      className="py-12 bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage:
          "url('https://ilmugeografi.com/wp-content/uploads/2019/12/ee1d58e4-gunung-salak.jpg')",
      }}>
      {/* Overlay gradasi hijau transparan */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-green-200/10 to-transparent pointer-events-none"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-green-100 drop-shadow-lg tracking-wide">
            Pariwisata
          </h2>
          <div className="x-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {pariwisata.map((item, index) => (
              <div
                key={index}
                className="relative bg-white/90 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 flex flex-col items-center group overflow-hidden">
                {/* Ornamen lingkaran blur hijau */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-green-200 rounded-full opacity-30 blur-2xl z-0"></div>
                <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-green-100 rounded-full opacity-40 blur z-0"></div>
                <div className="flex justify-center mb-4 z-10">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-14 h-14 drop-shadow-lg group-hover:scale-110 transition"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center text-green-700 z-10">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-center z-10">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PariwisataSection;
