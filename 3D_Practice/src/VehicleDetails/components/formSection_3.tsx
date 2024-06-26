export const SectionThree = () => {
    return (
      <div id="First Section" className="grid gap-2 w-full h-full">
        <div className="flex space-x-2  w-full">
          <span className="py-1">{`Max. Speedo:`}</span>
          <input type="number" className="border px-2 h-[2rem] w-[4.7rem] rounded-lg" />
          <select className="border  w-[15rem] h-[2rem] px-2 rounded-lg">
            <option>{`select unit`}</option>
          </select>
          {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
        </div>
        <div className="flex space-x-2  w-full">
          <span className="py-1">{`Vehicle Model:`}</span>
          <select className="border w-[15rem] h-[2rem] px-2 rounded-lg">
            <option>{`select veh.model`}</option>
          </select>
          {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
        </div>
        <div className="flex space-x-2   w-full">
          <span className="py-1">{`Supplier:`}</span>
          <select className="border w-[15rem] h-[2rem] px-2 rounded-lg">
            <option>{`select Supplier`}</option>
          </select>
          {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
        </div>
        <div className="flex space-x-2   w-full">
          <span className="py-1">{`Engine Make:`}</span>
          <select className="border w-[15rem] h-[2rem] px-2 rounded-lg">
            <option>{`select Engine Make`}</option>
          </select>
          {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
        </div>
        <div className="flex space-x-2   w-full">
          <span className="py-1">{`Cubic Cap:`}</span>
          <input type="number" className="border px-2  w-[15rem] rounded-lg" />
          {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
        </div>
        <div className="flex space-x-2   w-full">
          <span className="py-1">{`Seating Cap:`}</span>
          <input type="number" className="border px-2  w-[15rem] rounded-lg" />
          {/* <div className="border px-5  rounded-lg"></div> */}
        </div>
        <div className="flex space-x-2   w-full">
          <span className="py-1">{`Engine No. :`}</span>
          <input type="number" className="border px-2  w-[15rem] rounded-lg" />
        </div>
        <div className="flex space-x-2   w-full">
          <span className="py-1">{`Typre Size(F/M/R):`}</span>
          <input type="number" className="border px-2 w-[4.3rem] rounded-lg" />
          <input type="number" className="border px-2 w-[4.3rem] rounded-lg" />
          <input type="number" className="border px-2 w-[4.3rem] rounded-lg" />
        </div>
        <div className="flex space-x-2 w-full">
          <span className="py-1">{`Other:`}</span>
          <input type="number" className="border px-2 w-[7.3rem] rounded-lg" />
          <select className="border w-[7.3rem] h-[2rem] px-2 rounded-lg">
            <option>{`select currency`}</option>
          </select>
        </div>
        <div className="flex space-x-2 w-full">
          <span className="py-1">{`Reg. Date:`}</span>
          <input type="date" className="border px-2 w-[15.3rem] rounded-lg" />
        </div>
      </div>
    );
  };
  