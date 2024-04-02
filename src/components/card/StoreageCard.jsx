import React from "react";
import { IconIdBadge2 } from '@tabler/icons-react';


const StorageCard = ({data,index}) => {
  return <div key={index} style={{background: data?.bg}} className="shadow rounded-[8px] p-4 h-[154px]">
    <div className="flex flex-col justify-between h-full">
      <div className="flex-shrink-0">
      <IconIdBadge2 stroke={2}  className="text-[black]"/>
        <span className="text-[12px] leading-none font-[500] text-gray-900 mt-2">{data?.name}</span>
        <h3 className="text-[10px] font-normal text-gray-500">{data?.files}</h3>
      </div>

      <p className="text-black text-[12px] font-[500]">{data?.memory}</p>
      
    </div>
  </div>
}

export default StorageCard