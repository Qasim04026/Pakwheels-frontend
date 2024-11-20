import React from "react";
 import Link from "next/link";

export default function Features(){
   return(

<div className="flex flex-col bg-gray-200" >
<div >
  <div className=" w-80 ">
<h1 className="text-3xl py-5 px-7 font-bold text-blue-900">Features New Cars</h1>
</div>
  
   <div className="w-96 flex justify-center items-center">
   <ul className="flex flex-row  items-start space-x-8 px-6 py-5 sm:flex-row" >
                        <li><Link href="/Populer" className="hover:font-bold mb-2 pb-2 rounded-md text-1xl font-medium">Popular</Link></li>
                        <li><Link href="/Upcoming" className=" hover:font-bold mb-2 pb-2 rounded-md text-1xl font-medium">Upcoming</Link></li>
                        <li><Link href="/NewlyLaunched" className=" hover:font-bold mb-2 pb-2 rounded-md text-1xl font-medium">Newly Launched</Link></li>
                    </ul>
    
    </div> 

</div>

{/* car 1 */}
{/* <div className="flex px-10 items-center gap-2 bg-gray-200 w-full h-96  "> */}
<div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-y-1- gap-x-14 mt-10 mb-5" >
<div className=" px-2 h-96 w-72">
<Link href="/CarOne">
<img src="https://cache1.pakwheels.com/system/car_generation_pictures/5361/medium/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674"
alt="car"
className="cursor-pointer w-60 items-center h-64"/>

</Link>
<h2 className="flex justify-center hover:text-blue-600 font-bold text-2xl px-4 text-blue-800">Tyota Carola</h2>
<p className= "flex justify-center text-green-500">PKR 75.5 lacs</p>
<div className="flex justify-center text-2xl  text-yellow-500 mr-2">
    {'★★★★★'}
</div>
</div>

{/* car two */}
<div className=" px-2 h-96 w-72">
<Link href="/CarTwo">
<img src="https://cache4.pakwheels.com/system/car_generation_pictures/7335/original/Fortuner_-_PNG.png?1677568997"
alt="car"
className="cursor-pointer w-60 items-center h-64"/>
</Link>
<h2 className="flex justify-center hover:text-blue-600 font-bold text-2xl px-4 text-blue-800">Toyota Fortuner</h2>
<p className= "flex justify-center text-green-500">PKR 1.99 crore</p>
<div className="flex justify-center text-2xl text-yellow-500 mr-2">
    {'★★★★☆'}
</div>
</div>
{/* car three */}
<div className=" px-2 h-96 w-72">
<Link href="/CarThree">
<img src="https://cache1.pakwheels.com/system/car_generation_pictures/6008/original/Land_Cruiser_300_-_PNG.png?1635484577"
alt="car"
className="cursor-pointer w-60 items-center h-64"/>
</Link>
<h2 className="flex justify-center hover:text-blue-600 font-bold text-2xl px-4 text-blue-800">Toyota Cruiser</h2>
<p className= "flex justify-center text-green-500">PKR 63.2 Lacs</p>
<div className="flex justify-center text-2xl text-yellow-500 mr-2">
    {'★★★★☆'}
</div>
</div>


{/* car 4 */}
<div className="px-2 h-96 w-72">
<Link href="/CarFour">
<img src="https://cache3.pakwheels.com/system/car_generation_pictures/7721/original/Yaris.png?1716536903"
alt="car"
className="cursor-pointer w-60 items-center h-64"/>
</Link>
<h2 className="flex justify-center hover:text-blue-600 font-bold text-2xl px-4 text-blue-800">Toyota Yaris</h2>
<p className= "flex justify-center text-green-500">PKR 63.2 lacs</p>
<div className="flex justify-center text-2xl text-yellow-500 mr-2">
{'★★★☆☆'}
</div>
</div>












</div>




    </div>
   )
  }