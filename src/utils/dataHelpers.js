import { DIAS } from "../lib/constants";

// Crea una copia profunda del objeto
export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Crea rutina vacía con todos los días
export function vaciaRutina() {
  return DIAS.reduce((acc, d) => {
    acc[d] = [];
    return acc;
  }, {});
}

// Obtiene fecha actual en formato ISO
export function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

// Mapeo de días sin tilde a con tilde (compatibilidad)
const DAY_SYNONYMS = {
  Miercoles: "Miércoles",
  Sabado: "Sábado",
};

// Normaliza las claves de una rutina
export function normalizeRutinaKeys(rutina) {
  const nueva = vaciaRutina();
  let changed = false;

  if (rutina && typeof rutina === "object") {
    for (const [k, v] of Object.entries(rutina)) {
      let key = DAY_SYNONYMS[k] ?? k;
      if (key !== k) changed = true;

      if (DIAS.includes(key)) {
        if (Array.isArray(v)) {
          nueva[key] = v;
        } else {
          nueva[key] = [];
          changed = true;
        }
      } else {
        changed = true;
      }
    }
  } else {
    changed = true;
  }

  return { rutina: nueva, changed };
}

// Migra estado guardado para compatibilidad
export function migrateState(prev) {
  if (!prev || typeof prev !== "object") return prev;
  let changed = false;
  const next = deepClone(prev);

  if (!next.asignaciones || typeof next.asignaciones !== "object") {
    next.asignaciones = {};
    changed = true;
  } else {
    for (const id of Object.keys(next.asignaciones)) {
      const asg = next.asignaciones[id] || {};
      const { rutina, changed: c } = normalizeRutinaKeys(asg.rutina);
      if (c || !asg.rutina) {
        next.asignaciones[id] = { ...asg, rutina };
        changed = true;
      }
    }
  }

  return changed ? next : prev;
}