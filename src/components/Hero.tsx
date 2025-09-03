import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__overlay">
        <div className="container hero__content">
          <h1>Realce sua Beleza Natural ✨</h1>
          <p>Transforme seu visual com nossos serviços de estética e maquiagem.</p>
          <a href="#agendamento" className="btn">Agende seu horário</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
