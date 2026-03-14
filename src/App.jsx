import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { ref, onValue } from "firebase/database";

function App() {
  const [peso, setPeso] = useState(0);
  const [timestamp, setTimestamp] = useState("--:--");

  useEffect(() => {
    const sensoresRef = ref(db, "Sensores");

    onValue(sensoresRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        let valorPeso = 0;

        if (typeof data.Peso === "object" && data.Peso !== null) {
          valorPeso = data.Peso.valor || 0;
        } else {
          valorPeso = data.Peso || 0;
        }

        setPeso(valorPeso);

        setTimestamp(
          data.timestamp
            ? new Date(data.timestamp).toLocaleTimeString()
            : "--:--"
        );
      }
    });
  }, []);

  return (
    <div className="min-h-screen w-screen bg-slate-100 flex flex-col items-center justify-center p-5">

      {/* HEADER */}
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-3xl font-extrabold text-slate-800">
          Interfaz para pesaje y monitoreo de pesos
        </h2>

        <p className="text-emerald-900 font-semibold mt-1">
          De La Universidad Tecnológica de Nogales
        </p>
      </div>

      {/* CARD / PANEL */}
      <div className="
        w-full 
        max-w-xl
        md:max-w-3xl
        border-t-4 border-b-4 border-emerald-900
        md:border-4 md:rounded-2xl md:bg-white md:shadow-xl
        p-6 md:p-10
      ">

        {/* HEADER CARD */}
        <div className="flex justify-between items-center mb-4 md:mb-10">
          
          <div>
            <h3 className="text-lg font-semibold text-slate-800">
              Báscula 01
            </h3>

            <p className="text-emerald-900 font-bold text-sm">
              Monitoreo de Pesos
            </p>
          </div>

          <div className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            LIVE
          </div>

        </div>

        {/* PESO */}
        <div className="text-center my-4 md:my-10">

          <div className="text-slate-500 font-bold text-xs tracking-widest">
            PESO ACTUAL
          </div>

          <div className="digital text-7xl sm:text-7xl md:text-7xl lg:text-7xl 
        font-extrabold text-emerald-600 tracking-widest leading-none mt-3">
          {peso}
          <span className="text-3xl sm:text-4xl text-slate-600 ml-2 font-bold">
            g
          </span>
        </div>

        </div>

        {/* FOOTER */}
        <div className="flex justify-between md:bg-slate-50 md:p-5 md:rounded-xl text-sm">

          <div>
            <label className="block text-xs text-slate-500">
              Última Actualización
            </label>

            <p className="font-bold text-emerald-900">
              {timestamp}
            </p>
          </div>

          <div>
            <label className="block text-xs text-slate-500">
              Estado del Sistema
            </label>

            <p className="font-bold text-emerald-500">
              CONECTADO
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;