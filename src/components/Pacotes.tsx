import "./Pacotes.css";

function Pacotes() {
  const numeroWhats = "554498616334";
  const mensagem = "Olá! Gostaria de conferir as ofertas de pacotes do salão.";

  return (
    <section className="pacotes" id="pacotes">
      <div className="pacotes__overlay"></div>
      <img
        src="/imagens/pacotes.jpg"
        alt="Pacotes do salão"
        className="pacotes__imagem"
      />
      <a
        href={`https://wa.me/${numeroWhats}?text=${encodeURIComponent(mensagem)}`}
        target="_blank"
        rel="noreferrer"
        className="pacotes__btn"
      >
        Confira Ofertas
      </a>
    </section>
  );
}

export default Pacotes;
