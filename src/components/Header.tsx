import { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Array de links do menu
  const links = [
    { nome: "Sobre", href: "#sobre" },
    { nome: "Serviços", href: "#servicos" },
    { nome: "Galeria", href: "#galeria" },
    { nome: "Agendamento", href: "#agendamento" },
    { nome: "Contato", href: "#contato" },
  ];

  return (
    <header className="header">
      <div className="container header__content">
        {/* Logo */}
        <img src={logo} alt="Logo do salão" className="logo" />

        {/* Botão Hamburguer (mobile) */}
        <button
          className={`hamburger ${menuOpen ? "is-active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Menu de navegação */}
        <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
          <ul className="nav__list">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)} // fecha menu ao clicar
                >
                  {link.nome}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
