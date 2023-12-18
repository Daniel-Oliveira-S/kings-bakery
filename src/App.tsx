import "./App.css";
import logo from "./assets/Logo.svg";
import sobre from "./assets/who-img.png";
import crumpets from "./assets/Crumpets.png";
import scones from "./assets/Scones.png";
import pudding from "./assets/Pudding.png";
import { InstagramLogo, TiktokLogo } from "phosphor-react";
function App() {
  return (
    <>
      <main>
        <header>
          <nav id="nav">
            <div className="logo">
              <p>Kings</p>
              <img src={logo} alt="" />
              <p>Bakery</p>
            </div>
            <ul id="menu">
              <li>
                <a href="#sobre">Quem somos?</a>
              </li>
              <li>
                <a href="#mission">Missão | Visão | Valores</a>
              </li>
              <li>
                <a href="#products">Produtos</a>
              </li>
            </ul>
            <a href="#"> Contato</a>
          </nav>
        </header>

        <section id="hero">
          <div className="filter">
            <div className="hero container">
              <div id="hero-text">
                <p>Descubra o Paraíso do Sabor na</p>
                <p className="title">Kings Bakery</p>
                <p>
                  Bem-vindo ao lugar onde o aroma doce da tradição se encontra
                  com a inovação irresistível. Na Kings Bakery, cada mordida é
                  uma viagem celestial de sabor e cada visita é uma experiência
                  divina para seus sentidos!
                </p>
                <a href=""> Quero conhecer</a>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre">
          <div className="sobre container">
            <h1>Descubra o sabor Real na Kings Bakery!</h1>
            <div className="sobre-grid">
              <p>
                Somos uma padaria na qual é uma expressão refinada da tradição
                britânica, onde cada produto é cuidadosamente elaborado para
                oferecer uma experiência única aos nossos clientes.
              </p>
              <img src={sobre} alt="" />
            </div>
          </div>
        </section>

        <section id="mission">
          <div className="mission container">
            <h1>Missão | Visão | Valores</h1>
            <div className="card-grid">
              <div className="card">
                <h1>Missão</h1>
                <p>
                  Padaria artesanal com um ar de seriedade e sofisticação além
                  de trazer os pubs ingleses para o local.
                </p>
              </div>
              <div className="card">
                <h1>Visão</h1>
                <p>
                  Expandir pela região com o objetivo de levar as padarias e a
                  cultura inglesa para o centro de São Paulo.
                </p>
              </div>
              <div className="card">
                <h1>Valores</h1>
                <li>Diversidade no cardápio</li>
                <li>Ótima localização</li>
                <li>Sensação de conforto</li>
                <li>Diversidade cultural</li>
              </div>
            </div>
          </div>
        </section>

        <section id="products">
          <div className="products-container">
            <h1>Produtos</h1>
            <div className="products-grid">
              <a href="" className="product">
                <img src={crumpets} alt="" />
                <h1>Crumpets</h1>
              </a>
              <a href="" className="product">
                <img src={scones} alt="" />
                <h1>Scones</h1>
              </a>
              <a href="" className="product">
                <img src={pudding} alt="" />
                <h1>
                  Yorkshire <br />
                  Pudding
                </h1>
              </a>
            </div>
          </div>
        </section>

        <footer>
          <div className="footer container">
            <nav id="nav-footer">
              <h3>Navegação</h3>
              <ul>
                <li>
                  <a href="#sobre">Quem somos?</a>
                </li>
                <li>
                  <a href="#mission">Missão | Visão | Valores</a>
                </li>
                <li>
                  <a href="#products">Produtos</a>
                </li>
              </ul>
            </nav>
            <div className="socials">
              <h1>Nos siga nas redes sociais</h1>
              <a href="" className="social">
                <InstagramLogo size={32} />
                @kings_bakeryof
              </a>
              <a href="" className="social">
                <TiktokLogo size={32} />
                @kingsbakeryofc
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
