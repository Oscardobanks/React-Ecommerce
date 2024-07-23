import ps5Console from "../assets/ps5-slim-goedkope-playstation_large 1.png";
import perfume from "../assets/perfume.png";
import woman from "../assets/woman.png";
import speaker from "../assets/speaker.png";

const NewArrivals = () => {
  return (
    <div>
      <div className="mt-28">
        <div className="flex items-center gap-2">
          <span className="bg-red-700 rounded ps-2 pe-1 py-3 pt-4"></span>
          <span className="text-red-600 text-sm font-semibold">Featured</span>
        </div>
        <div className="mt-2">
          <div className="flex gap-10">
            <p className="text-3xl font-bold">New Arrival</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-10">
        <div className="bg-black pt-16 relative">
          <img src={ps5Console} alt="Product" className="w-96 mx-auto" />
          <div className="absolute bottom-5 left-3 flex flex-col gap-2 px-2 py-2 text-white">
            <p className="text-2xl font-semibold">PlayStation 5</p>
            <p className="text-sm font-normal w-2/3">
              Black and White version of the PS5 coming out on sale.
            </p>
            <p className="text-base border-b w-fit">Shop Now</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-[#0D0D0D] flex justify-between items-end relative">
            <div className="sm:relative absolute bottom-5 left-3 flex flex-col gap-2 ps-5 pb-5 text-white">
              <p className="text-2xl font-semibold">Women&#39;s Collections</p>
              <p className="text-sm font-normal">
                Featured woman collections that give you another vibe.
              </p>
              <p className="text-base border-b w-fit">Shop Now</p>
            </div>
            <img src={woman} alt="Product" className="w-80 h-52" />
          </div>

          <div className="flex sm:flex-row flex-col gap-4">
            <div className="bg-black py-4 relative w-full">
              <img src={speaker} alt="Product" className="mx-auto h-48" />
              <div className="absolute bottom-5 left-3 flex flex-col px-2 text-white">
                <p className="text-2xl font-semibold">Speakers</p>
                <p className="text-sm font-normal">
                  Amazon wireless speakers
                </p>
                <p className="text-base border-b w-fit">Shop Now</p>
              </div>
            </div>
            <div className="bg-black py-4 relative w-full">
              <img src={perfume} alt="Product" className="mx-auto h-48" />
              <div className="absolute bottom-5 left-3 flex flex-col  px-2 text-white">
                <p className="text-2xl font-semibold">Perfume</p>
                <p className="text-sm font-normal">
                  GUCCI INTENSE OUD EDP
                </p>
                <p className="text-base border-b w-fit">Shop Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
