import Carousel from "./Carousel";

export default function Hero() {
    return (
        <div className="h-[33rem]">
            <div className="bg-[url('/img/hero_bg.png')] h-3/5 flex justify-center">
                <div className="text-white flex items-center justify-center -mt-32">
                    <span className="md:text-8xl text-7xl font-bold mr-3">#</span>
                    <span className="md:text-4xl text-3xl font-bold">Berani Bicara <br/> Siaran Baik</span>
                </div>
            </div>
            <div className="-mt-52">
                <Carousel />
            </div>
        </div>
    )
}