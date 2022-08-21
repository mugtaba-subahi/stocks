import { IPrayer } from "../interfaces";
import { nextPrayerIndex, setNextPrayerIndex, prayers } from "../store";
import setTimerHelper from "./setTimer";

export default (): void => {
  setNextPrayerIndex(prayers().findIndex((item: IPrayer) => !item.passed));

  if (nextPrayerIndex() === -1) return;

  prayers()[nextPrayerIndex()].isNext = true;
  setTimerHelper();
};
