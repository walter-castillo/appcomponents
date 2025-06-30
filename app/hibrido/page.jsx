import Counter from '@/components/Counter';

export const metadata = {
      title: 'Contador Híbrido 🔁 - Next.js 15',
      description: 'Ejemplo de un componente que combina server-render y lógica interactiva en el cliente.',
    };
    

export default function Page() {
      return (
        <main>
          <h1>🧪 Componente Híbrido</h1>
          <Counter />
        </main>
      );
    }