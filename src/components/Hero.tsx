import "./Hero.css";
import heroDesktop from "../assets/Hero.jpg";

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${heroDesktop})` }} // imagem como background
    >
      <div className="hero__overlay">
        <div className="container hero__content">
          <h1>Realce sua Beleza Natural ✨</h1>
          <p>Transforme seu visual.</p>
          <a href="#agendamento" className="btn">
            Agende seu horário
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
