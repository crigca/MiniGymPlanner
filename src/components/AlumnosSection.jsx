import AlumnoList from "./AlumnoList";

// Sección para mostrar y seleccionar alumnos
export default function AlumnosSection({
  alumnos,
  selectedId,
  onSelect
}) {
  return (
    <section style={{
      position: "sticky",
      top: 0,
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(8px)",
      zIndex: 50,
      padding: "1.5rem 0",
      borderBottom: "1px solid #e9ecef",
      marginBottom: "2rem",
      textAlign: "center",
      boxShadow: "0 2px 12px rgba(0,0,0,0.08)"
    }}>
      <h2 style={{
        fontSize: "1.3rem",
        color: "#495057",
        margin: "0 0 1rem 0",
        fontWeight: "600"
      }}>
        👥 Selecciona un alumno
      </h2>
      <div style={{
        maxWidth: "100%",
        overflow: "hidden"
      }}>
        <AlumnoList
          alumnos={alumnos}
          selectedId={selectedId}
          onSelect={onSelect}
        />
      </div>
    </section>
  );
}