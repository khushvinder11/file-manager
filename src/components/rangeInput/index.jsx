import React from "react";


const RangeInput = () => {
  return <div>
    <div className="flex justify-between items-center mb-1">
    <h4 className="text-[14px] font-[500] text-[black]">Storage overview</h4>
    <p className="text-[10px] font-[500] text-[black]"> 3.4GB <span className="text-[10px] font-[500] text-gray-400">of 15GB</span></p>
    </div>
    <input type="range" min="1" max="100" defaultValue="50" className="slider w-full"/>

    </div>
}

export default RangeInput;