import InfoCard from "@/components/InfoCard";
import LinkButton from "@/components/LinkButton";
import { CardData } from "@/types/CardData";
import Image from "next/image";
import workflow from "@/assets/workflow.webp";

function WorkFlow({tools, diagramUrl, docUrl}: {tools: CardData[], diagramUrl: string, docUrl: string}) {
  return (
    <div className="flex flex-col px-5">
      <label className="text-white font-semibold text-2xl w-full text-center mb-5">
        Este es nuestro flujo de trabajo
      </label>
      <div className="flex space-x-5 w-full justify-center">
        <Image src={workflow} height={400} width={800} alt="Un diag BPWin0 :D" />
      </div>
      <div className="flex w-full justify-center my-5">
        <LinkButton text="Diagrama de Procesos" href={diagramUrl} />
      </div>
      <div className="flex flex-col px-5">
        <label className="text-white font-semibold text-2xl my-6 w-full text-center">
          Estas son nuestras principales herramientas
        </label>
        <div className="grid grid-cols-3 gap-5 w-full">
          {tools.map((pin, index) => (
            <InfoCard key={index} title={pin.title} desc={pin.desc} />
          ))}
        </div>
      </div>
      <div className="flex w-full justify-center my-5">
        <LinkButton text="Cronograma" href={docUrl} />
      </div>
    </div>
  );
}

export default WorkFlow;
