import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function FooterSection() {
  return (
    <div className="bg-white w-full flex justify-center px-4">
      <div className="max-w-[1440px] w-full">
        <section className="text-white text-center py-12 rounded-lg bg-[radial-gradient(50%_50%_at_50%_50%,_#008080_0%,_#035C5C_100%)]">
          <h3 className="text-lg font-semibold uppercase tracking-wider font-serif">
            Don&apos;t Wait
          </h3>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 uppercase font-serif">
            Transform Your Breathing Today!
          </h2>
          <p className="text-base md:text-lg opacity-90 max-w-xl mx-auto mt-4 px-4">
            Your breath is your power. Take control with the CapnoTrainer® GO,
            and experience life with greater clarity, confidence, and vitality.
          </p>
          <Button className="mt-6  text-sm md:text-lg font-semibold px-3 py-4 md:py-8 transition duration-300 ease-in-out hover:bg-teal-500 hover:text-white bg-white text-teal-700 shadow-md">            Order Now and Start Your Breathing Journey!
          </Button>
        </section>

        <footer className="py-12 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            <div className="flex flex-col items-start">
              <Image
                src="/breatheLogo.png"
                alt="Breathe Matters Logo"
                width={150}
                height={50}
                className="mb-4"
              />
              <p className="text-gray-600  max-w-sm text-sm md:text-base">
                Join us on a journey towards a healthier, balanced life—where
                each inhale and exhale contributes to your overall sense of
                wellness.
              </p>
            </div>

            <div className="text-left">
              <h3 className="font-semibold text-lg">Contact</h3>
              <p className="text-gray-600 mt-2">Phone</p>
              <p className="text-gray-600">Email</p>
              <p className="text-gray-600">Location</p>
            </div>

            <div className="text-left">
              <h3 className="font-semibold text-lg">Stay in Touch</h3>
              <div className="flex justify-start gap-6 mt-4">
                {["/social.png", "/social2.png", "/social3.png", "/social4.png"].map(
                  (icon, index) => (
                    <Image
                      key={index}
                      src={icon}
                      alt={`social-icon-${index}`}
                      width={20}
                      height={20}
                      loading="eager" 
                    />
                  )
                )}
              </div>
            </div>
          </div>

          <div className="text-center mt-8 text-gray-500 text-sm">
            ©2024 BreatheMatters. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
