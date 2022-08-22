import svg_mosque from "../../assets/mosque.svg";
import date from "../../helpers/getDate";

import c from "./styles.module.css";

const Heading = () => (
  <section class={c.component}>
    <p class={c.location}> London, UK </p>
    <p class={c.date}> {date} </p>
    <img class={c.img} src={svg_mosque} alt="Icon of a mosque" />
  </section>
);

export default Heading;
