import style from "./star.module.scss";
import star from "../../assets/svg/star.svg";

export default function Star() {
  return (
    <div className={style.star}>
      <img src={star} alt="Rotating star icon" className={style.star1} />
      <img src={star} alt="Rotating star icon" className={style.star2} />
      <img src={star} alt="Rotating star icon" className={style.star3} />
    </div>
  );
}
