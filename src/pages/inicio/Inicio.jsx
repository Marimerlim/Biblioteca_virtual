import s from './inicio.module.scss'

import comunidade from '../../assets/comunidade.png'
import leitura from '../../assets/leitura.png'
import transforma from '../../assets/transformacao.png'
import balanca from '../../assets/balanca.png'

export default function Inicio() {
    return (
      <main>
        <section className={s.chamada}>
          <h2>VENHO FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
        </section>
        <section className={s.motivos}>
          <h2>Por que devo doar?</h2>
          <div className={s.containerCards}>
            <section>
              <img src={comunidade} alt="ícone de pessoas dando as mãos" />
              <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
            </section>
            <section>
              <img src={leitura} alt="ícone de uma pessoa lendo um livro" />
              <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
            </section>
            <section>
            <img src={transforma} alt="ícone de um grupo lutando pela transformação" />
              <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
            </section>
            <section>
            <img src={balanca} alt="ícone de balança da justiça" />
              <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
            </section>
          </div> 
        </section>
      </main>
    );
  }