import InfoCard from "@/components/InfoCard";
import LinkButton from "@/components/LinkButton";
import { CardData } from "@/types/CardData";

function Activities({data, docUrl}: {data: CardData[], docUrl: string}) {
  return (
    <div className="flex flex-col px-5">
      <label className="text-white font-semibold text-2xl w-full text-center mb-5">
        Estas son nuestras principales actividades
      </label>
      <div className="grid grid-cols-3 gap-5 w-full">
        {data.map((pin, index) => (
          <InfoCard key={index} title={pin.title} desc={pin.desc} />
        ))}
      </div>
      <div className="my-10 w-full flex justify-center">
        <LinkButton text="Manual de Actividades" href={docUrl} />
      </div>
    </div>
  );
}

export default Activities;
