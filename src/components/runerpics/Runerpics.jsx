import "./Runerpics.css";

function Runerpics() {
  return (
    <>
      <div className="runer_bgimg relative flex h-[60vh] min-h-[500px] items-center justify-end bg-cover bg-fixed bg-center  text-white">
        {/* Overlay */}
        <div className="relative flex h-screen items-center justify-start bg-black bg-opacity-0 px-4 text-center text-white sm:px-10 lg:px-20">
          <div className="space-y-4">
            {/* Subtitle */}
            <p className="text-lg font-semibold text-lime-400">
              NEW FOR YOU: BOLDER. FASTER. STRONG.
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold uppercase lg:text-6xl">
              We Run, We Rise
            </h1>

            {/* Tagline */}
            <p className="text-md lg:text-lg">
              See why discover makes every mile count
            </p>

            {/* Button */}
            <div className="flex justify-center">
              <button className="mt-4 transform rounded-md bg-white px-6 py-3 text-sm font-semibold uppercase text-black transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-lime-400">
                Top Picks for Runner
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Runerpics;
