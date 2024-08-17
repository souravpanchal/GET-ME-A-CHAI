/* eslint-disable @next/next/no-img-element */
// import React from 'react'

// const About = () => {
//   return (
//     <div className='container mx-auto px-4 py-8'>
//         About page on get me a chai using Tailwind CSS and Next.js
//         <h1 className='text-xl'>About</h1>
//     </div>
//   )
// }

// export default About

// export const metadata = {
//   title: "About - Get Me A Chai",
// }





import React from 'react';

const AboutUs = () => {
  const teamMembers = [
    { id: 1, name: 'John Doe', role: 'CEO', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiI_RfdLXjiWLDDLVHr7-L7C375J3htMSd6ks6scQ_Fi8PQSWeEbiu27ukOs4sFXOmf2I&usqp=CAU' },
    { id: 2, name: 'Jane Smith', role: 'CTO', imageUrl: 'https://media.istockphoto.com/id/1289461335/photo/portrait-of-a-handsome-black-man.jpg?s=612x612&w=0&k=20&c=gDibbpmkeV04ta3ociwAgpqcjdeU5sI1nnd78wrnz-g=' },
    { id: 3, name: 'Alice Johnson', role: 'CFO', imageUrl: 'https://t4.ftcdn.net/jpg/05/35/49/09/360_F_535490924_ntlR1s9x6bRVV3TkgrGMJRgOvQ2YeGfW.jpg' },
    { id: 4, name: 'Bob Brown', role: 'CMO', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXbwjKYGcgk0rdOWJKMwYRVMbGn_gBUV8e4lHiC8CU5jQD0gn0ljPKgAErVS2pvwQr744&usqp=CAU' },
    { id: 5, name: 'Charlie Davis', role: 'COO', imageUrl: 'https://d2779tscntxxsw.cloudfront.net/669fdd3f32ec0.png?width=1200&quality=80' },
    { id: 6, name: 'Eve Martinez', role: 'HR Manager', imageUrl: 'https://i.pinimg.com/736x/5c/94/f0/5c94f01fa23384ee190cfc09d9400499.jpg' },
  ];

  return (
    <><div className="min-h-screen  bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]  py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold   text-gray-400 text-center mb-12">Meet Our Team</h2>
        <p className="text-lg  text-slate-300 text-center mb-12">
          Our team is comprised of dedicated professionals who work tirelessly to bring you the best service. Each member brings a unique set of skills and experiences to the table, contributing to our success and growth.
        </p>
        <div className="grid  gap-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white bg-opacity-15 shadow-lg rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="relative group">
                <div className="flex flex-col  items-center">
                  <img
                    className="w-24 h-24 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-50 group-hover:-translate-y-8"
                    src={member.imageUrl}
                    alt={member.name} />
                  <div className="text-center mt-2  group-hover:mt-12 transition-all duration-300 ease-in-out">
                    <h3 className="text-xl font-bold text-gray-300">{member.name}</h3>
                    <p className="mt-1 text-gray-500">{member.role}</p>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-opacity-45  flex flex-col items-center justify-center p-4 bg-slate-500 transform scale-0 group-hover:scale-100 group-hover:translate-y-6 transition-transform duration-300 ease-in-out">
                  <p className="text-slate-100 p-4 rounded-md shadow-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae ligula vestibulum aliquet.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* docks */}
        <div className="absolute p-36 left-1/2 transform -translate-x-1/2 flex space-x-4">
  <div className="bg-gray-800 text-white p-4 rounded-full shadow-lg transform transition-transform duration-300 hover:translate-y-[-24px] hover:scale-125 cursor-pointer">
    <span className="text-xs"><img className='w-10'src="   https://cdn-icons-png.flaticon.com/512/1384/1384065.png " alt="" /></span>
  </div>
  <div className="bg-gray-800 text-white p-4 rounded-full shadow-lg transform transition-transform duration-300 hover:translate-y-[-24px] hover:scale-125 cursor-pointer">
    <span className="text-xs"><img className='w-10' src="      https://cdn-icons-png.flaticon.com/512/3128/3128304.png" alt="" /></span>
  </div>
  <div className="bg-gray-800 text-white p-4 rounded-full shadow-lg transform transition-transform duration-300 hover:translate-y-[-24px] hover:scale-125 cursor-pointer">
    <span className="text-xs"><img className='w-10' src="   https://cdn-icons-png.flaticon.com/512/4423/4423697.png " alt="" /></span>
  </div>
  <div className="bg-gray-800 text-white p-4 rounded-full shadow-lg transform transition-transform duration-300 hover:translate-y-[-24px] hover:scale-125 cursor-pointer">
    <span className="text-xs"><img className='w-10' src=" https://cdn-icons-png.flaticon.com/512/1077/1077042.png " alt="" /></span>
  </div>
  <div className="bg-gray-800 text-white p-4 rounded-full shadow-lg transform transition-transform duration-300 hover:translate-y-[-24px] hover:scale-125 cursor-pointer">
    <span className="text-xs"><img className='w-10' src="   https://cdn-icons-png.flaticon.com/512/179/179309.png " alt="" /></span>
  </div>
  <div className="bg-gray-800 text-white p-4 rounded-full shadow-lg transform transition-transform duration-300 hover:translate-y-[-24px] hover:scale-125 cursor-pointer">
    <span className="text-xs"><img className='w-10' src="  https://cdn-icons-png.flaticon.com/512/2504/2504923.png" alt="" /></span>
  </div>
</div>


      </div>
    </div>
      <div className="para mt-44 mx-10  bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]  border-1px-solid bg-opacity-10  rounded-lg opacity-25 hover:opacity-80 bg-slate-500">Le magasin de thé le plus célèbre dInde a été créé en 1981 par le maître dégustateur de thé Sanjay Kapur à Darya Ganj, près de 
        emblématique Fort Rouge. Les clients peuvent profiter de la dégustation de thé gratuite proposée et déguster la meilleure sélection de thés indiens de Darjeeling, Assam, Nilgiri, Kangra, Sikkim et Munnar. Nos thés sont emballés dans des sacs en tissu ethnique indien qui constituent d excellents souvenirs ainsi que des cadeaux parfaits.Des
         décennies plus tard, SANCHA, Aap Ki Pasand Tea est une marque établie au Japon, en Corée et en Russie pour nen nommer que quelques pays. La marque SANCHA connue pour son thé de haute qualité en Inde et à létranger. Au service des thés les plus fins et les plus frais dInde depuis 3 générations. RécompensesCité comme portant les « sélections de
          thés les plus raffinées au monde... » Par le magazine Time Guide des affaires et des loisirs des produits asiatiques Thés noirs Darjeeling (thés First, Second et Autumn Flush), thés noirs Assam, thés noirs Nilgiri, Masala Chai, thés verts , Thés verts aromatisés naturellement, Thés Oolong, Thés blancs, Coffrets de thés cadeaux d entreprise, Gamme de sachets de thé.</div>

      <div className="comp mx-10 py-32">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas corporis illo tenetur impedit aspernatur nulla molestiae id expedita, ipsam unde, excepturi alias? Corrupti blanditiis tempora nihil ducimus voluptatibus iusto sit! Repudiandae, rem?</div>
      

      <div class="relative group mt-10 bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]   mx-28 mb-96 rounded-lg">
  
  <div class="w-full h-14 rounded-md font-bold  cursor-pointer absolute mb-14   left-0 bg-purple-500 bg-opacity-20 text-white flex items-center justify-center transition-all duration-500 ease-in-out  transform group-hover:h-full">
   Description
  </div>

  
  <div class="absolute     transition  bg-opacity-15   mt-8   inset-x-0 mx-10 py-10 hidden group-hover:flex justify-around  bg-gray-500 p-4">
    <div class="bg-purple-400 bg-opacity-15 shadow-lg p-4 rounded-md">
      <h4 class="font-bold  ml-24">1</h4>
      <p className='text-slate-300'>We provide you best cup of tea.</p>
    </div>
    <div class="bg-purple-400 bg-opacity-15 shadow-lg p-4 rounded-md">
      <h4 class="font-bold  ml-24">2</h4>
      <p className='text-slate-300'> We provide you best cup of coffee.</p>
    </div>
    <div class="bg-purple-400 bg-opacity-15 shadow-lg p-4 rounded-md">
      <h4 class="font-bold  ml-24">3</h4>
      <p className='text-slate-300' >All payaments methods available.</p>
    </div>
    <div class="bg-purple-400 bg-opacity-15 shadow-lg p-4 rounded-md">
      <h4 class="font-bold  ml-24">4</h4>
      <p className='text-slate-300' >We have supportive staff.</p>
    </div>
  </div>
</div>


<div class="relative mx-auto  rounded-full mb-10 group w-64 h-64  bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]  bg-gray-200 overflow-hidden">


        <div class="absolute  overflow-hidden object-contain  flex ">
          <p class=" overflow-hidden object-fit text-gray-700"><img className='h-64 w-64' src="https://assets3.thrillist.com/v1/image/2830175/1200x600/scale;;webp=auto;jpeg_quality=85.jpg" alt="" /></p>
        </div>


        <div class="absolute   left-0 w-full h-0 bg-slate-500 bg-opacity-50 text-white flex items-center justify-center transition-all duration-500 ease-in-out transform group-hover:h-full">
          <p class="p-4 justify-center items-center mb-16"><img className='w-10 mx-auto' src=" https://cdn-icons-png.flaticon.com/512/870/870092.png" alt="" /> Thanks for visiting our website</p>
        </div>
      </div>


    </>
  );
};


export default AboutUs;


//  bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]


