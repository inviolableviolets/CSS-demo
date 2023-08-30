import style from './theme.module.scss';

export default function Theme() {
  return (
    <section className={style.theme}>
      <h2>Theme</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A adipisci
        repellendus obcaecati fuga commodi laudantium nesciunt voluptates
        numquam ab veritatis laborum doloribus minima quos, expedita aut
        quisquam temporibus cum iste labore maxime sunt in facilis molestias.
        Sapiente velit dolorem debitis reprehenderit? Nulla reiciendis aut, hic
        repellat ducimus ullam porro inventore, hic repellat ducimus ullam porro
        inventore.
      </p>
      <div className={style.icons} id="theme">
        <span>🌣</span>
        <span>❍</span>
      </div>
    </section>
  );
}
