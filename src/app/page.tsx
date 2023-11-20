import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="bg-zinc-950 text-white p-4 text-center">
          <h1 className="text-2xl font-bold">YouTube Clone</h1>
        </header>

        <nav className="bg-zinc-950 p-4 text-white flex justify-between">
          <div>
            <a className="hover:text-gray-300" href="#">
              Início
            </a>
            <a className="hover:text-gray-300" href="#">
              Explorar
            </a>
            <a className="hover:text-gray-300" href="#">
              Inscrições
            </a>
          </div>
          <div>
            <a className="hover:text-gray-300" href="#">
              Biblioteca
            </a>
            <a className="hover:text-gray-300" href="#">
              Histórico
            </a>
            {/* Adicione mais links conforme necessário */}
          </div>
        </nav>

        <div className="flex flex-1">
          <aside className="w-1/4 bg-zinc-950 p-6">
            {/* Conteúdo da barra lateral aqui */}
            <h1 className="text-white">Barra Lateral</h1>
          </aside>

          <main className=" p-6 gap-6 grid-cols-3 grid bg-zinc-950">
            {/* Conteúdo principal aqui */}
            
              <iframe
                className="rounded-lg"
                width=""
                height=""
                src="https://www.youtube-nocookie.com/embed/QBfGktFlfr4?si=3tjevDDyrhBrahRj"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             
              ></iframe>
            <iframe
              className="rounded-lg"
              width=""
              height=""
              src="https://www.youtube-nocookie.com/embed/QBfGktFlfr4?si=3tjevDDyrhBrahRj"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           
            ></iframe>
            <iframe
              className="rounded-lg"
              width=""
              height=""
              src="https://www.youtube-nocookie.com/embed/QBfGktFlfr4?si=3tjevDDyrhBrahRj"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           
            ></iframe>
            <iframe
              className="rounded-lg"
              width=""
              height=""
              src="https://www.youtube-nocookie.com/embed/QBfGktFlfr4?si=3tjevDDyrhBrahRj"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             
            ></iframe>
            <iframe
              className="rounded-lg"
              width=""
              height=""
              src="https://www.youtube-nocookie.com/embed/QBfGktFlfr4?si=3tjevDDyrhBrahRj"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              
            ></iframe>

            <h1>Conteúdo Principal</h1>
          </main>
        </div>
      </div>
    </>
  );
}
