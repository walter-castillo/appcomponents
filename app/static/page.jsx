export const metadata = {
      title: 'Página Estática con Fecha',
      description: 'Generada en tiempo de build con fecha y segundos.',
    };
    
    export default function StaticTimePage() {
     
    
      return (
        <main style={{ padding: 24 }}>
          <h1>Página Estática{ new Date().toLocaleTimeString('es-AR')}</h1>
          <p>⏳ Esta página fue generada en el build.</p>
     
        </main>
      );
    }