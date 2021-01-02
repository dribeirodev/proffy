import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function Teacheritem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/18536415?s=460&u=3dc5aa48dbb804c792715f1875fe66901395a1ae&v=4"
          alt="Diego"
        />
        <div>
          <strong>Diego Ribeiro</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur
        <br /> <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit
        ex sit amet purus iaculis fermentum. Morbi vulputate cursus cursus.
        Donec tincidunt dui a quam suscipit facilisis.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 120,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default Teacheritem;
