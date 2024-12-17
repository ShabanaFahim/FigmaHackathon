import Image from "next/image";

export default function SubHero() {
    return (
        <div className="mt-12 px-8 max-w-screen-xl mx-auto"> {/* Centered and aligned */}
            <div className="subText text-center mb-8">
                <h3 className="text-3xl font-bold">Browse The Range</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="imgArea flex justify-between gap-8"> {/* Adjusted alignment */}
                <div className="imgOne text-center">
                    <Image src="/dining.png" alt="Dining" width={381} height={480} />
                    <h6 className="mt-4 mb-4 text-xl">Dining</h6>
                </div>
                <div className="imgTwo text-center">
                    <Image src="/living.png" alt="Living" width={381} height={480} />
                    <h6 className="mt-4 mb-4 text-xl">Living</h6>
                </div>
                <div className="imgThree text-center">
                    <Image src="/bedroom.png" alt="Bedroom" width={381} height={480} />
                    <h6 className="mt-4 mb-4 text-xl">Bedroom</h6>
                </div>
            </div>
        </div>
    );
}
