import style from './card.module.scss';

type Props = {
  title: string;
  date: string;
  author: string;
  image?: string;
};

export default function Card({ date, title, author, image }: Props) {
  return (
    <article className={style.card}>
      <header>
        <h2>{title}</h2>
        <p>{date}</p>
      </header>
      <div>
        <h3>{author}</h3>
        {image && <img src={image} alt={`${author} profile picture.`} />}
      </div>
    </article>
  );
}
