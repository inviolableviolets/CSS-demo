import style from './typewriter.module.scss';

export default function Typewriter() {
  return (
    <main className={style.container}>
      <hr className={style.right} />
      <div className={style.typewriter}>
        <h2>Typewriter</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          itaque quaerat fugiat, minus non mollitia nostrum, autem sapiente ab
          sunt, voluptates in a cumque similique ullam cupiditate odit velit
          quas laboriosam inventore ex saepe. Harum est maxime voluptate
          delectus, vitae doloremque aperiam. Doloribus molestiae ducimus eos
          omnis architecto ullam officia?
        </p>
      </div>
      <hr className={style.left} />
    </main>
  );
}
