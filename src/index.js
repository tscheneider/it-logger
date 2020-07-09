import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/* Função inicial do react  */
ReactDOM.render(
/* Nos ajuda a encontrar possíveis problemas em um aplicativo.
Se  receber avisos StrictMode, provavelmente encontrará bugs ao tentar usar a Reação simultânea. */
  <React.StrictMode>
    {/* chama app.js */}
    <App />
  </React.StrictMode>,
  /*Pega informações da Dom que neste caso   */
  document.getElementById("root")
);
