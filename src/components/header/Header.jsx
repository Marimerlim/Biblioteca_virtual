import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import s from './header.module.scss'

import logoLivro from '../../assets/logoLivro.png'
import lupa from '../../assets/lupa.png'

import Inicio from '../../pages/inicio/Inicio'
import Livros from '../../pages/livrosDoados/LivrosDoados'
import Doar from '../../pages/queroDoar/QueroDoar'

export default function Header(){
    return(
      <BrowserRouter>
        <header className={s.header}>

          <section className={s.logoHeader}>
            <img src={logoLivro} alt="Logo de um livro aberto" />
            <h1>Livros Vai na Web</h1>
          </section>

          <nav className={s.navHeader}>
            <ul>
              <li><Link className={s.link} to="/">Início</Link></li>
              <li><Link className={s.link} to="/livros-doados">Livros Doados</Link></li>
              <li><Link className={s.link} to="/quero-doar">Quero Doar</Link></li>
            </ul>
          </nav>

          <section className={s.barraDeBusca}>
            <input type="search" name="" id="" placeholder='O que você procura?' />
            <button><img src={lupa} alt="botão de procura" /></button>
          </section>
        </header>

        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/livros-doados' element={<Livros />} />
          <Route path='/quero-doar' element={<Doar />} />
        </Routes>
      </BrowserRouter>
    );
  }
  