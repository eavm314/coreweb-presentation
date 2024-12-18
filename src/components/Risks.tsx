
function Risks({ data }: { data: any[] }) {
  return (
    <div className="flex flex-col px-5">
      <label className="text-white font-semibold text-2xl w-full text-center mb-5">
        Gestión de Riesgos
      </label>
      <div className="grid grid-cols-3 gap-5 w-full mb-5">
        {data.map((pin, index) => (
          <div key={index}
            className="border-white border p-4 rounded-2xl cursor-pointer"
          >
            <h3 className="mt-2 text-xl text-white font-medium text-center">{pin.title}</h3>
            <p className="text-white text-sm m-4 font-light"><strong>Mitigación:</strong><br /> {pin.mit}</p>
            <p className="text-white text-sm m-4 font-light"><strong>Plan de Contingencia:</strong><br /> {pin.plan}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Risks;
