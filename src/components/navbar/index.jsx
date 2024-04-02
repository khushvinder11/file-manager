import React from "react";
import { IconBellPlus, IconSearch } from '@tabler/icons-react';
import Link from "next/link";



const Navbar = ({isMenu, setIsMenu}) => {
  const renderButtons = () => { return(
    <>
     <button onClick={() => {
            const payload = isMenu === "show" ? "hidden" : "show"
            setIsMenu(payload)}
            } id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" className="text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2  focus:ring-gray-100 rounded">
            <svg id="toggleSidebarMobileHamburger" className={`w-6 h-6 ${isMenu === "show" ? "hidden" : "show"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            </svg>
            <svg id="toggleSidebarMobileClose" className={`w-6 h-6 ${isMenu}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </button>
    </>
  )}
  return <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
    <div className="px-3 py-3 lg:px-5 lg:pl-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-3">
         {renderButtons()}
          <Link href="#" className="text-xl font-bold flex items-center">
            <img src="https://macsnh.org/wp-content/uploads/2019/08/demo-logo-black.png" className="h-6 mr-2" alt="Windster Logo" />
          </Link>
          </div>
          <div className="flex gap-5 items-center">
          <IconSearch stroke={1.5} size={20} className="text-gray-900"/>
          <IconBellPlus stroke={1.5} size={20} className="text-gray-900"/>
          <img src="https://thumbs.dreamstime.com/b/photo-young-happy-cheerful-excited-positive-good-mood-afro-girl-white-blouse-isolated-blue-color-background-223427564.jpg" alt="https://thumbs.dreamstime.com/b/photo-young-happy-cheerful-excited-positive-good-mood-afro-girl-white-blouse-isolated-blue-color-background-223427564.jpg"  className="w-[34px] h-[34px] rounded-full object-cover"/>
        </div>
        </div>
      </div>
    </div>
  </nav>
}

export default Navbar