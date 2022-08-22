import { prayers, setPrayers } from "../store";
import convert12To24hrHelper from "./convert12To24hr";
import convert24hrToMillisecondHelper from "./convert24hrToMillisecond";

export default (): void => {
  for (let [index, prayer] of prayers().entries()) {
    const military = convert12To24hrHelper(prayer.english, prayer.time);
    const time = convert24hrToMillisecondHelper(military);
    const now = new Date().getTime();

    setPrayers((prayers) => {
      prayers[index].time = military;
      prayers[index].passed = now > time;
      return prayers;
    });
  }
};
