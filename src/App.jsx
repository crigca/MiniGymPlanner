import { useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useExerciseActions } from "./hooks/useExerciseActions";
import { STORAGE_KEY } from "./lib/constants";
import { migrateState } from "./utils/dataHelpers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AlumnosSection from "./components/AlumnosSection";
import RutinaSection from "./components/RutinaSection";

// Estado inicial: 10 alumnos sin rutinas asignadas
const defaultState = {
  alumnos: Array.from({ length: 10 }).map((_, i) => ({
    id: "a" + (i + 1),
    nombre: "Alumno " + (i + 1),
  })),
  asignaciones: {},
};

// Componente principal de la aplicación
export default function App() {
  const [state, setState] = useLocalStorage(STORAGE_KEY, defaultState);
  const { agregarEjercicio, borrarEjercicio, actualizarEjercicio } = useExerciseActions(setState);

  // Migración de datos al iniciar la app
  useEffect(() => {
    setState((prev) => migrateState(prev));
  }, [setState]);

  // Estado del alumno seleccionado
  const [selectedAlumnoId, setSelectedAlumnoId] = useState(
    state.alumnos[0]?.id ?? null
  );

  const selectedAlumno = useMemo(
    () => state.alumnos.find((a) => a.id === selectedAlumnoId) ?? null,
    [state.alumnos, selectedAlumnoId]
  );

  return (
    <div style={{
      minHeight: "100vh",
      width: "100%",
      background: "linear-gradient(to bottom, #f8f9fa, #ffffff)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <Header />

      <main style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 1.5rem",
        minHeight: "calc(100vh - 300px)"
      }}>
        <AlumnosSection
          alumnos={state.alumnos}
          selectedId={selectedAlumnoId}
          onSelect={setSelectedAlumnoId}
        />

        <RutinaSection
          alumno={selectedAlumno}
          asignaciones={state.asignaciones}
          onAgregarEjercicio={agregarEjercicio}
          onActualizarEjercicio={actualizarEjercicio}
          onBorrarEjercicio={borrarEjercicio}
        />
      </main>

      <Footer />
    </div>
  );
}
