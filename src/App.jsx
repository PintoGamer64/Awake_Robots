import { useEffect } from "react";

import FecthAPI from "./setFecth/setFecth";

export default function App() {

  const DataBase_Local = [
    {
      URL: 'https://OokamiBot.pintogamer.repl.co'
    }
  ]

  setInterval(() => {
    DataBase_Local.forEach(element => {
      const fecthData = new FecthAPI(element.URL)
      fecthData.logConsoleURL()
    });
  }, 60000);

  return (
    <div className="App">

    </div>
  )
}

