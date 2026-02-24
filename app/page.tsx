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
          <div className="mt-10">
            <h3 className="text-2xl mt-6 text-center lg:text-4xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#1A688F] to-[#F61DEF] bg-clip-text text-transparent ml-1">Premium</span> Sound.  <span className="text-[#0986FA]">Zero</span><br />Distractions
            </h3>
          </div>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="w-[90%] relative h-[300px] lg:h-[450px]">
                  <Image fill src="/ANKER-Soundcore-R50i-NC-ANC-img3.webp" alt="Anker Soundcore R50i NC noise cancelling technology visualization" />
            </div>
            <div className="mt-5 relative w-[90%] h-[300px] lg:h-[450px]">
            <Image  fill src="/ANKER-Soundcore-R50i-NC-Battery-image2.webp" alt="Anker Soundcore R50i NC 45-hour battery life infographic"/>

            </div>
          </div>
        </section>
      </main>

      
      <footer className="mt-20 rounded-t-[3rem] bg-gradient-to-b from-[#2A73C7] to-[#F5FEFF] pt-16 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Top Section: Form + Links */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Review Form */}
            <div className="bg-white/20 p-8 rounded-3xl backdrop-blur-sm">
              <h5 className="text-2xl font-bold text-white mb-2">Add a review</h5>
              <p className="text-white/80 mb-6">Review now to get a coupon!</p>
              
              <form className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label className="text-white font-medium mb-1">Your review*</label>
                  <textarea className="p-3 bg-white/90 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none" rows={3}></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="text-white font-medium mb-1">Name*</label>
                    <input className="p-3 bg-white/90 rounded-xl outline-none" type="text" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white font-medium mb-1">Email*</label>
                    <input className="p-3 bg-white/90 rounded-xl outline-none" type="email" />
                  </div>
                </div>
                
                <button className="mt-2 px-8 py-3 bg-black text-white rounded-xl font-bold self-start hover:bg-gray-800 transition-colors">Submit Review</button>
              </form>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h5 className="text-xl font-bold mb-4">Categories</h5>
                <ul className="space-y-2 text-sm">
                  <li className="cursor-pointer hover:underline">Earbuds</li>
                  <li className="cursor-pointer hover:underline">Neckbands</li>
                  <li className="cursor-pointer hover:underline">Headphones</li>
                </ul>
              </div>
              <div>
                <h5 className="text-xl font-bold mb-4">Policies</h5>
                <ul className="space-y-2 text-sm">
                  <li className="cursor-pointer hover:underline">Terms</li>
                  <li className="cursor-pointer hover:underline">Privacy</li>
                  <li className="cursor-pointer hover:underline">Returns</li>
                </ul>
              </div>
              <div>
                <h5 className="text-xl font-bold mb-4">Shortcuts</h5>
                <ul className="space-y-2 text-sm">
                  <li className="cursor-pointer hover:underline">Account</li>
                  <li className="cursor-pointer hover:underline">Shop</li>
                  <li className="cursor-pointer hover:underline">Cart</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-blue-300 text-center">
            <p className="text-xs font-medium text-gray-700">EARPHONES.LK © 2019-2026 PREMIUM E-COMMERCE SOLUTIONS.</p>
          </div>
        </div>
      </footer>
    </>
  );
}