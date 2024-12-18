import InfoCard from "@/components/InfoCard"
import LinkButton from "@/components/LinkButton"
const recomendaciones = [
  {
    t: "Priorizar la innovación continua",
    mit: "Dedicar recursos para la investigación y desarrollo (I+D) permitirá mantener la ventaja competitiva en un mercado tecnológico en constante evolución."
  },
  {
    t: "Fortalecer la seguridad",
    mit: "Invertir en herramientas y capacitación avanzada en ciberseguridad para garantizar la protección de datos y la confianza de los clientes."
  },
  {
    t: "Optimizar la comunicación interna",
    mit: "Implementar metodologías ágiles y herramientas de colaboración para garantizar la alineación de todos los equipos con los objetivos del proyecto."
  },
  {
    t: "Monitorear y evaluar regularmente",
    mit: "Realizar auditorías periódicas sobre los procesos tecnológicos y las prácticas de sostenibilidad para identificar áreas de mejora y medir el impacto de las estrategias adoptadas."
  },
  {
    t: "Fomentar la resiliencia",
    mit: "Diseñar estrategias para anticipar riesgos y adaptarse rápidamente a los cambios en el entorno tecnológico o económico global."
  }
];

const ConclusionPage = () => {
  return (
    <div>
      <div className="my-10 w-full flex justify-center">
        <LinkButton text="Análisis de Costos" href="https://docs.google.com/spreadsheets/d/1gzJCoyaO5LwtCdwaxOiteMBykfsYbf-f" />
      </div>
      <div className="my-10 w-full flex justify-center">
        <LinkButton text="Plan de Sostenibilidad" href="https://docs.google.com/document/d/183nQUIZVL3dA8zflRTwW9RsMlIjZHWlis-3srGNE3hw" />
      </div>
      <div className="grid grid-cols-2 m-5 gap-5">
        <InfoCard title={"Conclusiones"} desc={"CoreWeb ha establecido una base sólida para convertirse en una empresa líder en el desarrollo de soluciones digitales innovadoras, al combinar tecnología avanzada con una visión estratégica orientada al crecimiento sostenible. El enfoque en áreas clave como el desarrollo de software de alta calidad, la automatización de procesos y la sostenibilidad tecnológica asegura que la empresa esté preparada para responder a las demandas del mercado y superar las expectativas de sus clientes."} />
        <div
          className="border-white border p-4 rounded-2xl cursor-pointer flex-1"
        >
          <h3 className="mt-2 text-xl text-white font-medium text-center">Recomendaciones</h3>
          {recomendaciones.map((pin, index) => (
            <p key={index} className="text-white text-sm m-4 font-light"><strong>{pin.t}:</strong> {pin.mit}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ConclusionPage