import "./Galeria.css";

const imagens = [
  "/imagens/galeria/foto1.jpg",
  "/imagens/galeria/foto2.jpg",
  "/imagens/galeria/foto3.jpg",
  "/imagens/galeria/foto4.jpg",
  "/imagens/galeria/foto5.jpg",
  "/imagens/galeria/foto6.jpg",
  "/imagens/galeria/foto7.jpg",
  "/imagens/galeria/foto8.jpg",
];

function Galeria() {
  return (
    <section className="galeria" id="galeria">
      <div className="container">
        <h2 className="galeria__titulo">Nossa Galeria</h2>

        <div className="galeria__grid">
          {imagens.map((src, index) => (
            <div className="galeria__item" key={index}>
              <img src={src} alt={`Trabalho ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Galeria;
