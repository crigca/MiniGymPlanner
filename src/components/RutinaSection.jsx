import { DIAS } from "../lib/constants";
import RutinaDia from "./RutinaDia";

// Sección para mostrar y editar la rutina del alumno seleccionado
export default function RutinaSection({
  alumno,
  asignaciones,
  onAgregarEjercicio,
  onActualizarEjercicio,
  onBorrarEjercicio
}) {
  if (!alumno) return (
    <div style={{
      textAlign: "center",
      padding: "3rem 1rem",
      color: "#6c757d",
      fontSize: "clamp(1rem, 2.5vw, 1.2rem)"
    }}>
      <p>👋 Selecciona un alumno para ver su rutina</p>
    </div>
  );

  return (
    <section style={{ width: "100%" }}>
      {/* Header sticky para la rutina */}
      <div style={{
        position: "sticky",
        top: "110px", // Debajo del header de alumnos
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(8px)",
        zIndex: 40,
        padding: "1rem 0",
        borderBottom: "1px solid #e9ecef",
        marginBottom: "2rem",
        textAlign: "center",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)"
      }}>
        <h2 style={{
          fontSize: "1.2rem",
          color: "#495057",
          margin: 0,
          fontWeight: "600"
        }}>
          🏋️ Rutina de {alumno.nombre}
        </h2>
      </div>

      {/* Rutinas por día */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "1.5rem",
        marginBottom: "2rem"
      }}>
        {DIAS.map((dia) => {
          const asg = asignaciones[alumno.id];
          const ejercicios = asg?.rutina?.[dia] ?? [];

          return (
            <RutinaDia
              key={dia}
              dia={dia}
              ejercicios={ejercicios}
              onAdd={() => onAgregarEjercicio(alumno.id, dia)}
              onChange={(idx, patch) =>
                onActualizarEjercicio(alumno.id, dia, idx, patch)
              }
              onDelete={(idx) => onBorrarEjercicio(alumno.id, dia, idx)}
            />
          );
        })}
      </div>
    </section>
  );
}