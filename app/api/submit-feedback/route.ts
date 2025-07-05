import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    console.log("Datos recibidos en API route:", formData)

    // URL del webhook de N8n
    const n8nWebhookUrl = "https://augustus2425.app.n8n.cloud/webhook-test/picanthon-survey"

    console.log("Enviando a N8n:", n8nWebhookUrl)

    const response = await fetch(n8nWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    console.log("Respuesta de N8n:", response.status, response.statusText)

    if (response.ok) {
      const responseData = await response.text()
      console.log("Respuesta exitosa de N8n:", responseData)

      return NextResponse.json({
        success: true,
        message: "Feedback enviado correctamente a N8n",
      })
    } else {
      const errorText = await response.text()
      console.error("Error de N8n:", errorText)

      return NextResponse.json(
        {
          success: false,
          message: `Error de N8n: ${response.status} ${response.statusText}`,
        },
        { status: response.status },
      )
    }
  } catch (error) {
    console.error("Error en API route:", error)
    return NextResponse.json(
      {
        success: false,
        message: `Error interno: ${error.message}`,
      },
      { status: 500 },
    )
  }
}
