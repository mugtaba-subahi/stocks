import styles from "./style.module.scss";
import svg_mosque from "../../assets/mosque.svg";

interface Props {
  date: string;
}

function Heading({ date }: Props) {
  return (
    <section class={styles.component}>
      <p class={styles.location}>London, UK</p>
      <p class={styles.date}>{date}</p>
      <img class={styles.img} src={svg_mosque} alt="Icon of a mosque" />
    </section>
  );
}

export default Heading;
