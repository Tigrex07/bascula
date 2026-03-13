import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { ref, onValue } from "firebase/database";
import "./App.css";

function App() {
  const [peso, setPeso] = useState(0);
  const [timestamp, setTimestamp] = useState("--:--");

  useEffect(() => {
    const sensoresRef = ref(db, "Sensores");
    onValue(sensoresRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // SOLUCIÓN: Verificamos si data.Peso es un objeto para extraer el valor numérico
        let valorPeso = 0;
        if (typeof data.Peso === 'object' && data.Peso !== null) {
          // Si tiene una propiedad 'valor', la usamos, si no, intentamos convertir el objeto
          valorPeso = data.Peso.valor || 0;
        } else {
          valorPeso = data.Peso || 0;
        }

        setPeso(valorPeso);
        setTimestamp(data.timestamp ? new Date(data.timestamp).toLocaleTimeString() : "--:--");
      }
    });
  }, []);

  return (
    <div className="app-wrapper">
      <div className="header-container">
        <h2 className="main-title">Interfaz para pesaje y monitoreo de pesos</h2>
        <p className="sub-title">De La Universidad Tecnológica de Nogales</p>
      </div>

      <div className="monitor-card">
        <div className="card-header">
          <div className="title-group">
            <h3>Báscula 01</h3>
            <p>Monitoreo de Pesos</p>
          </div>
          <div className="live-badge">LIVE</div>
        </div>

        <div className="card-body">
          <div className="label-top">PESO ACTUAL</div>
          <div className="weight-display-big">
            {peso} <span className="unit">g</span>
          </div>
        </div>

        <div className="card-footer">
          <div className="footer-col">
            <label>Última Actualización</label>
            <p>{timestamp}</p>
          </div>
          <div className="footer-col">
            <label>Estado del Sistema</label>
            <p className="status-on">CONECTADO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;