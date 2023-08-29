import style from "./gallery.module.scss";

export default function Gallery() {
  return (
    <main className={style.gallery}>
      <section>
        <div className={style.slide1}></div>
        <div className={style.slide2}></div>
        <div className={style.slide3}></div>
      </section>
      <span></span>
      <div>
        <h2>Gallery</h2>
        <h2 className={style.stroke}>Gallery</h2>
        <h2>Gallery</h2>
        <h2>Gallery</h2>
      </div>
    </main>
  );
}
