import productos from "@/data/data"
import Link from "next/link"

const page = () => {
  return (
    <div>
               {productos.map((producto) =>  (
                        <div key={producto.id} className="border p-4 mb-4">
                            <Link href={`/products/${producto.id}`}>
                                <p className="text-sm text-gray-500">
                                    ID: {producto.id} - {producto.titulo} - ${producto.precio.toFixed(2)}
                                </p>
                            </Link>
                            <br />
                        </div>
                    ))
                }
    </div>
  )
}

export default page