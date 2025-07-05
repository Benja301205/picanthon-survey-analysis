"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Send } from "lucide-react"
import Link from "next/link"

export default function FormularioPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    probabilidadVolver: "",
    calificacionLugar: "",
    calificacionComida: "",
    experienciaMentores: "",
    calificacionMiniGames: "",
    mantendria: "",
    cambiaria: "",
    agregaria: "",
    consignaOutput: "",
    dinamicaPitch: "",
    decisionJueces: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // URL del webhook de N8n
    const webhookUrl = "/api/submit-feedback"

    try {
      console.log("Enviando datos:", formData)
      console.log("https://augustus2425.app.n8n.cloud/webhook-test/picanthon-survey", webhookUrl)

      // Enviar directamente al webhook de N8n
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      console.log("Respuesta del servidor:", response.status, response.statusText)

      if (response.ok) {
        const responseData = await response.text()
        console.log("Datos de respuesta:", responseData)
        console.log("Datos enviados a N8n con éxito.")
        // Redirigir a resultados después del envío exitoso
        router.push("/resultados")
      } else {
        const errorText = await response.text()
        console.error("Error del servidor:", response.status, errorText)
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      }
    } catch (error) {
      console.error("Error detallado:", error)

      // Mostrar error más específico
      if (error.name === "TypeError" && error.message.includes("fetch")) {
        alert(
          "Error de conexión: No se pudo conectar con el servidor N8n. Verifica que esté corriendo en localhost:5678",
        )
      } else if (error.message.includes("CORS")) {
        alert("Error CORS: El servidor N8n necesita permitir conexiones desde el navegador")
      } else {
        alert(`Error al enviar la respuesta: ${error.message}. Revisa la consola para más detalles.`)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#370d0d] via-[#1c0e0e] to-black py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-components text-[#CCCCCC] hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Tu opinión nos importa</h1>
          <p className="text-[#CCCCCC] text-lg">Ayudanos a hacer la próxima Picanthón aún mejor</p>
        </div>

        {/* Form */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
          <CardHeader>
            <CardTitle className="text-red-900">Encuesta de Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Pregunta 1 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Del 1 al 5 ¿cuán probable es que vuelvas a anotarte a la segunda edición de la Picanthón?
                </label>
                <Select
                  value={formData.probabilidadVolver}
                  onValueChange={(value) => handleInputChange("probabilidadVolver", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una calificación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 - Muy improbable</SelectItem>
                    <SelectItem value="2">2 - Improbable</SelectItem>
                    <SelectItem value="3">3 - Neutral</SelectItem>
                    <SelectItem value="4">4 - Probable</SelectItem>
                    <SelectItem value="5">5 - Muy probable</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Pregunta 2 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Del 1 al 5 ¿qué te pareció el lugar?
                </label>
                <Select
                  value={formData.calificacionLugar}
                  onValueChange={(value) => handleInputChange("calificacionLugar", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una calificación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 - Muy malo</SelectItem>
                    <SelectItem value="2">2 - Malo</SelectItem>
                    <SelectItem value="3">3 - Regular</SelectItem>
                    <SelectItem value="4">4 - Bueno</SelectItem>
                    <SelectItem value="5">5 - Excelente</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Pregunta 3 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Del 1 al 5 ¿qué te pareció la comida?
                </label>
                <Select
                  value={formData.calificacionComida}
                  onValueChange={(value) => handleInputChange("calificacionComida", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una calificación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 - Muy mala</SelectItem>
                    <SelectItem value="2">2 - Mala</SelectItem>
                    <SelectItem value="3">3 - Regular</SelectItem>
                    <SelectItem value="4">4 - Buena</SelectItem>
                    <SelectItem value="5">5 - Excelente</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Pregunta 4 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Del 1 al 5 ¿cómo fue la experiencia de tu grupo con los mentores?
                </label>
                <Select
                  value={formData.experienciaMentores}
                  onValueChange={(value) => handleInputChange("experienciaMentores", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una calificación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 - Muy mala</SelectItem>
                    <SelectItem value="2">2 - Mala</SelectItem>
                    <SelectItem value="3">3 - Regular</SelectItem>
                    <SelectItem value="4">4 - Buena</SelectItem>
                    <SelectItem value="5">5 - Excelente</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Pregunta 5 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Del 1 al 5 ¿qué te parecieron los mini games?
                </label>
                <Select
                  value={formData.calificacionMiniGames}
                  onValueChange={(value) => handleInputChange("calificacionMiniGames", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una calificación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 - Muy malos</SelectItem>
                    <SelectItem value="2">2 - Malos</SelectItem>
                    <SelectItem value="3">3 - Regulares</SelectItem>
                    <SelectItem value="4">4 - Buenos</SelectItem>
                    <SelectItem value="5">5 - Excelentes</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Pregunta 6 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ¿Qué mantendrías de la hackathon? ¿Qué fue lo que más te gustó?
                </label>
                <Textarea
                  value={formData.mantendria}
                  onChange={(e) => handleInputChange("mantendria", e.target.value)}
                  placeholder="Lo que más me gustó y mantendría es..."
                  className="min-h-[100px]"
                  required
                />
              </div>

              {/* Pregunta 7 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ¿Qué cambiarías de la hackathon? ¿Qué fue lo que menos te gustó?
                </label>
                <Textarea
                  value={formData.cambiaria}
                  onChange={(e) => handleInputChange("cambiaria", e.target.value)}
                  placeholder="Lo que cambiaría es..."
                  className="min-h-[100px]"
                  required
                />
              </div>

              {/* Pregunta 8 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">¿Qué agregarías a la Picanthón?</label>
                <Textarea
                  value={formData.agregaria}
                  onChange={(e) => handleInputChange("agregaria", e.target.value)}
                  placeholder="Agregaría..."
                  className="min-h-[100px]"
                  required
                />
              </div>

              {/* Pregunta 9 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Del 1 al 5 ¿qué te pareció la consigna y el output esperado?
                </label>
                <Select
                  value={formData.consignaOutput}
                  onValueChange={(value) => handleInputChange("consignaOutput", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una calificación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 - Muy confusa</SelectItem>
                    <SelectItem value="2">2 - Confusa</SelectItem>
                    <SelectItem value="3">3 - Regular</SelectItem>
                    <SelectItem value="4">4 - Clara</SelectItem>
                    <SelectItem value="5">5 - Muy clara</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Pregunta 10 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Del 1 al 5 ¿qué te pareció la dinámica del pitch / pregunta de mentores? ¿Pudieron transmitir lo que
                  habían creado?
                </label>
                <Select
                  value={formData.dinamicaPitch}
                  onValueChange={(value) => handleInputChange("dinamicaPitch", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una calificación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 - Muy mala</SelectItem>
                    <SelectItem value="2">2 - Mala</SelectItem>
                    <SelectItem value="3">3 - Regular</SelectItem>
                    <SelectItem value="4">4 - Buena</SelectItem>
                    <SelectItem value="5">5 - Excelente</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Pregunta 11 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Del 1 al 5 ¿qué te pareció la decisión final de los jueces?
                </label>
                <Select
                  value={formData.decisionJueces}
                  onValueChange={(value) => handleInputChange("decisionJueces", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una calificación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 - Muy injusta</SelectItem>
                    <SelectItem value="2">2 - Injusta</SelectItem>
                    <SelectItem value="3">3 - Regular</SelectItem>
                    <SelectItem value="4">4 - Justa</SelectItem>
                    <SelectItem value="5">5 - Muy justa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white hover:bg-gray-100 text-black rounded-full py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar respuesta
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
