import { Match, Switch } from "solid-js";
import { prayers, nextPrayerIndex, remainder } from "../../store";

import c from "./style.module.css";

const Timer = () => (
  <p>{remainder()}</p>
  // <div class={c.component}>
  //   <Switch>
  //     <Match when={nextPrayerIndex() !== -1}>
  //       <p class={c.item}> {prayers()[nextPrayerIndex()].english} in </p>
  //       <p class={`${c.item} ${c.time}`}> {remainder()} </p>
  //     </Match>
  //     <Match when={nextPrayerIndex() < 0}>
  //       <p class={c.item}> All prayers passed </p>
  //     </Match>
  //   </Switch>
  // </div>
);

export default Timer;
