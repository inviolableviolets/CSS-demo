import style from './header.module.scss';
import isdi from '../../assets/svg/isdiwhite.svg';

export default function Header() {
  return (
    <header className={style.header}>
      <h1>
        CSS tricks <span>&</span> backflips
      </h1>
      <section>
        <img src={isdi} alt="ISDI star icon" />
        <ul>
          <li>
            <a href="">Paragraphs</a>
          </li>
          <li>
            <a href="">Typewriter Effect</a>
          </li>
          <li>
            <a href="">Scrollbar Edit</a>
          </li>
          <li>
            <a href="">Cards</a>
          </li>
          <li>
            <a href="">Gallery</a>
          </li>
          <li>
            <a href="">Mix Blend</a>
          </li>
        </ul>
      </section>
      <div className={style.layout}></div>
    </header>
  );
}
