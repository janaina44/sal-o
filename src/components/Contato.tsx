import "./Contato.css";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

function Contato() {
  return (
    <section className="contato" id="contato">
      <div className="container">
        {/* Título estilizado */}
        <h2 className="contato__titulo">Entre em Contato</h2>

        {/* Informações principais */}
        <p className="contato__texto">
          <FaMapMarkerAlt /> Rua Formosa, 1491, Marialva <br />
          <FaPhoneAlt /> (44) 98616-334 <br />
          <FaEnvelope /> larissaa.fa148@gmail.com
        </p>

        {/* Redes sociais */}
        <div className="contato__redes">
          <a
            href="https://www.instagram.com/larissapaes_studio"
            target="_blank"
            rel="noreferrer"
            className="rede instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/seusalon"
            target="_blank"
            rel="noreferrer"
            className="rede facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.tiktok.com/@seusalon"
            target="_blank"
            rel="noreferrer"
            className="rede tiktok"
          >
            <FaTiktok />
          </a>
        </div>

        {/* Botão WhatsApp */}
        <a
          href="https://wa.me/554498616334?text=Olá!%20Gostaria%20de%20entrar%20em%20contato%20com%20o%20salão."
          target="_blank"
          rel="noreferrer"
          className="btn-whatsapp"
        >
          Enviar mensagem pelo WhatsApp
        </a>
      </div>
    </section>
  );
}

export default Contato;

