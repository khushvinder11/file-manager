import React from "react";
import { IconDeviceSdCard } from '@tabler/icons-react';


const Table = ({ data, columns }) => {

  return <>
    <div className="-m-1.5 overflow-x-auto">
      <div className="min-w-full inline-block align-middle">
        <div className="border rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {columns?.map((v, index) => {
                  return (
                    <th key={index} scope="col" className="px-4 py-3 text-start text-xs font-medium text-gray-500">{v?.name}</th>
                  )
                })}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data?.map((v, index) => {
                return <tr key={index}>
                  <td className="py-3 ps-4 w-[30px]">
                    <div className="flex items-center h-5">
                      <input id="hs-table-checkbox-1" type="checkbox" className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 cursor-pointer" />
                      <label for="hs-table-checkbox-1" className="sr-only">Checkbox</label>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-800 flex gap-2"><IconDeviceSdCard stroke={2} size={18} className="text-[red]" /> {v?.name}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">{v?.members}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">{v?.lastModified ? v?.lastModified : "-"}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-end text-sm font-medium">
                    <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">...</button>
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>
}

export default Table