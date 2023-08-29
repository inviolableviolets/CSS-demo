import Card from "../card/card";
// import Star from "../star/star";
import style from "./cards.module.scss";

export default function Cards() {
  const getRandomImage = (topic?: string[]) =>
    topic
      ? `https://source.unsplash.com/random/${"?" + topic.join(",")}`
      : "https:unsplash.it/400/400";

  return (
    <section className={style["card-list"]}>
      <span className={style.arrow}>⇶</span>
      <span>⇶</span>
      <Card
        date="Aug, 28th 2023"
        title="Cómo beber 2L de Monster sin rozar el paro cardíaco"
        author="Jefferson Asto"
        image={getRandomImage(["sleep"])}
      ></Card>{" "}
      <Card
        date="Aug, 28th 2023"
        title="Consultorio Colorines (pt.1)"
        author="Sergio Mata"
        image={getRandomImage(["avatar", "artist"])}
      ></Card>{" "}
      <Card
        date="Aug, 28th 2023"
        title="Consultorio Colorines (pt.2)"
        author="Sergio Mata"
        image={getRandomImage(["face", "handsome"])}
      ></Card>{" "}
      <Card
        date="Aug, 28th 2023"
        title="Embarazar con la mirada (modalidad bilingüe)"
        author="Jesús Vergalarga"
        image={getRandomImage(["sexual", "god"])}
      ></Card>{" "}
      <Card
        date="Aug, 28th 2023"
        title="Consultorio Colorines (pt.3)"
        author="Sergio Mata"
        image={getRandomImage(["male", "avatar"])}
      ></Card>{" "}
      <Card
        date="Aug, 28th 2023"
        title="Pizza con piña (beginner friendly)"
        author="Covadonga Millán"
        image={getRandomImage(["pineapple", "pizza"])}
      ></Card>{" "}
      <Card
        date="Aug, 28th 2023"
        title="Pizza con piña (Intermediate)"
        author="Covadonga Millán"
        image={getRandomImage(["profile", "avatar"])}
      ></Card>{" "}
      <Card
        date="Aug, 28th 2023"
        title="Consultorio Colorines (pt.4)"
        author="Sergio Mata"
        image={getRandomImage(["avatar"])}
      ></Card>
      <Card
        date="Aug, 31th 2023"
        title="Introducción al apareamiento de los erizos (pt.1)"
        author="Alejandro Cerezo"
        image={getRandomImage()}
      ></Card>{" "}
      <Card
        date="Aug, 31th 2023"
        title="Introducción al apareamiento de los erizos (pt.2)"
        author="Alejandro Cerezo"
        image={getRandomImage(["user", "avatar", "face"])}
      ></Card>{" "}
      <Card
        date="Aug, 31th 2023"
        title="Introducción al apareamiento de los erizos (pt.3)"
        author="Alejandro Cerezo"
        image={getRandomImage(["face", "linkedin"])}
      ></Card>{" "}
    </section>
  );
}
