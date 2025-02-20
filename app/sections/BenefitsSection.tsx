import React from "react";
import Image from "next/image";

function BenefitsSection() {
  return (
    <div>
      {" "}
      <section className="py-16 bg-white">
        <div className="flex justify-center mb-8 ">
          <h1
            className="font-bold leading-[1.2]  text-[24px] md:text-3xl lg:text-5xl max-w-[1028px]"
            style={{
              fontFamily: "Spectral SC",
            }}
          >
            Discover the Hidden Power of Your Breath{" "}
          </h1>
        </div>
        <div className="w-full max-w-6xl h-auto mx-auto flex flex-col lg:flex-row items-center overflow-hidden">
          <div className="w-full md:w-[443] h-auto min-h-[524px] relative">
            <Image
              src="/yoga.png"
              width={443}
              height={458}
              alt="Person meditating"
              className="object-cover w-full h-full absolute  left-0"
            />
          </div>

          <div className="flex flex-col flex-1">
            <div className="p-6 md:p-8 bg-[#E9F2F4] flex-1 ">
              <p className="text-gray-700 text-base mt-4 md:text-lg">
                Your breathing isn't just about oxygen in and carbon dioxide
                out—it's a complex behavior shaped by triggers, habits, and
                physiology. When misaligned, these habits can:
              </p>

              <div className="space-y-6 mt-6">
                {[
                  {
                    title: "Compromise your health:",
                    description:
                      "Triggering anxiety, fatigue, and physical discomfort.",
                    icon: "/headache.png",
                  },
                  {
                    title: "Disrupt your performance:",
                    description:
                      "Causing focus deficits, memory issues, and suboptimal endurance.",
                    icon: "/battery.png",
                  },
                  {
                    title: "Exacerbate existing conditions:",
                    description:
                      "Like asthma, chronic pain, and even stress-related disorders.",
                    icon: "/pain.png",
                  },
                ].map((benefit) => (
                  <div key={benefit.title} className="flex gap-4 items-start">
                    <Image
                      src={benefit.icon}
                      alt="image"
                      width={42}
                      height={42}
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{benefit.title}</h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#008080] text-white p-6 text-lg  mt-4 md:mt-0">
              {" "}
              Millions of people suffer the consequences of poor breathing
              habits. But you don't have to be one of them. With the
              <strong> CapnoTrainer® GO</strong>, you'll unlock a
              scientifically-backed pathway to breathing mastery.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BenefitsSection;
