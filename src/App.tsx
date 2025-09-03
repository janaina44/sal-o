import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Galeria from "./components/Galeria";
import Pacotes from "./components/Pacotes";
import Agendamento from "./components/Agendamento";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Sobre />
        <Servicos />
        <Galeria />
        <Pacotes />
        <Agendamento />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

export default App;



