import Image from "next/image";

export default function Slide() {
  return (
    <div className="slideSection bg-[#FCF8F3] px-8 py-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-screen-xl mx-auto">
        {/* Left Side: Text and Button */}
        <div className="flex flex-col item-center justify-centre text-center">
          <h4 className="text-3xl font-bold whitespace-pre leading-tight text-center">
            50+ beautiful rooms<br/>inspiration
          </h4>
          <p className="text-gray-600 mt-2 max-w-sm">
            Our designer already made a lot of beautiful <br/>prototypes of rooms that
            inspire you.
          </p>
          <button className="bg-[#B88E2F] text-white py-2 px-4 rounded hover:bg-[#a07c27] transition">
            Explore More
          </button>
        </div>

        {/* Right Side: Images Horizontally */}
        <div className="slideImages flex lg:w-1/2 justify-center lg:justify-end gap-6">
          <Image
            src="/Inner.png"
            width={400}
            height={300}
            alt="Beautiful Room Inspiration"
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/Sideinner.png"
            width={400}
            height={300}
            alt="Additional Room Inspiration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
