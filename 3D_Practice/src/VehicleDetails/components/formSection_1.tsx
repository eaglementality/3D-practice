import dayjs from "dayjs";
import {
  Colour,
  EngineType,
  Manufacturer,
  PowerTrain,
  registration,
  vehicleClass,
} from "../api/dummyData";
import { useCallback, useEffect, useState } from "react";

interface Props {
  register: any;
  errors: any;
  setvehicleFormValue?:(data:any)=>void;
}

export const SectionOne = ({ register, errors }: Props) => {
  const [FirstSectionFields, setFirstSectionFields] = useState({
    vdtIdpk: 0,
    regNo: " ",
    vehClass: '',
    manufacturer: '',
    engineType: '',
    powerTrain: '',
    colour:'',
    len: 0,
    width: 0,
    height: 0,
    noCylinder: "",
    horsePower: "",
    netWeight:Number(''),
    grossWeight:Number(''),
    manuDate: dayjs().format('DD MMM YYYY'),
  });

  const updateFirstSectionFieldValues = useCallback((key: string, value: string|number)=>{
    setFirstSectionFields(() => ({ ...FirstSectionFields, [key]: value }));
  },[FirstSectionFields]);

 
console.log('@#$',FirstSectionFields)
  return (
    <div id="First Section" className="grid gap-2 w-full h-full">
      <div className="flex space-x-2  w-full">
        <span className="py-1">{`Registration Number:`}</span>
        <select
          className={`${
            errors?.registrationNo ? "border border-red-500" : "border"
          } w-[15rem] h-[2rem] px-2 rounded-lg`}
          {...register("registrationNo")}
          onChange={(e) => {
            updateFirstSectionFieldValues("regNo", e.target.value);
          }}
        >
          {registration.map((data) => (
            <option key={data.id}>{data.value}</option>
          ))}
        </select>
        {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
      </div>

      <div className="flex space-x-2 w-full">
        <span className="py-1">{`Vehicle Class:`}</span>
        <select
          className={`${
            errors?.vehicleClass ? "border border-red-500" : "border"
          } w-[15rem] h-[2rem] px-2 rounded-lg`}
          {...register("vehicleClass")}
          onChange={(e) => {
            updateFirstSectionFieldValues("vehClass", e.target.value);
          }}
        >
          {vehicleClass.map((data) => (
            <option key={data.id}>{data.value}</option>
          ))}
        </select>
        {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
      </div>

      <div className="flex space-x-2   w-full">
        <span className="py-1">{`Manufacturer:`}</span>
        <select
          className={`${
            errors?.manufacturer ? "border border-red-500" : "border"
          } w-[15rem] h-[2rem] px-2 rounded-lg`}
          {...register("manufacturer")}
          onChange={(e) => {
            updateFirstSectionFieldValues("manufacturer", e.target.value);
          }}
        >
          {Manufacturer.map((data) => (
            <option key={data.id}>{data.value}</option>
          ))}
        </select>
        {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
      </div>

      <div className="flex space-x-2   w-full">
        <span className="py-1">{`Engine Type:`}</span>
        <select
          className={`${
            errors?.engineType ? "border border-red-500" : "border"
          } w-[15rem] h-[2rem] px-2 rounded-lg`}
          {...register("engineType")}
          onChange={(e) => {
            updateFirstSectionFieldValues("engineType", e.target.value);
          }}
        >
          {EngineType.map((data) => (
            <option key={data.id}>{data.value}</option>
          ))}
        </select>
        {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
      </div>

      <div className="flex space-x-2  w-full">
        <span className="py-1">{`Power Train:`}</span>
        <select
          className={`${
            errors?.powerTrain ? "border border-red-500" : "border"
          } w-[15rem] h-[2rem] px-2 rounded-lg`}
          {...register("powerTrain")}
          onChange={(e) => {
            updateFirstSectionFieldValues("powerTrain", e.target.value);
          }}
        >
          {PowerTrain.map((data) => (
            <option key={data.id}>{data.value}</option>
          ))}
        </select>
        {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
      </div>

      <div className="flex space-x-2   w-full">
        <span className="py-1">{`Colour:`}</span>
        <select
          className={`${
            errors?.colour ? "border border-red-500" : "border"
          } w-[15rem] h-[2rem] px-2 rounded-lg`}
          {...register("colour")}
          onChange={(e) => {
            updateFirstSectionFieldValues("colour", e.target.value);
          }}
        >
          {Colour.map((data) => (
            <option key={data.id}>{data.value}</option>
          ))}
        </select>
        <div className="border px-5  rounded-lg"></div>
      </div>

      <div className="flex space-x-2   w-full">
        <span className="py-1">{`Len./Wdt./Hgt.:`}</span>
        <input
          type="number"
          className={`${
            errors?.len ? "border border-red-500" : "border"
          } w-[4.7rem] px-2 rounded-lg`}
          {...register("len")}
          onChange={(e) => {
            updateFirstSectionFieldValues("len", e.target.value);
          }}
        />
        <input
          type="number"
          className={`${
            errors?.width ? "border border-red-500" : "border"
          } w-[4.7rem] px-2 rounded-lg`}
          {...register("width")}
          onChange={(e) => {
            updateFirstSectionFieldValues("width", e.target.value);
          }}
        />
        <input
          type="number"
          className={`${
            errors?.height ? "border border-red-500" : "border"
          } w-[4.7rem] px-2 rounded-lg`}
          {...register("height")}
          onChange={(e) => {
            updateFirstSectionFieldValues("height", e.target.value);
          }}
        />
      </div>
      <div className="flex space-x-2 w-full">
        <span className="py-1">{`No of Cyl/Hp:`}</span>
        <input
          type="number"
          className={`${
            errors?.noOfCylinder ? "border border-red-500" : "border"
          } w-[7.3rem]  px-2 rounded-lg`}
          {...register("noOfCylinder")}
          onChange={(e) => {
            updateFirstSectionFieldValues("noCylinder", e.target.value);
          }}
        />
        <input
          type="number"
          className={`${
            errors?.noOfhorsePower ? "border border-red-500" : "border"
          } w-[7.3rem]  px-2 rounded-lg`}
          {...register("noOfhorsePower")}
          onChange={(e) => {
            updateFirstSectionFieldValues("horsePower", e.target.value);
          }}
        />
      </div>
      <div className="flex space-x-2 w-full">
        <span className="py-1">{`Weight(N/G):`}</span>
        <input
          type="number"
          className={`${
            errors?.weight_Net ? "border border-red-500" : "border"
          } w-[7.3rem]  px-2 rounded-lg`}
          {...register("weight_Net")}
          onChange={(e) => {
            updateFirstSectionFieldValues("netWeight", e.target.value);
          }}
        />
        <input
          type="number"
          className={`${
            errors?.weight_Gram ? "border border-red-500" : "border"
          } w-[7.3rem]  px-2 rounded-lg`}
          {...register("weight_Gram")}
          onChange={(e) => {
            updateFirstSectionFieldValues("grossWeight", e.target.value);
          }}
        />
      </div>
      <div className="flex space-x-2 w-full">
        <span className="py-1">{`Manuf. Date:`}</span>
        <input
          type="date"
          className={`${
            errors?.ManufacturedDate ? "border border-red-500" : "border"
          } w-[15.3rem]  px-2 rounded-lg`}
          {...register("ManufacturedDate")}
          onChange={(e) => {
            updateFirstSectionFieldValues("manuDate", e.target.value);
          }}
        />
      </div>
    </div>
  );
};
