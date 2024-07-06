import { z } from "zod";

export const vehicleFormSchema = z.object({
  registrationNo: z.string().min(1, "empty"),
  vehicleClass: z.string().min(1),
  manufacturer: z.string().min(1),
  engineType: z.string().min(1),
  powerTrain: z.string().min(1),
  colour: z.string().min(1),
  len: z.number().min(1, "empty"),
  width: z.string().min(1, "empty"),
  height: z.string().min(1, "empty"),
  noOfCylinder: z.string().min(1),
  noOfhorsePower: z.string().min(1),
  weight_Net: z.string().min(1),
  weight_Gram: z.string().min(1).max(255),
  ManufacturedDate: z.string().min(1),
  chassisNo: z.string().min(1),
  vehicleMake: z.string().min(1),
  country: z.string().min(1),
  fuelType: z.string().min(1),
  transmissionType: z.string().min(1),
  vehicleStatus: z.string().min(1),
  isCheck: z.string().min(1),
  noOfAxles: z.string().min(1).max(255),
  noOfWheels: z.string().min(1).max(255),
  tankCap: z.string().min(255),
  price: z.string().min(1),
  currency: z.string().min(1),
  supplyDate: z.string().min(1),
  maxSpeedo: z.string().min(1),
  speedUnit: z.string().min(1),
  vehicleModel: z.string().min(1),
  supplier: z.string().min(1),
  engineMake: z.string().min(1),
  cubicCap: z.string().min(1),
  seatingCap: z.string().min(1),
  engineNo: z.string().min(1),
  frontTyreSize: z.string().min(1),
  middleTyreSize: z.string().min(1),
  R_TyreSize: z.string().min(1),
  other: z.string().min(1),
  regDate: z.string().min(1),
  checked: z.boolean(),
  veh_category: z.boolean(),
  gen_vehicle: z.boolean(),
  bus: z.boolean(),
  lightDuty: z.boolean(),
  heavyDuty: z.boolean(),
  specialized: z.boolean(),
  motorBike: z.boolean(),
  equipment: z.boolean(),
  remark: z.string().min(0),
});

export type vehicleFormSchemaType = Zod.infer<typeof vehicleFormSchema>;

export const DefaultValues = {
  registrationNo: "",
  vehicleClass: "",
  manufacturer: "",
  engineType: "",
  powerTrain: "",
  colour: "",

  ManufacturedDate: "",
  chassisNo: "",
  vehicleMake: "",
  country: "",
  fuelType: "",
  transmissionType: "",
  vehicleStatus: "",
  isCheck: "",

  currency: "",
  supplyDate: "",

  vehicleModel: "",
  supplier: "",
  engineMake: "",

  engineNo: "",

  regDate: "",
  checked: false,
  veh_category: false,
  gen_vehicle: false,
  bus: false,
  lightDuty: false,
  heavyDuty: false,
  specialized: false,
  motorBike: false,
  equipment: false,
  remark: "",
};
