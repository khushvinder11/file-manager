import React from "react";
import { IconBasket, IconSettings, IconFiles, IconClock, IconFileTypeDoc, IconPhoto, IconTrack } from '@tabler/icons-react';
import Link from "next/link";
import { mainMenu } from "../../data/data.js"
import { IconPlus, IconChevronDown } from '@tabler/icons-react';

const SideBar = ({ isMenu }) => {
  const renderIcon = (icon) => {
    switch (icon) {
      case "allfiles":
        return <IconFiles stroke={2} size={16} />;
      case "recent":
        return <IconClock stroke={2} size={16} />;
      case "docs":
        return <IconFileTypeDoc stroke={2} size={16} />;
      case "photos":
        return <IconPhoto stroke={2} size={16} />;
      case "trash":
        return <IconTrack stroke={2} size={16} />;
      default:
        return null; //
    }
  }

  return <aside id="sidebar" className={`fixed ${isMenu} z-20 h-full top-0 left-0 pt-16 flex-shrink-0 flex-col w-64 transition-width duration-75 pb-5`} aria-label="Sidebar">

    <div className="bg-[#F8F8FA] px-2 py-3 w-[89%] flex justify-between items-center mx-auto mt-4 rounded-md">
      <div className="flex items-center gap-2 w-full">
        <img src="https://img.freepik.com/free-photo/view-3d-letter-k-with-simple-background_23-2150811457.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711411200&semt=ais" alt="https://img.freepik.com/free-photo/view-3d-letter-k-with-simple-background_23-2150811457.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711411200&semt=ais" className="w-[34px] h-[34px] rounded-full object-cover" />
        <div>
          <h4 className="text-[12px] font-[400] text-[black]">Dlex Workspace</h4>
          <p className="text-[10px] text-[#BDBDBD]">5 members</p>
        </div>
      </div>
      <IconChevronDown stroke={2} size={16} className="text-[black]" />
    </div>

    {/* menu section */}
    <div className="relative flex-1 flex flex-col min-h-0 bg-white pt-0">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex-1 px-3 bg-white space-y-1">
          <h4 className="text-[12px] text-[#BDBDBD] my-2">GENERAL</h4>
          <ul className="space-y-2 pb-2">
            <li>
              <Link href="#" className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-[#F0F1FA] hover:text-[#3955B3] group">
                <IconBasket stroke={2} size={16} />
                <span className="ml-3 text-[13px]">Overview</span>
              </Link>
            </li>
            <li className="!mt-0">
              <Link href="#" className="text-base text-gray-900 font-normal rounded-lg hover:bg-[#F0F1FA] hover:text-[#3955B3] flex items-center p-2 group ">
                <IconSettings stroke={2} size={16} />
                <span className="ml-2 flex-1 whitespace-nowrap text-[13px]">Settings</span>
              </Link>
            </li>
          </ul>
          <div className="space-y-2 pt-2">
            <h4 className="text-[12px] text-[#BDBDBD] my-2">MAIN MENU</h4>
            {mainMenu?.map((v, index) => {
              return <Link key={index} href="#" className="text-base text-gray-900 font-normal rounded-lg hover:bg-[#F0F1FA] hover:text-[#3955B3] group transition duration-75 flex items-center p-2 !mt-0">
                {renderIcon(v?.icon)}
                <span className="ml-2 text-[13px]">{v?.name}</span>
              </Link>
            })}
          </div>
        </div>
      </div>

      {/* create new section */}
      <div className="border-[1px] border-[#dbdbdb] rounded-md m-4 p-3 flex flex-col gap-2">
        <div className="text-[black] flex justify-between">
          <div> 
            <h4 className="text-[13px] font-[400] text-[black] mb-1">Storage</h4>
            <p className="text-[10px] font-[500] text-[black]"> 3.4GB 
            <span className="text-[10px] font-[500] text-gray-400">of 15GB</span>
            </p>
            </div>
          <Link href="#" className="text-[12px] text-[blue]">upgrade</Link>
        </div>
        <input type="range" min="1" max="100" defaultValue="50" className="slider w-full" />
      </div>
      <button className="bg-[#3855B3] w-[89%] mx-auto p-2 text-[whtie] text-[12px] rounded-sm mt-4 cursor-pointer flex justify-center items-center"> <IconPlus stroke={2} size={16} className="mr-1" /> Create new</button>
    </div>

  </aside>
}

export default SideBar;