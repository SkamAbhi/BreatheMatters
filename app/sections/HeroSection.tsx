import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      className="relative text-white"
      style={{
        background: "linear-gradient(180deg, #6BB5B5 0%, #008080 136.34%)",
      }}
    >
      <div className="max-w-[1248px] mx-auto px-4">
        <div className="flex justify-between items-center py-6 w-full">
          <Image
            src="/breatheLogo.png"
            width={200}
            height={50}
            alt="Breathe Matters Logo"
          />

          <Button
            variant="outline"
            className="bg-teal-600 hover:bg-teal-700 text-white border-teal px-6 py-2"
            asChild
          >
            <a href="#book-now">Book Now</a>
          </Button>
        </div>

        <div className="flex justify-start mt-6">
          <h1
            className="font-bold text-2xl md:text-5xl leading-tight md:leading-[60.88px] max-w-[1028px]"
            style={{
              fontFamily: "Spectral SC",
            }}
          >
            Transform Your Life with the Revolutionary CapnoTrainer® GO
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 pt-8">
          <div className="flex-1 lg:max-w-3xl space-y-4">
            <h2 className="font-bold text-xl md:text-[36px] leading-snug">
              Breathe Smarter, Live Better
            </h2>
            <p className="text-sm md:text-base  opacity-90 max-w-5xl">
              Breathing is more than just an unconscious action—it's a
              foundation of health, performance, and emotional well-being. But
              what if your breathing habits are silently holding you back? Enter
              the CapnoTrainer® GO, the groundbreaking tool that merges science,
              psychology, and technology to revolutionize your breathing habits
              and transform your life!
            </p>
          </div>

          <div className="max-w-[500px]  mt-6 lg:mt-0">
            <Image
              src="/hero1.png"
              width={800}
              height={428}
              alt="CapnoTrainer GO Device"
              className="object-contain w-full h-auto "
              priority
            />
          </div>
        </div>
      </div>

      <div
        className="w-full h-[152px] mt-[-50px]"
        style={{
          background: "linear-gradient(180deg, #008080 0%, #001A1A 143.38%)",
        }}
      ></div>
    </section>
  );
}
