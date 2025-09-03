import "./Sobre.css";
import sobreImg from "../assets/sobre.jpg"; // substitua pela sua foto

function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="container sobre__content">
        <div className="sobre__text">
          <h2>Sobre Nós</h2>
          <p>
            O <strong>Studio Larissa Paes</strong>, nasceu com o propósito de valorizar a beleza única de cada pessoa e transformar a autoestima através de cuidados especiais.
💖 Aqui, cada atendimento é feito com carinho, dedicação e muito amor pelo que faço.
🎨 O estúdio oferece serviços como brow lamination, lash lifting, micropigmentação, maquiagem profissional e designer de sobrancelhas, sempre com técnicas modernas e seguras.
💋 Também realizo tratamentos como hidratação labial, que trazem ainda mais naturalidade e sofisticação ao seu visual.
          </p>
          <p>
            O espaço foi criado para ser aconchegante e elegante, garantindo uma experiência acolhedora e especial.
✨ Meu objetivo é que cada cliente se sinta bem, confiante e feliz ao se olhar no espelho.
💫 No Larissa Paes Studio, a beleza vai além da estética: é sobre se sentir bem todos os dias.
          </p>
        </div>

        <div className="sobre__image">
          <img src={sobreImg} alt="Equipe do salão" />
        </div>
      </div>
    </section>
  );
}

export default Sobre;
