export interface IApi {
  [key: string]: string;
  city: string;
  date: string;
  fajr: string;
  fajr_jamat: string;
  sunrise: string;
  dhuhr: string;
  dhuhr_jamat: string;
  asr: string;
  asr_2: string;
  asr_jamat: string;
  magrib: string;
  magrib_jamat: string;
  isha: string;
  isha_jamat: string;
}

export interface IPrayer {
  time: string;
  passed: boolean;
  english: string;
  arabic: string;
  isNext: boolean;
}

export interface ICacheData {
  updatedAt: Date;
  prayers: IApi;
}
