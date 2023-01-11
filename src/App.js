import "./App.css";
import React from "react";
import { useState } from "react";
import Takim from "./takim";
import Listele from "./listele";

function App() {
  const [uyeler, setUyeler] = useState({
    name: "",
    pozisyon: "",
    email: "",
    yaş: "",
  });
  const [liste, setListe] = useState([]);
  function handleDegisiklik(olay) {
    setUyeler({
      ...uyeler,
      [olay.target.id]: olay.target.value,
    });
  }
  function handleSubmit(olay) {
    setListe([...liste, uyeler]);
    olay.preventDefault();
    setUyeler({
      name: "",
      pozisyon: "",
      email: "",
      yaş: "",
    });
  }
  const [duzenlenecekUye, setDuzenlenecekUye] = useState([]);

  return (
    <div className="App">
      <Takim
        uyeler={uyeler}
        handleSubmit={handleSubmit}
        handleDegisiklik={handleDegisiklik}
      />
      <Listele liste={liste} />
    </div>
  );
}

export default App;
