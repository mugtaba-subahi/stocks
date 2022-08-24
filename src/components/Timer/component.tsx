import { Match, Switch } from "solid-js";
import { prayers, nextPrayerIndex, remainder, setRemainder } from "../../store";

import c from "./style.module.css";

const Timer = () => {
  setInterval(() => {
    setRemainder(remainder() + 1);
  }, 1000);

  return (
    <div>
      <p>{remainder()}x</p>
    </div>
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
};

export default Timer;
