import InfoCard from "@/components/InfoCard";
import LinkButton from "@/components/LinkButton";
import { CardData } from "@/types/CardData";

function Functions({data, docUrl}: {data: CardData[], docUrl: string}) {
  return (
    <div className="m-10">
      <div className="grid grid-cols-3 gap-5 w-full">
        {data.map((pin, index) => (
          <InfoCard key={index} title={pin.title} desc={pin.desc} />
        ))}
      </div>
      <div className="my-10 w-full flex justify-center">
        <LinkButton text="Manual de Funciones" href={docUrl} />
      </div>
    </div>
  );
}

export default Functions;
