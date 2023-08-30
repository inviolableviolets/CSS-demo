import style from './header.module.scss';
import isdi from '../../assets/svg/isdiwhite.svg';

export default function Header() {
  return (
    <header className={style.header} id="header">
      <h1>
        CSS tricks <span>&</span> backflips
      </h1>
      <section>
        <img src={isdi} alt="ISDI star icon" />
        <ul>
          <li>
            <a href="">Intersection Observer</a>
          </li>
          <li>
            <a href="#theme">Media Theme</a>
          </li>
          <li>
            <a href="">Refresh</a>
          </li>
        </ul>
      </section>
      <div className={style.layout}></div>
    </header>
  );
}
