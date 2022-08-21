import { IApi, IPrayer } from "../interfaces";
import { arabic, english, setPrayers } from "../store";

export default (data: IApi): void => {
  const preparePrayer = (name: string, index: number): IPrayer => ({
    arabic: arabic[index],
    english: name,
    isNext: false,
    passed: false,
    time: data[name.toLocaleLowerCase()]
  });

  const prayers: IPrayer[] = english.map(preparePrayer);
  setPrayers(prayers);
};
