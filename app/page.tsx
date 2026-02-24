import Image from "next/image";

export default function Home() {
  return (
    <>
   <header>
    <nav>
      <img className="w-6 m-4" sizes="20px" src="hamburger.png" alt="nav-button" />      
    </nav>
   </header>
   <main>
    {/* banner section */}
    <section className="">
      <h1 className="text-center mt-10 ml-10 mr-10 mb-3 text-4xl font-bold"><span className="text-[#0986FA]">Anker</span> Soundcore <span className="text-[#18A7FF]">R50i NC</span></h1>
      <h2 className="text-center  text-3xl font-bold">Silence the <span className="text-[#0986FA]">Noise</span>,<br /><span className="bg-gradient-to-r from-[#1A688F] to-[#F61DEF] bg-clip-text text-transparent">Power</span> Your Sound.</h2>
      <div className="flex justify-center mt-10">
        <Image src={'/Anker-R50i-NC-white_img1-removebg.png'}
        width={320}
        height={300}
        alt="Anker-R50i-NC-white-colombo" 
        priority
         />
      
      </div>
      <div className="flex justify-center mt-5">
         <button className="m-5 pt-5 pb-5 pl-7 pr-7 bg-black rounded-2xl text-white text-xs font-bold cursor-pointer">BUY NOW</button>
       
      </div>
        <p className="text-center mr-10 ml-10 font-bold">Experience 42dB Adaptive ANC, <span>45-hour battery</span>  life, and AI-clear calls. Get yours delivered in 4-5 working days.</p>
      
    </section>
   </main>
    </>
  );
}
