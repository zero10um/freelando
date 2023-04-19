import { ThemeProvider } from "@emotion/react";
import { Card } from "./componentes/EstilosGlobais/Card/Card";
import { Estilos } from "./componentes/EstilosGlobais/Estilos";

function App() {
  return (
    <ThemeProvider>
      <Estilos />
      <Card>
      <h1>Freelando</h1>
      </Card>
    </ThemeProvider>
  );
}

export default App;
