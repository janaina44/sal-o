import "./Agendamento.css";
import { useState } from "react";

function Agendamento() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    servico: "",
    data: "",
    hora: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const numeroWhats = "554498616334";

    const mensagem = `Olá! Meu nome é ${form.nome}.
Quero agendar um horário para:
- Serviço: ${form.servico}
- Data: ${form.data}
- Hora: ${form.hora}
- Telefone: ${form.telefone}`;

    const url = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(url, "_blank");

    setForm({ nome: "", telefone: "", servico: "", data: "", hora: "" });
  };

  return (
    <section className="agendamento" id="agendamento">
      <div className="overlay"></div>
      <div className="container">
        <h2 className="agendamento__titulo">Agende seu Horário</h2>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            value={form.nome}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="telefone"
            placeholder="Telefone / WhatsApp"
            value={form.telefone}
            onChange={handleChange}
            required
          />

          <select
            name="servico"
            value={form.servico}
            onChange={handleChange}
            required
          >
            <option value="">Selecione um serviço</option>
            <option value="Brow Lamination">Brow Lamination</option>
            <option value="Designer de Sobrancelhas">
              Designer de Sobrancelhas
            </option>
            <option value="Henna">Henna</option>
            <option value="HidraGloss">HidraGloss</option>
            <option value="Lash Lifting">Lash Lifting</option>
            <option value="Micropigmentação">Micropigmentação</option>
            <option value="MicroLabial">MicroLabial</option>
            <option value="Maquiagem">Maquiagem</option>
          </select>

          <input
            type="date"
            name="data"
            value={form.data}
            onChange={handleChange}
            required
          />

          <input
            type="time"
            name="hora"
            value={form.hora}
            onChange={handleChange}
            required
          />

          <button type="submit">Agendar</button>
        </form>
      </div>
    </section>
  );
}

export default Agendamento;

