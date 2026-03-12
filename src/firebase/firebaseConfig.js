import pyrebase
import time
# ── 1. Configuración de Firebase ──────────────────────────────────────────────
config = {
 apiKey: "AIzaSyBAExmd0H7BvODVCubXaKi0IJdG9EQzvnc",
authDomain: "sensores-cc9ca.firebaseapp.com",
databaseURL: "https://sensores-cc9ca-default-rtdb.firebaseio.com",
projectId: "sensores-cc9ca",
storageBucket: "sensores-cc9ca.firebasestorage.app",
messagingSenderId: "793533503497",
appId: "1:793533503497:web:b2addab8efd01c3fee80d8"
}
firebase = pyrebase.initialize_app(config)
db = firebase.database()
def actualizar_dato(ruta, datos, token=None):
 """Actualiza solo los campos indicados."""
 db.child(ruta).update(datos, token)
 print(f"[UPDATE] {ruta} → {datos}")
 try:
 while True:
data = hx.get_raw_data(times=5)
if data:
peso = (statistics.mean(data) - offset) / scale
print(f"Peso: {peso:.1f} g")
 # Sube la lectura con timestamp
 actualizar_dato("Sensores", {
 "Peso": Peso
 "timestamp": {".sv": "timestamp"} # timestamp del servidor
 }, token)
 time.sleep(2) # espera 2 segundos entre lecturas
 except KeyboardInterrupt:
 print("\nDeteniendo...")
 GPIO.cleanup()