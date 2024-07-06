import dayjs from "dayjs";
import {
  chassisNo,
  Country,
  Currency,
  FuelType,
  status,
  TransmType,
  vehicleMake,
} from "../api/dummyData";

interface Props {
  register: any;
  errors: any;
  setvehicleFormValue?:(data:any)=>void;
}
export const SectionTwo = ({ register, errors }: Props) => {

  let SecondSectionFields={
    chassisNo: "",
    vehMake: { id: 0, value: "" },
    country: { id: 0, value: "" },
    fuelType: { id: 0, value: "" },
    transType: { id: 0, value: "" },
    status: { id: 0, value: "" },
    noOfAxles: "",
    noOfWheels: "",
    tankCap: "",
    price: "",
    currency: { id: 0, value: "" },
    supplyDate: dayjs(),
  }

  return (
    <div id="First Section" className="grid gap-2 w-full h-full">
      <div className="flex space-x-2  w-full">
        <span className="py-1">{`Chassis No:`}</span>
        <select
          className={`${
            errors?.chassisNo ? "border border-red-500" : "border"
          } w-[15rem] h-[2rem] px-2 rounded-lg`}
          {...register("chassisNo")}
        >
          {chassisNo.map((data) => (
            <option key={data.id}>{data.value}</option>
          ))}
        </select>
        {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
      </div>
      <div className="flex space-x-2  w-full">
        <span className="py-1">{`Vehicle Make:`}</span>
        <select
          className={`${
            errors?.vehicleMake ? "border border-red-500" : "border"
          } w-[15rem] h-[2rem] px-2 rounded-lg`}
          {...register("vehicleMake")}
        >
          {vehicleMake.map((data) => (
            <option key={data.id}>{data.value}</option>
          ))}
        </select>
        {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
      </div>
      <div className="flex space-x-2   w-full">
        <span className="py-1">{`Country:`}</span>
        <select
          className={`${
            errors?.country ? "border border-red-500" : "border"
          } w-[15rem] h-[2rem] px-2 rounded-lg`}
          {...register("country")}
        >
          {Country.map((data) => (
            <option key={data.id}>{data.value}</option>
          ))}
        </select>
        {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
      </div>
      <div className="flex space-x-2  w-full">
        <span className="py-1">{`Fuel Type:`}</span>
        <select
          className={`${
            errors?.fuelType ? "border border-red-500" : "border"
          } w-[15rem] h-[2rem] px-2 rounded-lg`}
          {...register("fuelType")}
        >
          {FuelType.map((data) => (
            <option key={data.id}>{data.value}</option>
          ))}
        </select>
        {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
      </div>
      <div className="flex space-x-2   w-full">
        <span className="py-1">{`Transm. Type:`}</span>
        <select
          className={`${
            errors?.transmissionType ? "border border-red-500" : "border"
          } w-[15rem] h-[2rem] px-2 rounded-lg`}
          {...register("transmissionType")}
        >
          {TransmType.map((data) => (
            <option key={data.id}>{data.value}</option>
          ))}
        </select>
        {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
      </div>
      <div className="flex space-x-2   w-full">
        <span className="py-1">{`Status:`}</span>
        <select
          className={`${
            errors?.vehicleStatus ? "border border-red-500" : "border"
          } w-[15rem] h-[2rem] px-2 rounded-lg`}
          {...register("vehicleStatus")}
        >
          {status.map((data) => (
            <option key={data.id}>{data.value}</option>
          ))}
        </select>
        <div className="border p-2 rounded-lg">
          <input
            type="checkbox"
            className={`w-4 h-4`}
            {...register("isCheck")}
          />
        </div>
      </div>
      <div className="flex space-x-2  w-full">
        <span className="py-1">{`No of Axles/Wheels:`}</span>
        <input
          type="number"
          className={`${
            errors?.noOfAxles ? "border border-red-500" : "border"
          } px-2  w-[4.7rem] rounded-lg`}
          {...register("noOfAxles")}
        />
        <input
          type="number"
          className={`${
            errors?.noOfWheels ? "border border-red-500" : "border"
          } px-2  w-[4.7rem] rounded-lg`}
          {...register("noOfWheels")}
        />
      </div>
      <div className="flex space-x-2   w-full">
        <span className="py-1">{`Tank Cap(Ltrs):`}</span>
        <input
          type="number"
          className={`${
            errors?.tankCap ? "border border-red-500" : "border"
          } px-2 w-[7.3rem] rounded-lg`}
          {...register("tankCap")}
        />
      </div>
      <div className="flex space-x-2   w-full">
        <span className="py-1">{`Price:`}</span>
        <input
          type="number"
          className={`${
            errors?.price ? "border border-red-500" : "border"
          } px-2 w-[7.3rem] rounded-lg`}
          {...register("price")}
        />
        <select
          className={`${
            errors?.currency ? "border border-red-500" : "border"
          } w-[7.3rem] h-[2rem] px-2 rounded-lg`}
          {...register("other")}
        >
          {Currency.map((data) => (
            <option key={data.id}>{data.value}</option>
          ))}
        </select>
      </div>
      <div className="flex space-x-2  w-full">
        <span className="py-1">{`Supply Date:`}</span>
        <input
          type="date"
          className={`${
            errors?.supplyDate ? "border border-red-500" : "border"
          } px-2 w-[15.3rem] rounded-lg`}
          {...register("supplyDate")}
        />
      </div>
    </div>
  );
};
