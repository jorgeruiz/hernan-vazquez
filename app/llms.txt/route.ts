import { NextResponse } from "next/server"

const CONTENT = `# Dr. Hernán Vázquez González — Reumatólogo en Monterrey

> Médico reumatólogo certificado por el Colegio Mexicano de Reumatología.
> 12 años como reumatólogo, 14 como internista.
> Tesorero de la Mesa Directiva del Colegio Mexicano de Reumatología.
> Cédulas profesionales: 5563127, 7440332, 09076347.

## Consultorios

- Hospital Christus Muguerza Sur, Piso 6, Consultorio 616, Monterrey, N.L.
  Único reumatólogo en la zona sur de Monterrey.
- CARE Medical Hub, Bolivia 103, Piso 12, Consultorio 14, Balcones de Galerías, Monterrey, N.L. 64620.

## Contacto

- Citas: 81 8317 8342
- WhatsApp: 81 2565 6698
- Urgencias: 81 2040 5582
- Web: https://reumamonterrey.com

## Páginas principales

- Inicio: https://reumamonterrey.com/
- Dr. Hernán Vázquez González: https://reumamonterrey.com/dr-hernan-vazquez-gonzalez
- Christus Muguerza Sur: https://reumamonterrey.com/consultorios/christus-muguerza-sur
- CARE Medical Hub: https://reumamonterrey.com/consultorios/care-medical-hub
- Consultorios: https://reumamonterrey.com/consultorios
- Enfermedades: https://reumamonterrey.com/enfermedades

## Enfermedades que trata

- Artritis reumatoide: https://reumamonterrey.com/enfermedades/artritis-reumatoide
- Lupus eritematoso sistémico: https://reumamonterrey.com/enfermedades/lupus
- Fibromialgia: https://reumamonterrey.com/enfermedades/fibromialgia
- Gota: https://reumamonterrey.com/enfermedades/gota
- Osteoporosis: https://reumamonterrey.com/enfermedades/osteoporosis
- Espondilitis anquilosante: https://reumamonterrey.com/enfermedades/espondilitis-anquilosante
- Artrosis (osteoartritis): https://reumamonterrey.com/enfermedades/artrosis

## Formación

- Médico Cirujano Partero — Universidad Autónoma de Nuevo León (UANL)
- Medicina Interna — Universidad Nacional Autónoma de México (UNAM)
- Reumatología — Universidad Nacional Autónoma de México (UNAM)
- Certificado por el Colegio Mexicano de Reumatología

## Perfiles verificados

- Doctoralia: https://www.doctoralia.com.mx/hernan-vazquez-gonzalez/internista-reumatologo/nuevo-leon
- Top Doctors: https://www.topdoctors.mx/doctor/hernan-vazquez-gonzalez/
`

export async function GET() {
  return new NextResponse(CONTENT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}
