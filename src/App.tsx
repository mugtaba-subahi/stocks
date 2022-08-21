import { For } from "solid-js";
import Heading from "./components/Heading/component";
import Prayer from "./components/Prayer/component";
import { prayers } from "./store";
import { url } from "../config";
import { IApi } from "./interfaces";
import getDataHelper from "./helpers/getData";
import setDataHelper from "./helpers/setData";
import setConvertedTimeHelper from "./helpers/setConvertedTime";
import setNextPrayerHelper from "./helpers/setNextPrayer";

import "./App.module.scss";

let isLoading = true;

const data: IApi = await getDataHelper(url);
setDataHelper(data);
setConvertedTimeHelper();
setNextPrayerHelper();

isLoading = false;

function App() {
  return (
    <div>
      <p class="bg-green-300 text-white">nigga</p>
      <Heading />
      <For each={prayers()}>{(prayer) => <Prayer {...prayer} />}</For>
    </div>
  );
}

export default App;
