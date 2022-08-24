import { createSignal } from "solid-js";

export const [remainder, setRemainder] = createSignal("...");
export const [nextPrayerIndex, setNextPrayerIndex] = createSignal(-1);
export const [prayers, setPrayers] = createSignal([{ arabic: "", english: "", isNext: false, passed: false, time: "" }], { equals: false });

export const english: Readonly<string[]> = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Magrib", "Isha"];
export const arabic: Readonly<string[]> = ["العشاء", "المغرب", "العصر", "الظهر", "الشروق", "الفجر"].reverse();
