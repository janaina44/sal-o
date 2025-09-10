import "./Pacotes.css";

function Pacotes() {
  return (
    <section className="pacotes" id="pacotes">
      <div className="container">
        <h2 className="pacotes__titulo">Promoções</h2>

        <div className="pacotes__grid">
          <div className="pacote__card">
            <h3>Dia Dela</h3>
            <p>
                <ul>
                <li>Designer de Sobrancelhas</li>
                <li>Brow Lamination</li>
                <li>Lash Lifting</li>
                <li>Maquiagem completa</li>
                </ul>
            </p>
           
            <a
              href="https://wa.me/554498616334?text=Olá! Gostaria de saber mais sobre o Pacote Noiva."
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Reservar
            </a>
          </div>

          <div className="pacote__card">
            <h3>Mensal</h3>
            <p>
              <ul>
              <li>Designer de Sobrancelhas</li>
              <li>Lash Lifting</li>
              <li>Brow Lamination</li>
              </ul>
            </p>
            
            <a
              href="https://wa.me/554498616334?text=Olá! Gostaria de saber mais sobre o Pacote Dia da Beleza."
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Reservar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pacotes;
