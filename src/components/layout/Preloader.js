import React from "react";

//essa função pode ser achada no site Materialize
//Essa função apresenta durante o carregamento no topo da tela um "risco azul"
const Preloader = () => {
  return (
    <div className="progress red lighten-4">
      <div className="indeterminate blue"></div>
    </div>
  );
};

export default Preloader;
