import Image from "next/image";
import Functions from "@/components/Functions";
import Activities from "@/components/Activities";
import WorkFlow from "@/components/WorkFlow";
import json from "./data.json";
import Risks from "@/components/Risks";
import iniciall from "@/assets/marketing.jpg";

const MarketingPage = () => {
    return (
      <div className="flex flex-col bg-[#141416] rounded-lg shadow-md">
      <Image alt="Super dev team" src={iniciall} className="w-full" />
      <h1 className="w-full text-white text-5xl text-center font-bold mt-8">
        Departamento de Marketing
      </h1>
      <Functions {...json.functions} />
      <Activities {...json.activities}/>
      <WorkFlow {...json.workflow} />
      <Risks data={json.risks} />
    </div>
      );
    }
export default MarketingPage;
