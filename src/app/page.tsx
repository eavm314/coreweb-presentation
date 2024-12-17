export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-10">
      <div className="w-full flex flex-col items-center justify-between">
        <div className="max-w-3xl mx-auto p-8 bg-slate-200 rounded-lg drop-shadow-[5px_5px_5px_#000000]">
          <h1 className="text-4xl font-bold mb-6">
            CoreWeb
          </h1>
          <div className="text-lg mb-4">
            <h2 className="font-bold mb-2">Integrantes:</h2>
            <ul className="text-slate-800 list-disc px-5">
              <li>Pablo Acker</li>
              <li>Brenda Alvarado</li>
              <li>Jhosias Laguna</li>
              <li>Enrique Vicente</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
