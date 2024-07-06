import dayjs from "dayjs";
import { Currency, EngineMake, speedUnit, Supplier, vehicleModel } from "../api/dummyData";

interface Props {
  register: any;
  errors: any;
  setvehicleFormValue?:(data:any)=>void;
}
export const SectionThree = ({register, errors}: Props) => {
  let ThirdSectionFields={
    maxSpeed: 0,
    speedUnit: { id: 0, value: "" },
    vehModel: { id: 0, value: "" },
    supplier: { id: 0, value: "" },
    engineMake: { id: 0, value: "" },
    cubicCapacity: "",
    seatingCap: "",
    engineNo: "",
    tyreSizeF: "",
    tyreSizeM: "",
    tyreSizeR: "",
    other: "",
    regDate: dayjs(),
    colour: "",
    specialised: false,
    motorBike: false,
    equipment: false,
    lightDuty: false,
    heavyDuty: false,
    vehicle: false,
    active: false,
    remarks: "",
  }
    return (
      <div id="First Section" className="grid gap-2 w-full h-full">
        <div className="flex space-x-2  w-full">
          <span className="py-1">{`Max. Speedo:`}</span>
          <input type="number" className={`${errors?.maxSpeedo ? 'border border-red-500':'border'} px-2 h-[2rem] w-[4.7rem] rounded-lg`}/>
          <select className={`${errors?.speedUnit?'border border-red-500':'border'} w-[15rem] h-[2rem] px-2 rounded-lg`} {...register('speedUnit')}>
          {
          speedUnit.map(data => (
            <option key={data.id}>{data.value}</option>
          ))
        }
          </select>
          {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
        </div>
        <div className="flex space-x-2  w-full">
          <span className="py-1">{`Vehicle Model:`}</span>
          <select className={`${errors?.vehicleModel?'border border-red-500':'border'} w-[15rem] h-[2rem] px-2 rounded-lg`}{...register('vehicleModel')}>
          {
          vehicleModel.map(data => (
            <option key={data.id}>{data.value}</option>
          ))
        }
          </select>
          {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
        </div>
        <div className="flex space-x-2   w-full">
          <span className="py-1">{`Supplier:`}</span>
          <select  className={`${errors?.supplier?'border border-red-500':'border'} w-[15rem] h-[2rem] px-2 rounded-lg`}{...register('supplier')}>
          {
          Supplier.map(data => (
            <option key={data.id}>{data.value}</option>
          ))
        }
          </select>
          {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
        </div>
        <div className="flex space-x-2   w-full">
          <span className="py-1">{`Engine Make:`}</span>
          <select className={`${errors?.engineMake?'border border-red-500':'border'} w-[15rem] h-[2rem] px-2 rounded-lg`}{...register('engineMake')}>
          {
          EngineMake.map(data => (
            <option key={data.id}>{data.value}</option>
          ))
        }
          </select>
          {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
        </div>
        <div className="flex space-x-2   w-full">
          <span className="py-1">{`Cubic Cap:`}</span>
          <input type="number" className={`${errors?.cubicCap ? 'border border-red-500':'border'} w-[15rem] h-[2rem] px-2 rounded-lg`}{...register('cubicCap')} />
          {/* <div className="border py-1 px-1 border-gray-300 rounded-lg">{`R`}</div> */}
        </div>
        <div className="flex space-x-2   w-full">
          <span className="py-1">{`Seating Cap:`}</span>
          <input type="number" className={`${errors?.seatingCap ? 'border border-red-500':'border'} w-[15rem] h-[2rem] px-2 rounded-lg`}{...register('seatingCap')}/>
          {/* <div className="border px-5  rounded-lg"></div> */}
        </div>
        <div className="flex space-x-2   w-full">
          <span className="py-1">{`Engine No. :`}</span>
          <input type="number" className={`${errors?.engineNo ? 'border border-red-500':'border'} w-[15rem] h-[2rem] px-2 rounded-lg`}{...register('engineNo')}/>
        </div>
        <div className="flex space-x-2   w-full">
          <span className="py-1">{`Typre Size(F/M/R):`}</span>
          <input type="number" className={`${errors?.frontTyreSize ? 'border border-red-500':'border'} px-2 w-[4.3rem] rounded-lg`}{...register('frontTyreSize')}/>
          <input type="number" className={`${errors?.middleTyreSize ? 'border border-red-500':'border'} px-2 w-[4.3rem] rounded-lg`}{...register('middleTyreSize')}/>
          <input type="number" className={`${errors?.R_TyreSize ? 'border border-red-500':'border'} px-2 w-[4.3rem] rounded-lg`}{...register('R_TyreSize')}/>
        </div>
        <div className="flex space-x-2 w-full">
          <span className="py-1">{`Other:`}</span>
          <input type="number" className={`${errors?.other ? 'border border-red-500':'border'}  px-2 w-[7.3rem] rounded-lg`} />
          <select className={`${errors?.currency ? 'border border-red-500':'border'} w-[7.3rem] h-[2rem] px-2 rounded-lg`}{...register('other')}>
          {
          Currency.map(data => (
            <option key={data.id}>{data.value}</option>
          ))
        }
          </select>
        </div>
        <div className="flex space-x-2 w-full">
          <span className="py-1">{`Reg. Date:`}</span>
          <input type="date" className={`${errors?.regDate?'border border-red-500':'border'} px-2 w-[15.3rem] rounded-lg`}{...register('regDate')}/>
        </div>
      </div>
    );
  };
  