import { createSignal } from "solid-js";

export const [remainder, setRemainder] = createSignal("...");
export const [nextPrayerIndex, setNextPrayerIndex] = createSignal(-1);
export const [prayers, setPrayers] = createSignal([{ arabic: "", english: "", isNext: false, passed: false, time: "" }], { equals: false });
export const [test1] = createSignal([1,2,3,4,5,6,7,8,9,10]);


export const english: Readonly<string[]> = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Magrib", "Isha"];
export const arabic: Readonly<string[]> = ["العشاء", "المغرب", "العصر", "الظهر", "الشروق", "الفجر"].reverse();
