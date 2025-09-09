import "./Servicos.css";

const servicos = [
  {
    titulo: "Brow Lamination",
    descricao: "Técnica moderna para alinhar e realçar suas sobrancelhas.",
    imagem: "/imagens/servicos/brow.jpg",
  },
  {
    titulo: "Designer de Sobrancelhas",
    descricao: "Sobrancelhas bem definidas para realçar seu olhar.",
    imagem: "/imagens/servicos/designer.jpg",
  },
  {
    titulo: "Henna",
    descricao: "Coloração natural que destaca as sobrancelhas.",
    imagem: "/imagens/servicos/henna.jpg",
  },
  {
    titulo: "HidraGloss",
    descricao: "Tratamento labial que proporciona hidratação e brilho.",
    imagem: "/imagens/servicos/hidragloss.jpg",
  },
  {
    titulo: "Lash Lifting",
    descricao: "Curvatura natural e duradoura para seus cílios.",
    imagem: "/imagens/servicos/lash.jpg",
  },
  {
    titulo: "Micropigmentação",
    descricao: "Procedimento para realçar e corrigir sobrancelhas.",
    imagem: "/imagens/servicos/micropigmentacao.jpg",
  },
  {
    titulo: "MicroLabial",
    descricao: "Realce e correção da tonalidade natural dos lábios.",
    imagem: "/imagens/servicos/microlabial.jpg",
  },
  {
    titulo: "Maquiagem",
    descricao: "Produção completa para eventos, festas ou dia a dia.",
    imagem: "/imagens/servicos/maquiagem.jpg",
  },
];

function Servicos() {
  return (
    <section className="servicos" id="servicos">
      <div className="container">
        <h2 className="servicos__titulo">Serviços</h2>

        <div className="servicos__grid">
          {servicos.map((servico, index) => (
            <div className="card" key={index}>
              <img src={servico.imagem} alt={servico.titulo} />
              <h3>{servico.titulo}</h3>
              <p>{servico.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicos;
