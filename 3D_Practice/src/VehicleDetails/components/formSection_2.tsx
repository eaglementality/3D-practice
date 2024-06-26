export const SectionTwo = () => {
  return (
    <div id="First Section" className="grid gap-2 w-full h-full">
      <div className="flex space-x-2  w-full">
        <span className="py-1">{`Chassis No:`}</span>
        <select className="border  w-[15rem] h-[2rem] px-2 rounded-lg">
          <option>{`select Chassis No.`}</option>
        </select>
        {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
      </div>
      <div className="flex space-x-2  w-full">
        <span className="py-1">{`Vehicle Make:`}</span>
        <select className="border w-[15rem] h-[2rem] px-2 rounded-lg">
          <option>{`select Veh.Make`}</option>
        </select>
        {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
      </div>
      <div className="flex space-x-2   w-full">
        <span className="py-1">{`Country:`}</span>
        <select className="border w-[15rem] h-[2rem] px-2 rounded-lg">
          <option>{`select Country`}</option>
        </select>
        {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
      </div>
      <div className="flex space-x-2  w-full">
        <span className="py-1">{`Fuel Type:`}</span>
        <select className="border w-[15rem] h-[2rem] px-2 rounded-lg">
          <option>{`select Fuel Type`}</option>
        </select>
        {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
      </div>
      <div className="flex space-x-2   w-full">
        <span className="py-1">{`Transm. Type:`}</span>
        <select className="border w-[15rem] h-[2rem] px-2 rounded-lg">
          <option>{`select Transm.Type`}</option>
        </select>
        {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
      </div>
      <div className="flex space-x-2   w-full">
        <span className="py-1">{`Status:`}</span>
        <select className="border w-[15rem] h-[2rem] px-2 rounded-lg">
          <option>{`select Status`}</option>
        </select>
        <div className="border p-2 rounded-lg">
          <input type="checkbox" className="w-4 h-4" />
        </div>
      </div>
      <div className="flex space-x-2  w-full">
        <span className="py-1">{`No of Axles/Wheels:`}</span>
        <input type="number" className="border px-2  w-[4.7rem] rounded-lg" />
        <input type="number" className="border px-2  w-[4.7rem] rounded-lg" />
      </div>
      <div className="flex space-x-2   w-full">
        <span className="py-1">{`Tank Cap(Ltrs):`}</span>
        <input type="number" className="border px-2 w-[7.3rem] rounded-lg" />
      </div>
      <div className="flex space-x-2   w-full">
        <span className="py-1">{`Price:`}</span>
        <input type="number" className="border px-2 w-[7.3rem] rounded-lg" />
        <input type="number" className="border px-2 w-[7.3rem] rounded-lg" />
      </div>
      <div className="flex space-x-2  w-full">
        <span className="py-1">{`Supply Date:`}</span>
        <input type="date" className="border px-2 w-[15.3rem] rounded-lg" />
      </div>
    </div>
  );
};
