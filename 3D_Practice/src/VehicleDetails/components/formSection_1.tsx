interface Props {
  register: any;
  errors: any;
}
export const SectionOne = ({ register, errors }: Props) => {
  return (
    <div id="First Section" className="grid gap-2 w-full h-full">
      <div className="flex space-x-2  w-full">
        <span className="py-1">{`Registration Number:`}</span>
        <select
          className={`${errors?.registrationNo && errors?.registrationNo.message ? 'border border-red-500': 'border' } w-[15rem] h-[2rem] px-2 rounded-lg`}
          {...register("registrationNo")}
        >
          {/* <option>{`select Reg No.`}</option> */}
        </select>
        {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
      </div>
      <div className="flex space-x-2 w-full">
        <span className="py-1">{`Vehicle Class:`}</span>
        <select className="border w-[15rem] h-[2rem] px-2 rounded-lg">
          {/* <option>{`select veh.class`}</option> */}
        </select>
        {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
      </div>
      {errors?.vehicleClass && (
        <span className="text-sm text-red-600 -mt-5 text-wrap  w-10">
          {errors?.vehicleClass.message}
        </span>
      )}
      <div className="flex space-x-2   w-full">
        <span className="py-1">{`Manufacturer:`}</span>
        <select className="border w-[15rem] h-[2rem] px-2 rounded-lg">
          {/* <option>{`select manufacurer`}</option> */}
        </select>
        {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
      </div>
      {errors?.manufacturer && (
        <span className="text-sm text-red-600 -mt-5 text-wrap  w-10">
          {errors?.manufacturer.message}
        </span>
      )}
      <div className="flex space-x-2   w-full">
        <span className="py-1">{`Engine Type:`}</span>
        <select className="border w-[15rem] h-[2rem] px-2 rounded-lg">
          {/* <option>{`select Engine Type`}</option> */}
        </select>
        {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
      </div>
      {errors?.engineType && (
        <span className="text-sm text-red-600 -mt-5 text-wrap  w-10">
          {errors?.engineType.message}
        </span>
      )}
      <div className="flex space-x-2  w-full">
        <span className="py-1">{`Power Train:`}</span>
        <select className="border w-[15rem] h-[2rem] px-2 rounded-lg">
          {/* <option>{`select Power Train`}</option> */}
        </select>
        {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
      </div>
      <div className="flex space-x-2   w-full">
        <span className="py-1">{`Colour:`}</span>
        <select className="border w-[15rem] h-[2rem] px-2 rounded-lg">
          {/* <option>{`select Colour`}</option> */}
        </select>
        <div className="border px-5  rounded-lg"></div>
      </div>
      <div className="flex space-x-2   w-full">
        <span className="py-1">{`Len./Wdt./Hgt.:`}</span>
        <input
          type="number"
          className="border px-2  w-[4.7rem] rounded-lg"
          {...register("length")}
        />
        <input
          type="number"
          className="border px-2  w-[4.7rem] rounded-lg"
          {...register("width")}
        />
        <input
          type="number"
          className="border px-2  w-[4.7rem] rounded-lg"
          {...register("height")}
        />
      </div>
      <div className="flex space-x-2 w-full">
        <span className="py-1">{`No of Cyl/Hp:`}</span>
        <input type="number" className="border px-2 w-[7.3rem] rounded-lg" />
        <input type="number" className="border px-2 w-[7.3rem] rounded-lg" />
      </div>
      <div className="flex space-x-2 w-full">
        <span className="py-1">{`Weight(N/G):`}</span>
        <input type="number" className="border px-2 w-[7.3rem] rounded-lg" />
        <input type="number" className="border px-2 w-[7.3rem] rounded-lg" />
      </div>
      <div className="flex space-x-2 w-full">
        <span className="py-1">{`Manuf. Date:`}</span>
        <input type="date" className="border px-2 w-[15.3rem] rounded-lg" />
      </div>
    </div>
  );
};
