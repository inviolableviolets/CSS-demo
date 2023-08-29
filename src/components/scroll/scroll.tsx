import Star from '../star/star';
import style from './scroll.module.scss';

export default function Scroll() {
  return (
    <main className={style.container}>
      <div className={style.subheader}>
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            voluptatem a modi! Excepturi quibusdam ea architecto sit laudantium
            tempora possimus quidem deleniti! Nobis id veritatis vitae est,
            corporis architecto magni enim harum provident qui repellat amet
            excepturi quisquam consequuntur delectus vel aut culpa aliquam velit
            maxime nam cumque! Vitae quisquam voluptatum nemo nisi blanditiis,
            quibusdam labore veniam consectetur reprehenderit laudantium
            nesciunt facilis doloribus excepturi quod accusamus itaque in
            mollitia quis modi provident? <span>porro</span>, dolor earum quae
            quo aliquid distinctio ipsa dolorem sequi iure! Dolorum ullam, velit
            corrupti ut expedita sapiente ad magnam exercitationem, modi quas
            voluptates. Illum optio reiciendis tenetur provident sequi quasi
            vero quo aut quos corporis tempore esse animi veniam at{' '}
            <span>porro</span> eveniet numquam, totam ab eum perferendis
            dolorum? Tenetur, at! Suscipit quia iste architecto. Explicabo
            dignissimos quasi, dolorem tempora, placeat dolor dolore modi est
            laborum totam corrupti nulla reiciendis non, accusantium laboriosam
            autem odit eos. Maiores soluta laboriosam dolor illo at provident,
            autem consequuntur dignissimos, deserunt eos magnam libero
            recusandae quisquam ea. Velit, ut commodi? Hic minus culpa, expedita
            excepturi maiores error totam a, praesentium molestias natus quod
            vel. Quisquam incidunt consequatur labore facere error veritatis
            odio soluta distinctio! Consectetur, deleniti nam ducimus illo id
            vel hic! Cupiditate ipsum saepe non fugiat perspiciatis omnis,
            consectetur praesentium enim earum, iure sint eaque. Cupiditate
            optio doloremque odit reiciendis dicta ipsa <span>cum</span>,
            tempore aspernatur rem repudiandae eius officia est deserunt
            commodi, laboriosam accusamus ex sapiente fugiat repellat dolores
            incidunt sunt? Officiis iste labore dolor animi unde debitis commodi
            deserunt?
          </p>
          <span className={style.vertical}>Sick scrollbar</span>
        </section>
        <Star></Star>
      </div>
    </main>
  );
}
