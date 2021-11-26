import React, { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClients";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [changeToken, setChangeToken] = useState(null);

  useEffect(() => {
    /* Recovery url is of the form
     * <SITE_URL>#access_token=x&refresh_token=y&expires_in=z&token_type=bearer&type=recovery
     */
    // obtenemos los valores de la url
    let url = window.location.hash;
    //Creamos la instancia
    const urlParams = new URLSearchParams(url);
    //Accedemos a los valores
    var tipo = urlParams.get("type");
    var token = urlParams.get("#access_token");
    if (tipo === "recovery") {
      setChangeToken(token);
    }
  }, []);
  const handleNewPassword = async () => {
    const { error, data } = await supabase.auth.api.updateUser(changeToken, {
      password: password,
    });
    if (error) alert(error);
    if (data) alert("passwor modificado, ya puede loguearse");
    //error ? alert(error) : alert("passwor modificado, ya puede loguearse");
  };

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
        Reset Password
      </h1>
      <div style={{ flexDirection: "column" }}>
        <div>
          <input
            style={{
              width: 300,
              height: 15,
              margin: 10,
              borderRadius: 10,
              backgroundColor: "#f8f9f9",
              padding: 10,

              fontSize: 20,
            }}
            placeholder="Ingrese Email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <input
            style={{
              width: 300,
              height: 15,
              margin: 10,
              borderRadius: 10,
              backgroundColor: "#f8f9f9",
              padding: 10,
              fontSize: 20,
            }}
            placeholder="Ingrese Nueva Contraseña"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
      </div>

      <button
        style={{
          width: 300,
          height: 50,
          position: "relative",
          backgroundColor: "black",
          borderRadius: 40,
          borderColor: "orangered",
          borderWidth: 2,
          margin: 10,
        }}
        onClick={handleNewPassword}
      >
        <label
          style={{
            color: "orangered",
            fontSize: 25,
          }}
        >
          Cambiar Password
        </label>
      </button>
    </div>
  );
};

export default Reset;
