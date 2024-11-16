export default function Home() {
    return (
     
      <div className="flex py-4 pb-4 justify-center bg-white">
     
        <div className="w-full max-w-4xl gap-4">
          <h1 className="py-1 font-bold text-center mb-8 text-4xl w-full text-blue-900 ">
            Sell Your Car on PakWheels and Get the Best Price
          </h1>
  {/* <div className="flex items-center flex-row justify-center gap-8">
   */}
   <div className="min-h-96 flex-col bg-white">
          <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-1 gap-x-14 mt-10 mb-5">
  
            <div className=" bg-white text-left">
              <h1 className="text-9x6 font-semibold mb-5 text-blue-800">Post your Ad on PakWheels</h1>
              <ul className="text-gray-800 space-y-2 w-full">
                <li className="whitespace-nowrap">✔ Post your Ad for Free in 3 Easy Steps</li>
                <li className="whitespace-nowrap">✔ Get Genuine offers from Verified Buyers</li>
                <li className="">✔ Sell your car Fast at the Best Price</li>
              </ul>
              <button className="mt-4  bg-red-700 hover hover:bg-red-900 text-white px-6 py-3 rounded-lg">
                Post Your Ad
              </button>
            </div>
            <div className="flex flex-col items-center px-11 bg-white ">
              <div className="w-px h-20 flex justify-center bg-gray-600 mb-2"></div>
              <span className="text-gray-800 font-semibold -scroll-mb-10">OR</span>
              <div className="w-px h-20 bg-gray-600 mb-2" ></div>
            </div>
  
  
            <div className=" text-left bg-white">
              <h1 className="text-9x6 font-semibold mb-5 text-blue-800">Try PakWheels Sell It For Me</h1>
              <ul className="text-gray-700 space-y-2 w-full">
                <li className="whitespace-nowrap">✔ Dedicated Sales Expert To Sell Your Car</li>
                <li className="whitespace-nowrap">✔ We Bargain For You And Share The Best Offer</li>
                <li className="whitespace-nowrap">✔ We Ensure Safe & Secure Transaction</li>
              </ul>
              <button className="mt-4 bg-blue-700 hover:bg-blue-900 text-white px-6 py-3 rounded-lg">
                Register Your Car
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
  