import InfoCard from "@/components/InfoCard"
import LinkButton from "@/components/LinkButton"

const ConclusionPage = () => {
  return (
    <div>
      <div className="my-10 w-full flex justify-center">
        <LinkButton text="Análisis de Costos" href="https://docs.google.com/spreadsheets/d/1gzJCoyaO5LwtCdwaxOiteMBykfsYbf-f" />
      </div>
      <div className="my-10 w-full flex justify-center">
        <LinkButton text="Plan de Sostenibilidad" href="https://docs.google.com/document/d/183nQUIZVL3dA8zflRTwW9RsMlIjZHWlis-3srGNE3hw" />
      </div>
      <div className="flex m-5 gap-5">
        <InfoCard title={"Conclusiones"} desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quia laboriosam deserunt. Maxime libero nobis deleniti facilis voluptas eaque quam suscipit atque a voluptatem voluptatum amet, quo, quidem, enim et?"} />
        <InfoCard title={"Recomendaciones"} desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quia laboriosam deserunt. Maxime libero nobis deleniti facilis voluptas eaque quam suscipit atque a voluptatem voluptatum amet, quo, quidem, enim et?"} />
      </div>
    </div>
  )
}

export default ConclusionPage