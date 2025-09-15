// Lista de alumnos con botones para seleccionar
export default function AlumnoList({ alumnos, selectedId, onSelect }) {
  return (
    <div style={{
      display: "flex",
      gap: "0.6rem",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "100%"
    }}>
      {alumnos.map((a) => {
        const active = a.id === selectedId;
        return (
          <button
            key={a.id}
            type="button"
            onClick={() => onSelect(a.id)}
            style={{
              padding: "0.5rem 1rem",
              border: active ? "2px solid #667eea" : "1px solid #ddd",
              borderRadius: "8px",
              background: active ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" : "white",
              color: active ? "white" : "#495057",
              cursor: "pointer",
              fontSize: "0.9rem",
              fontWeight: active ? "600" : "400",
              transition: "all 0.2s ease",
              boxShadow: active ? "0 2px 8px rgba(102, 126, 234, 0.3)" : "0 1px 3px rgba(0,0,0,0.1)",
              minWidth: "80px",
              whiteSpace: "nowrap"
            }}
            onMouseOver={(e) => {
              if (!active) {
                e.target.style.background = "#f8f9fa";
                e.target.style.borderColor = "#adb5bd";
              }
            }}
            onMouseOut={(e) => {
              if (!active) {
                e.target.style.background = "white";
                e.target.style.borderColor = "#ddd";
              }
            }}
            title={a.nombre}
          >
            {a.nombre}
          </button>
        );
      })}
    </div>
  );
}
