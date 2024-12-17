import Image from "next/image";

export default function FurnitureSection() {
  return (
    <div className="furnitureSection bg-white py-12">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h3 className="text-gray-600 text-lg font-medium">Share your setup with</h3>
        <h2 className="text-4xl font-extrabold text-black mt-2">#FuniroFurniture</h2>
      </div>

      {/* Image Grid */}
      <div className="flex justify-between gap-4 px-4 max-w-screen-xl mx-auto">
        {/* Left Section */}
        <div className="flex flex-col gap-4">
          {/* Row 1 */}
          <div className="flex gap-4">
            {/* Image 1 */}
            <div className="w-[78px] h-[382px]">
              <Image
                src="/grid-1.png"
                width={78}
                height={382}
                alt="Setup 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Image 2 - Lower than Image 1 */}
            <div className="relative top-10 w-[451px] h-[382px]">
              <Image
                src="/grid-2.png"
                width={451}
                height={382}
                alt="Setup 2"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex gap-4">
            {/* Image 6 */}
            <div className="w-[185px] h-[323px]">
              <Image
                src="/grid-6.png"
                width={185}
                height={323}
                alt="Setup 6"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Image 7 */}
            <div className="w-[344px] h-[242px]">
              <Image
                src="/grid-7.png"
                width={344}
                height={242}
                alt="Setup 7"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Middle Section - Image 3 Alone */}
        <div className="flex items-center justify-center">
          <div className="w-[295px] h-[392px]">
            <Image
              src="/grid-3.png"
              width={295}
              height={392}
              alt="Setup 3"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4">
          {/* Row 1 - Images 4 and 5 */}
          <div className="flex gap-4">
            {/* Image 4 */}
            <div className="relative top-10 w-[290px] h-[348px]">
              <Image
                src="/grid-4.png"
                width={290}
                height={348}
                alt="Setup 4"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Image 5 - Higher than Image 4 */}
            <div className="relative -top-10 w-[262px] h-[433px]">
              <Image
                src="/grid-5.png"
                width={262}
                height={433}
                alt="Setup 5"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Row 2 - Images 8 and 9 */}
          <div className="flex gap-4">
            {/* Image 8 */}
            <div className="w-[178px] h-[242px]">
              <Image
                src="/grid-8.png"
                width={178}
                height={242}
                alt="Setup 8"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Image 9 */}
            <div className="w-[258px] h-[196px]">
              <Image
                src="/grid-9.png"
                width={258}
                height={196}
                alt="Setup 9"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
