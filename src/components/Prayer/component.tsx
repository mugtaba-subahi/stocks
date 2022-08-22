import c from "./style.module.css";

interface Props {
  english: string;
  time: string;
  arabic: string;
  passed: boolean;
  isNext: boolean;
}

const Prayer = ({ english, time, arabic, passed, isNext }: Props) => (
  <div class={c.component} classList={{ [c.passed]: passed, [c.isNext]: isNext }}>
    <p class={`${c.item} ${c.english}`}> {english} </p>
    <p class={`${c.item} ${c.time}`}> {time} </p>
    <p class={`${c.item} ${c.arabic}`}> {arabic} </p>
  </div>
);

export default Prayer;
