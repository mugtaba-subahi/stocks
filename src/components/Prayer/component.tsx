import styles from "./style.module.scss";

interface Props {
  english: string;
  time: string;
  arabic: string;
  passed: boolean;
  isNext: boolean;
}

function Prayer({ english, time, arabic, passed, isNext }: Props) {
  return (
    <p>english</p>
    // <div class={styles.component} classList={{ passed, isNext }}>
    //   <p class={`${styles.item} ${styles.enlish}`}> {english} </p>
    //   <p class={`${styles.item} ${styles.time}`}> {time} </p>
    //   <p class={`${styles.arabic} ${styles.arabic}`}> {arabic} </p>
    // </div>
  );
}

export default Prayer;
