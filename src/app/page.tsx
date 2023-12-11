"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

export default function Home() {
  const [barraLateralAberta, setBarraLateralAberta] = useState(true)

  const toggleBarraLateral = () => {
    setBarraLateralAberta(!barraLateralAberta)
  }
  return (
    <>
      <div className="flex flex-col min-h-scree gap">
        <nav className="bg-[#202020] p-2 flex items-center justify-between ">
          <div className="flex items-center gap-2">
            <button onClick={toggleBarraLateral}>
              {barraLateralAberta ? "Fechar Barra" : "Abrir Barra "}
            </button>
            <span className=" font-bold bg-[#ff4747] text-white">YouTube</span>
            <span className="text-white font-bold">BR</span>
          </div>
          <div className="flex items-center bg-[#121212] rounded-lg overflow-hidden">
            <input
              className="bg-transparent px-4 py-2 text-white outline-none"
              placeholder="Search"
              type="search"
            />
          </div>
        </nav>

        <div className="flex flex-1">
          {barraLateralAberta && (
            <nav className="bg-[#202020] text-white w-[150px] flex flex-col items-center py-4 space-y-2">
              <Link
                className="block px-3 py-2 rounded-md bg-[#373737] text-sm font-medium"
                href="#"
              >
                Home
              </Link>
              <Link className="block px-3 py-2 text-sm font-medium" href="#">
                Shorts
              </Link>
              <Link className="block px-3 py-2 text-sm font-medium" href="#">
                Subscriptions
              </Link>
              <div className="border-t border-gray-700 my-2 w-full" />
              <div className="w-full">
                <Link className="block px-3 py-2 text-sm font-medium" href="#">
                  Your channel
                </Link>
                <Link className="block px-3 py-2 text-sm font-medium" href="#">
                  History
                </Link>
                <Link className="block px-3 py-2 text-sm font-medium" href="#">
                  Your videos
                </Link>
                <Link className="block px-3 py-2 text-sm font-medium" href="#">
                  Watch later
                </Link>
                <Link className="block px-3 py-2 text-sm font-medium" href="#">
                  Liked videos
                </Link>
              </div>
              <div className="border-t border-gray-700 my-2 w-full" />
              <div className="w-full">
                <p className="px-3 py-2 text-sm font-semibold">Subscriptions</p>
                <Link className="block px-3 py-2 text-sm font-medium" href="#">
                  Felps LIVE
                </Link>
                <Link className="block px-3 py-2 text-sm font-medium" href="#">
                  mount lives
                </Link>
                <Link className="block px-3 py-2 text-sm font-medium" href="#">
                  Rocketseat
                </Link>
                <Link className="block px-3 py-2 text-sm font-medium" href="#">
                  Filipe Deschamps
                </Link>
                <Link className="block px-3 py-2 text-sm font-medium" href="#">
                  Flow Games
                </Link>
                <Link className="block px-3 py-2 text-sm font-medium" href="#">
                  Lucas Montano
                </Link>
                <Link className="block px-3 py-2 text-sm font-medium" href="#">
                  Thebausffs
                </Link>
                <Link className="block px-3 py-2 text-sm font-medium" href="#">
                  Show 36 more
                </Link>
              </div>
            </nav>
          )}

          <main className="p-6 gap-6 grid-cols-3 grid bg-zinc-800">
            <iframe
              className="rounded-lg"
              width="100%"
              height="25%" // Ajuste a altura conforme necessário
              src="https://www.youtube-nocookie.com/embed/QBfGktFlfr4?si=3tjevDDyrhBrahRj"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <h1>Conteúdo Principal</h1>
          </main>
        </div>
      </div>
    </>
  )
}
