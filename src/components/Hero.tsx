import "./Hero.css";
import heroDesktop from "../assets/Hero.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <img src={heroDesktop} alt="Hero" className="hero__img" />

      <div className="hero__overlay">
        <div className="container hero__content">
          <h1>Transforme seu visual✨</h1>
          
          <a href="#agendamento" className="btn">Agende seu horário</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
