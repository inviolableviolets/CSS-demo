import style from './paragraphs.module.scss';

export default function Paragraphs() {
  return (
    <main className={style.container}>
      <article>
        <h2>Paragraph 1</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ducimus eveniet nobis cum ut vero! Cumque architecto maxime
          exercitationem animi, adipisci quae nam a aliquam culpa consequuntur
          odit excepturi ex perferendis explicabo inventore, aut dolor ab
          perspiciatis recusandae porro sint eum eligendi quaerat? Ducimus sint
          accusamus tenetur dignissimos, ex explicabo.
        </p>
        <button>❤</button>
      </article>

      <article>
        <h2>Paragraph 2</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae porro
          commodi quo amet neque nam veniam deleniti ab, odit temporibus.
          Incidunt, ab? Voluptates libero a nemo neque optio tempora cupiditate
          quasi laboriosam sunt ut molestiae non reprehenderit expedita,
          aspernatur quos.
        </p>
        <button>❤</button>
      </article>

      <article>
        <h2>Paragraph 3</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          sint quo, dolor odio soluta atque. In, dolores laudantium? Facilis
          repellendus ad nisi odio rem doloribus dolor quas neque iusto
          inventore eaque quam repudiandae, sit accusamus laboriosam debitis
          exercitationem similique quidem! Ipsam, suscipit perspiciatis
          reprehenderit error illo esse eius eaque nobis voluptatem quisquam
          inventore.Ipsam, suscipit perspiciatis reprehenderit error illo esse
          eius eaque nobis voluptatem quisquam inventore.Ipsam, suscipit
          perspiciatis reprehenderit error illo esse eius eaque nobis voluptatem
          quisquam inventore.
        </p>
        <button>❤</button>
      </article>
    </main>
  );
}
