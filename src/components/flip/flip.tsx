import style from './flip.module.scss';

export default function Flip() {
  return (
    <div className={style['flip-container']}>
      <div className={style.card}>
        <div className={style.front}>
          <p>A</p>
        </div>
        <div className={style.back}>
          <p>B</p>
        </div>
      </div>
    </div>
  );
}
