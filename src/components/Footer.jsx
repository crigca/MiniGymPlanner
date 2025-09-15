// Pie de página con información del gimnasio
export default function Footer() {
  return (
    <footer style={{
      width: "100%",
      marginTop: "4rem",
      padding: "clamp(2rem, 5vw, 3rem) clamp(1rem, 4vw, 2rem)",
      background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      borderTop: "3px solid #667eea",
      textAlign: "center"
    }}>
      <div style={{
        maxWidth: "800px",
        margin: "0 auto"
      }}>
        <h3 style={{
          color: "#495057",
          margin: "0 0 1rem 0",
          fontSize: "clamp(1.1rem, 3vw, 1.4rem)"
        }}>
          Mini Gym - Tu centro de entrenamiento
        </h3>
        <p style={{
          color: "#6c757d",
          margin: "0 0 1.5rem 0",
          lineHeight: "1.6",
          fontSize: "clamp(0.9rem, 2.5vw, 1rem)"
        }}>
          Planifica, organiza y sigue el progreso de tus alumnos con nuestro sistema de rutinas personalizado.
        </p>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "clamp(1rem, 4vw, 2rem)",
          flexWrap: "wrap",
          fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
          color: "#868e96"
        }}>
          <span>📍 Dirección del Gym</span>
          <span>📞 +1 234 567 890</span>
          <span>✉️ info@minigym.com</span>
        </div>
      </div>
    </footer>
  );
}