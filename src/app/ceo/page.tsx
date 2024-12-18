import Image from "next/image";
import tech from "@/assets/tech.png";
import Functions from "@/components/Functions";
import Activities from "@/components/Activities";
import WorkFlow from "@/components/WorkFlow";
import json from "./data.json";
import Risks from "@/components/Risks";
import InfoCard from "@/components/InfoCard";
import LinkButton from "@/components/LinkButton";

const CEOPage = () => {
  return (
    <div className="flex flex-col bg-[#141416] rounded-lg shadow-md">
      <Image alt="Super dev team" src={tech} className="w-full" />
      <h1 className="w-full text-white text-5xl text-center font-bold mt-8">
        Departamento de Gerencia
      </h1>
      <div className="m-10">
        <div className="px-80">
          <InfoCard title={"CEO (Chief Executive Officer) 👨‍💼"} desc={"El CEO es responsable de la dirección general de CoreWeb. Su principal objetivo es liderar la organización para lograr los objetivos estratégicos, maximizar el rendimiento de la empresa, asegurar la sostenibilidad financiera y representar a la compañía ante los stakeholders."} />
        </div>
        <div className="my-10 w-full flex justify-center">
          <LinkButton text="Manual de Funciones" href={"https://docs.google.com/document/d/1QMJfvQbZfCgkpThsOZItV-OP__V6OgRLuTOUjjMHstQ/edit?usp=drive_link"} />
        </div>
      </div>
      <Activities {...json.activities} />
      <WorkFlow {...json.workflow} />
      <Risks data={json.risks} />
    </div>
  );
};

export default CEOPage;
