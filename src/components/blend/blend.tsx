import style from './blend.module.scss';

export default function Blend() {
  return (
    <main className={style.blend}>
      <div className={style['blended-text']}>
        <span>Mix blend mode</span>
        <div className={style['blended-image']}></div>
      </div>
    </main>
  );
}
