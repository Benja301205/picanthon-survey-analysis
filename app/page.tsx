import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#370d0d] via-[#1c0e0e] to-black flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Contanos cómo viviste la Picanthón
          </h1>

          <p className="text-xl md:text-2xl text-[#CCCCCC] mb-12 leading-relaxed">
            Queremos entender qué funcionó y qué mejorar para la próxima edición.
          </p>

          <Link href="/formulario">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Responder encuesta
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer with logos */}
      <footer className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">🌶️</span>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">🔥</span>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">💡</span>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">🚀</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
