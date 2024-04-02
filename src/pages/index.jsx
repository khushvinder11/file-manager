import React, { useState } from "react";
import Table from "@/components/table";
import Navbar from "@/components/navbar";
import SideBar from "@/components/sideBar";
import StorageCard from "@/components/card/StoreageCard";
import { cardData, tableData } from "../data/data.js"
import UpgradeCard from "@/components/card/upgradeCard";
import RangeInput from "@/components/rangeInput";


const Home = () => {

  const [isMenu, setIsMenu] = useState("hidden");
  const columns = [
    {
      name: <div className="flex items-center h-5">
        <input id="hs-table-checkbox-all" type="checkbox" className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 cursor-pointer" />
        <label for="hs-table-checkbox-all" className="sr-only">Checkbox</label>
      </div>
    },
    {
      name: "Name"
    },
    {
      name: "Members"
    },
    {
      name: "Last Modified"
    },
    {
      name: ""
    }
  ]
  return <>
    <div>
      <Navbar isMenu={isMenu} setIsMenu={setIsMenu} />
      <div className="flex overflow-hidden bg-white pt-16">
        <SideBar isMenu={isMenu} />
        <div id="main-content" className={`h-full w-full relative overflow-y-auto ${isMenu === "show" ? "lg:ml-64" : ''} mt-[17px] px-7`}>
          <h4 className="text-[14px] font-[500] text-[black]">Overview</h4>
          <hr className="my-7 mt-3" />
          <UpgradeCard />

          <RangeInput />
          <div className="mb-7">
            <h4 className="text-[10px] text-[#BDBDBD] my-2">STORAGE DETAILS</h4>
            <div className="mt-4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
              {cardData?.map((v, index) => {
                return <StorageCard key={index} data={v} index={index} />
              })}
            </div>
          </div>
          <div className="mb-9">
            <h4 className="text-[14px] font-[500] text-[black] my-2">Recent files</h4>
            <Table data={tableData} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  </>
}


export default Home