import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__nome">Larissa Paes Studio</p>
        <p>© 2025 Todos os direitos reservados.</p>
        <div className="footer__redes">
          <a href="https://www.instagram.com/larissapaes_studio" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.facebook.com/seusalon" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://www.tiktok.com/@seusalon" target="_blank" rel="noreferrer">TikTok</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
