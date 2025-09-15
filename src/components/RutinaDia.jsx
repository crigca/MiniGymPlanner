import React from "react";

export default function RutinaDia({ dia, ejercicios, onAdd, onChange, onDelete }) {
  const styles = {
    container: {
      width: "100%",
      background: "white",
      border: "1px solid #e5e5e5",
      borderRadius: "12px",
      padding: "clamp(1rem, 3vw, 1.5rem)",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      minHeight: "200px"
    },
    header: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "1.5rem",
      padding: "1rem",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(102, 126, 234, 0.2)"
    },
    dayTitle: {
      color: "white",
      fontSize: "1.6rem",
      fontWeight: "700",
      margin: "0 0 1rem 0",
      textAlign: "center",
      textShadow: "0 1px 2px rgba(0,0,0,0.1)"
    },
    addButton: {
      background: "rgba(255, 255, 255, 0.9)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      borderRadius: "20px",
      padding: "0.7rem 1.5rem",
      color: "#667eea",
      cursor: "pointer",
      fontSize: "0.9rem",
      fontWeight: "600",
      transition: "all 0.2s",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    },
    noExercises: {
      color: "#999",
      fontStyle: "italic",
      textAlign: "center",
      padding: "1rem",
      background: "#f9f9f9",
      borderRadius: "4px"
    },
    exercisesList: {
      listStyle: "none",
      padding: 0,
      margin: 0
    },
    exerciseItem: {
      background: "#fafafa",
      border: "1px solid #eee",
      borderRadius: "8px",
      padding: "clamp(0.8rem, 2vw, 1rem)",
      marginBottom: "0.8rem",
      display: "flex",
      alignItems: "center",
      gap: "clamp(0.5rem, 2vw, 0.8rem)",
      flexWrap: "wrap"
    },
    input: {
      border: "1px solid #ddd",
      borderRadius: "3px",
      padding: "0.4rem",
      fontSize: "0.9rem",
      background: "white",
      color: "#333"
    },
    nameInput: {
      minWidth: "clamp(120px, 30vw, 180px)",
      flex: 1
    },
    numberInput: {
      width: "clamp(50px, 12vw, 70px)",
      textAlign: "center"
    },
    label: {
      fontSize: "0.85rem",
      color: "#666",
      fontWeight: "500"
    },
    deleteButton: {
      background: "#dc3545",
      border: "1px solid #dc3545",
      borderRadius: "3px",
      padding: "0.3rem 0.6rem",
      color: "white",
      cursor: "pointer",
      fontSize: "0.8rem",
      marginLeft: "auto",
      fontWeight: "500",
      transition: "all 0.2s"
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={styles.dayTitle}>{dia}</h3>
        <button
          onClick={onAdd}
          style={styles.addButton}
          onMouseOver={(e) => {
            e.target.style.background = "white";
            e.target.style.transform = "translateY(-1px)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.9)";
            e.target.style.transform = "translateY(0)";
          }}
        >
          + Agregar ejercicio
        </button>
      </div>

      {ejercicios.length === 0 && (
        <p style={styles.noExercises}>No hay ejercicios programados</p>
      )}

      <ul style={styles.exercisesList}>
        {ejercicios.map((e, idx) => (
          <li key={e.id} style={styles.exerciseItem}>
            <input
              style={{...styles.input, ...styles.nameInput}}
              value={e.nombre}
              onChange={(ev) => onChange(idx, { nombre: ev.target.value })}
              placeholder="Nombre del ejercicio"
            />
            <input
              type="number"
              style={{...styles.input, ...styles.numberInput}}
              value={e.series}
              onChange={(ev) => onChange(idx, { series: Number(ev.target.value) || 0 })}
            />
            <span style={styles.label}>series</span>
            <input
              type="number"
              style={{...styles.input, ...styles.numberInput}}
              value={e.reps}
              onChange={(ev) => onChange(idx, { reps: Number(ev.target.value) || 0 })}
            />
            <span style={styles.label}>reps</span>
            <input
              type="number"
              style={{...styles.input, ...styles.numberInput}}
              value={e.descanso}
              onChange={(ev) => onChange(idx, { descanso: Number(ev.target.value) || 0 })}
              title="Descanso en segundos"
            />
            <span style={styles.label}>seg</span>
            <button
              onClick={() => onDelete(idx)}
              style={styles.deleteButton}
              onMouseOver={(e) => {
                e.target.style.background = "#c82333";
                e.target.style.transform = "translateY(-1px)";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "#dc3545";
                e.target.style.transform = "translateY(0)";
              }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}