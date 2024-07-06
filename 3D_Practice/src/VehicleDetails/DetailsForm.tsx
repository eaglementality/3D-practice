import { useForm, SubmitHandler } from "react-hook-form";
import { SectionOne } from "./components/formSection_1";
import { SectionTwo } from "./components/formSection_2";
import { SectionThree } from "./components/formSection_3";
import {
  DefaultValues,
  vehicleFormSchema,
  vehicleFormSchemaType,
} from "./schema/Data";
import { zodResolver } from "@hookform/resolvers/zod";
import ModalTemplate from "./template/modalTemplate";
import { useCallback, useEffect, useState } from "react";

export const VehicleForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<vehicleFormSchemaType>({
    resolver: zodResolver(vehicleFormSchema),
    defaultValues: DefaultValues,
  });
  const SubmitAction: SubmitHandler<vehicleFormSchemaType> = (data) => {
    console.log("@#$", data);
  };
  const [openModal, setOpenModal] = useState(false);

  const onHandleSubmit = () => {
    const errorExist =
      errors.registrationNo ||
      errors.chassisNo ||
      errors.maxSpeedo ||
      errors.vehicleClass ||
      errors.vehicleMake ||
      errors.vehicleModel ||
      errors.manufacturer ||
      errors.country ||
      errors.supplier ||
      errors.engineType ||
      errors.fuelType ||
      errors.engineType ||
      errors.fuelType ||
      errors.engineMake ||
      errors.powerTrain ||
      errors.transmissionType ||
      errors.cubicCap ||
      errors.colour ||
      errors.vehicleStatus ||
      errors.seatingCap ||
      errors.len ||
      errors.width ||
      errors.height ||
      errors.noOfAxles ||
      errors.noOfWheels ||
      errors.engineNo ||
      errors.noOfCylinder ||
      errors.noOfhorsePower ||
      errors.tankCap ||
      errors.frontTyreSize ||
      errors.middleTyreSize ||
      errors.R_TyreSize ||
      errors.weight_Net ||
      errors.weight_Gram ||
      errors.price ||
      errors.other ||
      errors.currency ||
      errors.ManufacturedDate ||
      errors.supplyDate ||
      errors.regDate ||
      errors.veh_category ||
      errors.gen_vehicle ||
      errors.bus ||
      errors.lightDuty ||
      errors.heavyDuty ||
      errors.specialized ||
      errors.motorBike ||
      errors.equipment ||
      errors.remark;
    if (errorExist) {
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
  };

  const [vehicleFormObj, setVehicleFormObj] = useState({});
  const [getAllVehicleObj, setGetAllVehicleObj] = useState(false)



  console.log("vehicleFormObj", vehicleFormObj);
  return (
    <>
      <main className="w-full h-full flex justify-center p-2 ">
        <ModalTemplate
          isOpen={openModal}
          handleCancel={() => {
            setOpenModal(false);
          }}
        />
        <form className="w-[90rem] mt-5" onSubmit={handleSubmit(SubmitAction)}>
          <section className="flex space-x-4 w-full text-sm">
            <SectionOne register={register} errors={errors} />
            <SectionTwo register={register} errors={errors} />
            <SectionThree register={register} errors={errors}/>
          </section>
          <div className="w-full mt-10">
            <button
              className=" absolute right-[25rem] p-5 rounded-lg  bg-black text-white"
              type="submit"
              onClick={()=>{
                setGetAllVehicleObj(true)
              }}
              onSubmit={handleSubmit(SubmitAction)}
            >{`save`}</button>
          </div>
        </form>
      </main>
    </>
  );
};
