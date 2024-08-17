/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 text-white items-center h-[44vh] px-5 md:px-0 text-xs md:text-base">
        <div className="font-bold flex gap-6 md:gap-20 md:text-5xl justify-center items-center text-3xl">Buy Me a Chai
          <span><img className="" src="/tea.gif" width={88} alt="" /></span>
        </div>
        <p className="text-center md:text-left">A crowdfunding platform for creators. Get funded by your fans and followers.Start now!</p>
        <div>
          <Link href={"/login"}>
          <button type="button" className="text-white bg-gradient-to-r  transform hover:-translate-y-2 transition duration-300   from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          </Link>
          <Link href={"/about"}>
          <button type="button" className="text-white bg-gradient-to-r  transform hover:-translate-y-2 transition duration-300   from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
          </Link>

        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>


      <div className="text-white container mx-auto pb-32 pt-14 px-10">
        <h2 className="text-3xl font-bold text-center mb-14 ">Your fans can buy you a Chai...</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className=" rounded-full p-2 text-gray-100" width={88} src="/man.png" alt="" />
            <p className="bg-slate-500 rounded-full bg-opacity-35 font-bold text-center">Fun friends want to help</p>
            <p className="text-center">Yours fans are available for you to help you.</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="  p-1 text-gray-100" width={200} src="/coin.gif" alt="" />
            <p className="bg-slate-500 rounded-full bg-opacity-35 font-bold text-center">Fun friends want to help</p>
            <p className="text-center">Yours fans are available for you to help you.</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-600 bg-opacity-15 rounded-full p-6 text-slate-900" width={150} src="/Meeting.gif" alt="" />
            <p className="bg-slate-500 rounded-full bg-opacity-35 font-bold text-center">Fun friends want to help</p>
            <p className="text-center">Yours fans are available for you to help you.</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14 ">Learn more about us</h2>

        <div className="w-[90%] h-[90vh] md:w-[50%] md:h-[100%] lg:w-[50%] lg:h-[80vh] xl:w-[50%] xl:h-[80vh] flex flex-col gap-8 ">
       <iframe className="h-64 w-auto"  src="https://www.youtube.com/embed/XUBeH7VQaFY?si=4N0L5qenoodOpq7H" title="YouTube video player" frameBorder="0" allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
       
       <iframe className="h-64 w-auto" src="https://www.youtube.com/embed/3zBcpK52ZSM?si=0G17mgOAnC3tUZ7v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
        encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </>
  );
}
