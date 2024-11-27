import s from './doacao.module.scss'
import Livro from '../../assets/livrinho.png'

export default function QueroDoar() {
    return (
      <section className={s.page}>
        <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
        <form action="">
          <div>
            <img src={Livro} alt="ícone de livro na cor azul." />=
            <h2>Informações do Livro</h2>
          </div>
          <input type="text" name="" id="" placeholder='Título'/>
          <input type="text" name="" id="" placeholder='Categoria'/>
          <input type="text" name="" id="" placeholder='Autor'/>
          <input type="text" name="" id="" placeholder='Link da Imagem'/>
          
          <input type="submit" value="Doar" className={s.button} />
        </form>

      </section>
    );
  }