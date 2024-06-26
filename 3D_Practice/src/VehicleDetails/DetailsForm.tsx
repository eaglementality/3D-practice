import { useForm, SubmitHandler } from "react-hook-form";
import { SectionOne } from "./components/formSection_1";
import { SectionTwo } from "./components/formSection_2";
import { SectionThree } from "./components/formSection_3";
import { vehicleFormSchema, vehicleFormSchemaType } from "./schema/Data";
import { zodResolver } from "@hookform/resolvers/zod";
import ModalTemplate from "./template/modalTemplate";




export const VehicleForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<vehicleFormSchemaType>({
    resolver: zodResolver(vehicleFormSchema),
  });
  const SubmitAction: SubmitHandler<vehicleFormSchemaType> = (data) => {
    console.log("@#$", data);
  };

  return (
    <>
      <main className="w-full h-full flex justify-center p-2 ">
      <ModalTemplate/>
        <form className="w-[90rem] mt-5" onSubmit={handleSubmit(SubmitAction)}>
          <section className="flex space-x-4 w-full text-sm">
            <SectionOne register={register} errors={errors} />
            <SectionTwo />
            <SectionThree />
          </section>
          <div className="w-full mt-10">
            <button
              className=" absolute right-[25rem] p-5 rounded-lg  bg-black text-white"
              type="submit"
            >{`save`}</button>
          </div>
        </form>
      </main>
    </>
  );
};
