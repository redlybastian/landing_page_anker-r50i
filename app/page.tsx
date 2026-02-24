import Image from "next/image";

export default function Home() {
  return (
    <>
   <header>
    <img className="w-6 m-4 md:hidden"  sizes="20px" src="hamburger.png" alt="nav-button" />
    
    <nav className=" flex  justify-center w-full h-14   mt-5">
        
      <ul className="hidden md:flex justify-center items-center rounded-2xl gap-8 font-bold text-sm  w-1/2 bg-taupe-50 shadow ">
     
            <li className="cursor-pointer hover:text-[#0986FA]">Products</li>
            <li className="cursor-pointer hover:text-[#0986FA]">Tech</li>
            <li className="cursor-pointer hover:text-[#0986FA]">Support</li>
          </ul>   
    </nav>
   </header>
  <main className="max-w-7xl mx-auto px-6">
        {/* Banner Section: Stacked on mobile, 2 columns on large screens */}
        <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:min-h-[80vh] py-10">
          
          {/* Text Content Block */}
          <div className="lg:w-1/2 lg:text-left text-center">
            <h1 className="mt-5 mb-3 text-4xl lg:text-7xl font-bold">
              <span className="text-[#0986FA]">Anker</span> Soundcore <span className="text-[#18A7FF]">R50i NC</span>
            </h1>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
              Silence the <span className="text-[#0986FA]">Noise</span>,<br />
              <span className="bg-gradient-to-r from-[#1A688F] to-[#F61DEF] bg-clip-text text-transparent">Power</span> Your Sound.
            </h2>
            
            {/* Desktop Description: Moved closer to the title on big screens */}
            <p className="mt-6 font-bold text-gray-700 max-w-md mx-auto lg:mx-0">
              Experience 42dB Adaptive ANC, 
              <span className="bg-gradient-to-r from-[#1A688F] to-[#F61DEF] bg-clip-text text-transparent ml-1"> 45-hour battery</span> life. 
              Get yours delivered in 4-5 working days.
            </p>

            <div className="flex justify-center lg:justify-start mt-8">
              <button className="px-10 py-4 bg-black rounded-2xl text-white text-sm font-bold hover:scale-105 transition-transform">
                BUY NOW
              </button>
            </div>
          </div>

          {/* Image Block */}
          <div className="flex justify-center lg:w-1/2 mt-10 lg:mt-0">
            <Image 
              src='/Anker-R50i-NC-white_img1-removebg.png'
              width={500} // Increased for desktop
              height={450}
              alt="Anker Soundcore R50i NC Earbuds" 
              className="w-full max-w-[320px] lg:max-w-[500px] h-auto object-contain"
              priority
            />
          </div>
        </section>
        {/* product description */}
        <section>
          <div>
            <h2 className="text-3xl text-center lg:text-5xl font-bold leading-tight"><span  className="text-[#0986FA]">Anker</span> Soundcore <span className="text-[#18A7FF]">R50i NC</span> The Ultimate Wireless Upgrade</h2>
            <h3 className="text-2xl mt-6 text-center lg:text-4xl font-bold leading-tight">Adaptive ANC <span className="bg-gradient-to-r from-[#1A688F] to-[#F61DEF] bg-clip-text text-transparent">45H Playtime </span> AI-Enhanced Calls</h3>
          </div>
          <div className="mt-10 ">
      <div className="mt-10 px-6 max-w-7xl mx-auto">
  {/* The Grid Container: 1 col on mobile, 2 cols on desktop */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    
    {/* Card 1 */}
    <div className="border-3 border-[#0986FA]  p-7 rounded-2xl hover:border-[#1A688F] transition-colors">
      <h4 className="text-center text-xl mb-4 text-[#0986FA] font-bold">Audio & Silence</h4>
      <p className="text-center font-bold text-sm lg:text-base">
        Adaptive ANC: Intelligently reduces background noise by up to 42dB.<br/>
        Driver Tech: 10mm dynamic drivers paired with BassUp™.<br/>
        Transparency Mode: Stay aware of your surroundings.
      </p>
    </div>

    {/* Card 2 */}
    <div className="border-3 border-[#0986FA]   p-7 rounded-2xl hover:border-[#1A688F] transition-colors">
      <h4 className="text-center text-xl mb-4 text-[#0986FA] font-bold">Power & Endurance</h4>
      <p className="text-center font-bold text-sm lg:text-base">
        Single Charge: Up to 10 hours.<br/>
        Total Playtime: <span className="bg-gradient-to-r from-[#1A688F] to-[#F61DEF] bg-clip-text text-transparent">45 hours</span> with case.<br/>
        Fast Charge: 10 mins = 2 hours.
      </p>
    </div>

    {/* Card 3 */}
    <div className="border-3 border-[#0986FA]   p-7 rounded-2xl hover:border-[#1A688F] transition-colors">
      <h4 className="text-center text-xl mb-4 text-[#0986FA] font-bold">Connectivity & Calls</h4>
      <p className="text-center font-bold text-sm lg:text-base">
        AI-Enhanced Calls: 4-Microphone system.<br/>
        Bluetooth 5.4: Ultra-stable pairing.<br/>
        Gaming Mode: Ultra-low latency via Soundcore App.
      </p>
    </div>

    {/* Card 4 */}
    <div className="border-3 border-[#0986FA]  p-7 rounded-2xl hover:border-[#1A688F] transition-colors">
      <h4 className="text-center text-xl mb-4 text-[#0986FA] font-bold">Build & Durability</h4>
      <p className="text-center font-bold text-sm lg:text-base">
        Water Resistance: IP54 rating.<br/>
        Comfort Fit: 3 sizes of ear tips (S/M/L).<br/>
        Controls: Intuitive touch panels.
      </p>
    </div>

  </div>
</div>
             
      </div>

        </section>
        <section>
          <div>
            <h3>
              <span>Premium</span>   <span>Zero</span>
            </h3>
          </div>
        </section>
      </main>
    </>
  );
}
