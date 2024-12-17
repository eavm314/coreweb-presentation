import Image from "next/image";
import segui from "@/assets/segui.webp";
import Functions from "@/components/Functions";
import Activities from "@/components/Activities";
import WorkFlow from "@/components/WorkFlow";
import json from "./data.json";
import Risks from "@/components/Risks";

const SeguridadInformaticaPage = () => {
  return (
    <div className="flex flex-col bg-[#141416] rounded-lg shadow-md">
      <Image alt="Super dev team" src={segui} className="w-full" />
      <h1 className="w-full text-white text-5xl text-center font-bold mt-8">
        Departamento de Seguridad
      </h1>
      <Functions {...json.functions} />
      <Activities {...json.activities} />
      <WorkFlow {...json.workflow} />
      <Risks data={json.risks} />
    </div>
  );
};

export default SeguridadInformaticaPage;
