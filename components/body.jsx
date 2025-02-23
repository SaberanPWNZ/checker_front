"use client";

import { useState, useEffect } from "react";
import mockApiData from '../components/mockdata'; 

export default function Body() {
  const [data, setData] = useState([]);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    if (Array.isArray(mockApiData)) {
      setData(mockApiData);

      const allPartners = mockApiData.reduce((acc, item) => {
        if (item.partners) {
          Object.keys(item.partners).forEach((partner) => {
            if (!acc.includes(partner)) {
              acc.push(partner);
            }
          });
        }
        return acc;
      }, []);

      setPartners(allPartners);
      console.log(allPartners);
    } else {
      console.error("mockApiData is not an array!");
    }
  }, []);

  return (
    <div className="p-2">
        <input placeholder="артикул" className="border p-1 rounded-xl backdrop:static placeholder-gray-700 text-center text-black "></input>
        <button className="appearance-none bg-transparent border border-gray-900 rounded-xl box-border
         text-gray-700 cursor-pointer inline-block font-semibold text-base leading-normal m-5 
          min-w-0 outline-none p-4 px-6 text-center no-underline 
          transition-all duration-300 ease-[cubic-bezier(.23,1,0.32,1)] 
          select-none -webkit-select-none touch-manipulation will-change-transform disabled:pointer-events-none
           hover:text-white hover:bg-gray-900 hover:shadow-xl 
           hover:transform hover:-translate-y-0.5 active:shadow-none active:transform active:translate-y-0">
 Пошук
</button>
    <div className="inline-block">
      <a href='www.google.com'>WACOM</a>
      <a href='www.google.com'>WACOM ACC</a>
    </div>

      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2 text-xs">Артикул</th>
            <th className="border p-2 text-xs">Назва</th>
            {partners.map((partner) => (
              <th key={partner} className="border p-2 text-xs">{partner}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.article} className="border">
              <td className="border p-2 text-xs">{item.article}</td>
              <td className="border p-2 text-xs">{item.title}</td>
              {partners.map((partner) => (
                <td key={partner} className="border p-2 text-xs">{item.partners ? item.partners[partner] : '-'}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
