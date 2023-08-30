import style from './flip.module.scss';

export default function Flip() {
  return (
    <a className={style['flip-container']} href="#parriba" id="pabajo">
      <div className={style.card}>
        <div className={style.front}>
          <p>↑</p>
        </div>
        <div className={style.back}>
          <p>Go back up</p>
        </div>
      </div>
    </a>
  );
}
