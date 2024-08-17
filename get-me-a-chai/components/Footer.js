import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    
        <footer className='bg-gray-800 text-white flex items-center justify-center px-4 h-16'>
            <p className='text-center'>Copyright &copy; {currentYear} Get me A Chai - All rights resserved!</p>
        </footer>
   
  )
}

export default Footer