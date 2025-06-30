'use client'
import productos from "@/data/data"
import { useRouter } from "next/navigation"

const Page = ({ params }) => {
  const router = useRouter()
  const productoencontrado = productos.find(
    (producto) => producto.id === parseInt(params.id)
  )

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <p>
        {productoencontrado.id} - {productoencontrado.titulo} - {productoencontrado.descripcion} - {productoencontrado.precio}
      </p>
      <button
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          background: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
        onClick={() => router.back()}
      >
        Volver
      </button>
    </div>
  )
}

export default Page