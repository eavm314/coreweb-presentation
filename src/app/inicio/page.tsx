import Image from "next/image";

import iniciall from "@/assets/iniciall.jpeg";
// import workflow from "@/assets/workflow.jpeg";
// import mapa from "@/assets/mapa.jpeg";
import InfoCard from "@/components/InfoCard";
import LinkButton from "@/components/LinkButton";
import { title } from "process";
import Risks from "@/components/Risks";

const data = [
  {
    title: "¿Quiénes Somos?",
    desc: "Somos CoreWeb, una startup tecnológica dedicada a desarrollar soluciones digitales innovadoras que impulsan el crecimiento y la competitividad de nuestros clientes en el mundo digital. Trabajamos bajo una filosofía de mejora continua, flexibilidad y colaboración, permitiendo que cada proyecto se convierta en una oportunidad para mejorar y aprender junto a nuestros clientes."
  },
  {
    title: "Misión",
    desc: "Transformar ideas en experiencias digitales de alta calidad, ayudando a nuestros clientes a destacar en el mundo digital mediante soluciones innovadoras, personalizadas y orientadas a resultados. Promovemos una colaboración continua que impulsa el aprendizaje mutuo y la mejora constante en cada proyecto."
  },
  {
    title: "Visión",
    desc: "Ser reconocidos como líderes globales en el desarrollo de soluciones digitales innovadoras, estableciendo nuevos estándares de calidad y adaptabilidad, mientras fomentamos un impacto positivo y sostenible en el éxito digital de nuestros clientes."
  },
];

const risks = [
  {
    title: "Brechas de Seguridad",
    mit: "Implementar políticas robustas de ciberseguridad basadas en normativas ISO 27001.",
    plan: "Activar un plan de respuesta a incidentes de seguridad para contener, mitigar y recuperar el sistema."
  },
  {
    title: "Fallos en Infraestructura Tecnológica",
    mit: "Implementar redundancias y sistemas de respaldo en servidores. Migrar infraestructuras críticas a servicios en la nube con alta disponibilidad (AWS, Azure).",
    plan: "Migrar operaciones a servidores de respaldo o activar servicios en la nube alternativos."
  },
  {
    title: "Falta de Recursos Humanos Capacitados",
    mit: "Implementar programas de formación y capacitación continua para el equipo.",
    plan: "Contratar personal externo de forma temporal o implementar procesos de subcontratación de servicios."
  },
  {
    title: "Problemas de Comunicación Interna",
    mit: "Realizar reuniones semanales de seguimiento entre áreas. Desarrollar un plan de comunicación interna estandarizado para garantizar la fluidez de la información.",
    plan: "Convocar reuniones urgentes entre equipos clave y reforzar el uso de canales de comunicación."
  },
  {
    title: "Retrasos en Entregas de Proyectos",
    mit: "Implementar metodologías ágiles (Scrum, Kanban) para mejorar la organización y el control del tiempo.",
    plan: "Reasignar recursos adicionales al proyecto afectado y ajustar las prioridades del equipo."
  },
];

const InicioPage = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <Image
          src={iniciall}
          alt="Aqui va una imagen chida :D"
          className=" shadow-md rounded-lg w-screen"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 w-full p-4">
        {data.map((pin, index) => (
          <InfoCard key={index} title={pin.title} desc={pin.desc} />
        ))}
      </div>
      <div className="flex w-full justify-around my-5">
        <div className="flex flex-col">
          <label className="text-white font-semibold text-2xl text-center"> Flujo de Trabajo</label>
          <div className="w-full h-fit flex justify-center">
            <Image
              src={""}
              alt="Aqui va una imagen chida :D"
              className=" shadow-md rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col w-full">
            <label className="text-white font-semibold text-2xl text-center"> Mapa Jerárquico</label>
            <div className="h-fit w-full flex justify-center">
              <Image
                src={""}
                alt="Aqui va una imagen chida :D"
                className=" shadow-md rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <Risks data={risks} />
      <div className="flex w-full justify-center my-5">
        <LinkButton text="Gestión de riesgos" href="https://docs.google.com/document/d/1RFxIpdJDFmnlkQ990ZxvKRI_4Muu4LXS_1vbSmEbL9A" />
      </div>
    </>
  );
};

export default InicioPage;
