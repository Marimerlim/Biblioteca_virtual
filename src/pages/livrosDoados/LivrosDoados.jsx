import Livro from '../../assets/OProtagonista.png'
import s from './livrosDoados.module.scss'

export default function LivrosDoados() {
    return (
      <section className={s.pageL}>
        <h2>Estante</h2>
        <section className={s.containerCards}>
          <section>
            <img src={Livro} alt="Capa do Livro O Protagonista de Sussane Andrade" />
            <div>
            <h3>O protagonista</h3>
            <p>Susanne Andrade</p>
            <p>Ficção</p>
            </div>
          </section>
        </section>
      </section>
    );
  }