import Navegacion from "../componentes/Navegacion";

export default function Principal() {
    return(
        <>
            <Navegacion/>
            <header className="mx-auto max-w-[1600px] grid grid-cols-2 items-center gap-40 p-14">
                <p className="text-blue-800 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus pariatur iure sed culpa esse, totam assumenda quibusdam, iusto laudantium autem dolor odio repellendus neque adipisci numquam? Eius non maiores, soluta minus, rerum officia illo libero doloribus optio modi similique? Praesentium molestias quo facilis ipsum reiciendis explicabo ipsam illum esse ut!</p>
                <picture>
                    <img src="hospital.jpg" alt="hospital" className="max-w-lg rounded-md"/>
                </picture>
            </header>
            <main className="bg-blue-800 w-full">
                <div className="mx-auto max-w-[1600px] p-14 grid grid-cols-4 gap-5">
                    <h1 className="font-extrabold text-5xl text-white text-pretty">Elige tu médico y pide <span className="text-yellow-300">cita</span></h1>
                    <article className="bg-white h-96 w-80 rounded-3xl">
                        <div className="flex flex-col items-center h-full p-5">
                            <picture className="h-2/3">
                                <img src="medico.png" alt="medico" className="h-full"/>
                            </picture>
                            <div className="flex flex-col justify-between h-full">
                                <h4 className="text-blue-800 font-bold text-2xl text-center mt-4">Carlos Lobo</h4>
                                <button className="bg-yellow-300 px-5 py-3 rounded-xl">Pedir cita</button>
                            </div>
                        </div>
                    </article>
                    <article className="bg-white h-96 w-80 rounded-3xl">
                        <div className="flex flex-col items-center h-full p-5">
                            <picture className="h-2/3">
                                <img src="medico.png" alt="medico" className="h-full"/>
                            </picture>
                            <div className="flex flex-col justify-between h-full">
                                <h4 className="text-blue-800 font-bold text-2xl text-center mt-4">Carlos Lobo</h4>
                                <button className="bg-yellow-300 px-5 py-3 rounded-xl">Pedir cita</button>
                            </div>
                        </div>
                    </article>
                    <article className="bg-white h-96 w-80 rounded-3xl">
                        <div className="flex flex-col items-center h-full p-5">
                            <picture className="h-2/3">
                                <img src="medico.png" alt="medico" className="h-full"/>
                            </picture>
                            <div className="flex flex-col justify-between h-full">
                                <h4 className="text-blue-800 font-bold text-2xl text-center mt-4">Carlos Lobo</h4>
                                <button className="bg-yellow-300 px-5 py-3 rounded-xl">Pedir cita</button>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </>
    )
}