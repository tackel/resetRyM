import React from "react";

const Registro = () => {
  return (
    <div
      style={{
        backgroundColor: "#474645",
        width: "60%",
        //height: "100%",
        flexDirection: "row",
        padding: 14,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1
        style={{
          color: "orangered",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Usuario Registrado
      </h1>
      <h3
        style={{
          backgroundColor: "#474645",
          width: "60%",
          //height: "100%",
          flexDirection: "row",
          padding: 14,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        Puedo volver a la app y loguearse
      </h3>
    </div>
  );
};

export default Registro;
