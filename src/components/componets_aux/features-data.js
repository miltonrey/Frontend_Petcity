import { GiPlantsAndAnimals } from "react-icons/gi";
import { BsFillCpuFill } from "react-icons/bs";
import { AiFillMedicineBox } from "react-icons/ai";

export const featuresData = [
  {
    color: "blue",
    title: "Alimento",
    icon: GiPlantsAndAnimals,
    description: "Una selección de comidas nutritivas y equilibradas para satisfacer las necesidades alimentarias de tus queridas mascotas",
  },
  {
    color: "red",
    title: "Accesorios",
    icon: BsFillCpuFill,
    description: "Una variedad de productos y objetos diseñados para complementar la vida de tus mascotas, incluyendo juguetes, camas, correas, comederos y más.",
  },
  {
    color: "teal",
    title: "Servicios",
    icon: AiFillMedicineBox,
    description: "Una gama de opciones y cuidados especiales destinados a satisfacer las necesidades de tus mascotas, como servicios de cuidado, adiestramiento, peluquería, paseos y atención veterinaria.",
  },
];

export default featuresData;
