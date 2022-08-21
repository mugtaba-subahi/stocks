import { Match, Switch } from "solid-js";
import { prayers, nextPrayerIndex, remainder } from "../../store";

import styles from "./style.module.scss";

function Timer() {
  return (
    <div class={styles.component}>
      <Switch>
        <Match when={nextPrayerIndex() !== -1}>
          <p class={styles.item}> {prayers()[nextPrayerIndex()].english} in </p>
          <p class={`${styles.item} ${styles.time}`}> {remainder()} </p>
        </Match>
        <Match when={nextPrayerIndex() < 0}>
          <p class={styles.item}> All prayers passed </p>
        </Match>
      </Switch>
    </div>
  );
}

export default Timer;
