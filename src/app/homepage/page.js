import Image from "next/image"

export default function HomePage() {
    return (
        <div>
            <div className="relative">

                <Image src="Background.svg" width={2500}
                    height={500} />
                <div className=" flex absolute top-80 left-25% justify-center items-center ">
                    {/* <div className=""> <Image src="airplane.svg" width={300}
                        height={300} /> </div> */}
                    {/* <div className="bg-slate-500 h-300 w-300">
                        <span></span>
                        <p>Cheap Airline Tickets Great Ways To Save</p>
                        <p>In this digital generation where information can be easily obtained within seconds, business cards ...</p>
                    </div> */}
                </div>
            </div>
            <div className=" mx-20">
                <span className="font-bold text-4xl text-[#183B56]">Popular Articles</span>
                <div className="flex justify-between mt-4">
                    <p className="text-[#5A7184] leading-8	w-100">We share common trends, strategies ideas, opinions, short & long stories from the team behind company</p>
                    <div className="flex items-center rounded border border-solid border-[#1565D8] px-2"><span className=" rounded text-[#1565D8] flex ">View All <Image src="arrow-right.svg" alt="view-icon" width={15} height={15} className="ml-2" /></span>  </div>
                </div>
            </div>

        </div>
    )
}