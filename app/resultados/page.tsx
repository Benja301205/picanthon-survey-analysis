import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, TrendingUp, Heart, Lightbulb, MessageSquare } from "lucide-react"

export default function ResultadosPage() {
  // Datos mock que simularían el análisis de IA desde Google Sheets
  const stats = {
    topTemas: [
      { tema: "Networking y conexiones", menciones: 87 },
      { tema: "Calidad de los speakers", menciones: 76 },
      { tema: "Organización del evento", menciones: 64 },
    ],
    volveriaParticipacion: {
      si: 78,
      talVez: 18,
      no: 4,
    },
    sugerenciasRecurrentes: [
      "Más tiempo para networking",
      "Mejor señalización en el venue",
      "Más opciones de comida",
      "Workshops más interactivos",
    ],
    testimoniosDestacados: [
      "Una experiencia increíble que superó mis expectativas. El nivel de los speakers fue excepcional.",
      "Me encantó la energía del evento y las conexiones que pude hacer. Definitivamente volvería.",
      "Excelente organización y contenido de calidad. Solo mejoraría los tiempos de los breaks.",
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#370d0d] via-[#1c0e0e] to-black py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-[#CCCCCC] hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>

          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Resultados de la Picanthón</h1>
            <p className="text-[#CCCCCC] text-lg">Análisis en tiempo real de todas las respuestas recibidas</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Top 3 Temas */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center text-[#370d0d]">
                <TrendingUp className="w-5 h-5 mr-2" />🔥 Top 3 Temas Más Mencionados
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {stats.topTemas.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{item.tema}</span>
                    <span className="text-red-600 font-bold">{item.menciones}%</span>
                  </div>
                  <Progress value={item.menciones} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Participación */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center text-[#370d0d]">
                <Heart className="w-5 h-5 mr-2" />
                ❤️ ¿Volverían a Participar?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Sí, definitivamente</span>
                  <span className="text-green-600 font-bold">{stats.volveriaParticipacion.si}%</span>
                </div>
                <Progress value={stats.volveriaParticipacion.si} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Tal vez</span>
                  <span className="text-yellow-600 font-bold">{stats.volveriaParticipacion.talVez}%</span>
                </div>
                <Progress value={stats.volveriaParticipacion.talVez} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">No creo</span>
                  <span className="text-red-600 font-bold">{stats.volveriaParticipacion.no}%</span>
                </div>
                <Progress value={stats.volveriaParticipacion.no} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sugerencias y Testimonios */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sugerencias */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center text-[#370d0d]">
                <Lightbulb className="w-5 h-5 mr-2" />💡 Sugerencias Recurrentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {stats.sugerenciasRecurrentes.map((sugerencia, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{sugerencia}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Testimonios */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center text-[#370d0d]">
                <MessageSquare className="w-5 h-5 mr-2" />📝 Testimonios Destacados
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {stats.testimoniosDestacados.map((testimonio, index) => (
                <blockquote key={index} className="border-l-4 border-red-500 pl-4 italic text-gray-600">
                  "{testimonio}"
                </blockquote>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-[#CCCCCC] mb-6 text-lg">¡Gracias por tu feedback! Nos ayuda a mejorar cada edición.</p>
          <Link href="/formulario">
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105">
              Enviar otra respuesta
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
