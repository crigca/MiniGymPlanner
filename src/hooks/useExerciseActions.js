import { deepClone, vaciaRutina, todayISO } from "../utils/dataHelpers";

// Hook personalizado para manejar acciones de ejercicios
export function useExerciseActions(setState) {

  // Agrega un nuevo ejercicio al día especificado
  const agregarEjercicio = (alumnoId, dia) => {
    setState((prev) => {
      const next = deepClone(prev);
      const asg =
        next.asignaciones[alumnoId] ?? {
          alumnoId,
          fechaAsignacionISO: todayISO(),
          rutina: vaciaRutina(),
          historial: [],
        };

      // Validaciones defensivas
      if (!asg.rutina) asg.rutina = vaciaRutina();
      if (!Array.isArray(asg.rutina[dia])) asg.rutina[dia] = [];

      // Crear nuevo ejercicio con valores por defecto
      asg.rutina[dia].push({
        id: "e-" + Math.random().toString(36).slice(2, 7),
        nombre: "Nuevo ejercicio",
        series: 3,
        reps: 12,
        descanso: 60,
      });

      next.asignaciones[alumnoId] = asg;
      return next;
    });
  };

  // Elimina un ejercicio por índice
  const borrarEjercicio = (alumnoId, dia, idx) => {
    setState((prev) => {
      const next = deepClone(prev);
      const asg = next.asignaciones[alumnoId];
      if (!asg) return prev;

      // Validar que existe el array del día
      if (!Array.isArray(asg.rutina?.[dia])) {
        asg.rutina = asg.rutina ?? vaciaRutina();
        asg.rutina[dia] = [];
        return next;
      }

      asg.rutina[dia].splice(idx, 1);
      return next;
    });
  };

  // Actualiza propiedades de un ejercicio específico
  const actualizarEjercicio = (alumnoId, dia, idx, patch) => {
    setState((prev) => {
      const next = deepClone(prev);
      const asg = next.asignaciones[alumnoId];
      if (!asg) return prev;

      // Validar que existe el array del día
      if (!Array.isArray(asg.rutina?.[dia])) {
        asg.rutina = asg.rutina ?? vaciaRutina();
        asg.rutina[dia] = [];
        return next;
      }

      asg.rutina[dia][idx] = { ...asg.rutina[dia][idx], ...patch };
      return next;
    });
  };

  return {
    agregarEjercicio,
    borrarEjercicio,
    actualizarEjercicio
  };
}