import React from 'react'
import Image from "next/image";

function PartnersSection() {
    const partners = [
        { name: "Knosis", img: "/comp3.png" },
        { name: "Medical Symbol", img: "/comp2.jpg" },
        { name: "Airway Collaborative", img: "/comp1.png" },
        { name: "Conspire Health", img: "/comp4.png" },
      ];
  return (
    <section className="py-12 bg-white">
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap justify-center items-center lg:gap-40 gap-12">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="w-40 h-20 flex items-center justify-center"
          >
            <Image
              src={partner.img}
              width={200}
              height={120}
              alt={partner.name}
              className="object-contain max-w-full max-h-[80px]"
            />
          </div>
        ))}
      </div>
    </div>
  </section>  )
}

export default PartnersSection