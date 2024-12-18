const InfoCard = ({ title, desc }: { title: string, desc: string }) => {
  return (
    <div
      className="border-white border p-4 rounded-2xl cursor-pointer"
    >
      <h3 className="mt-2 text-xl text-white font-medium text-center">{title}</h3>
      <p className="text-center text-white m-4 font-light">{desc}</p>
    </div>
  )
}

export default InfoCard