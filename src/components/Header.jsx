// Encabezado principal de la aplicación
export default function Header() {
  return (
    <header style={{
      width: "100%",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "clamp(1.5rem, 5vw, 3rem) clamp(1rem, 4vw, 2rem)",
      textAlign: "center",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      marginBottom: "2rem"
    }}>
      <h1 style={{
        color: "white",
        fontSize: "clamp(2rem, 6vw, 3rem)",
        fontWeight: "700",
        margin: 0,
        textShadow: "0 2px 4px rgba(0,0,0,0.2)",
        lineHeight: "1.1"
      }}>
        💪 Mini Gym Planner
      </h1>
      <p style={{
        color: "rgba(255,255,255,0.9)",
        fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)",
        margin: "0.5rem 0 0 0",
        fontWeight: "300",
        maxWidth: "600px",
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        Gestiona las rutinas de tus alumnos
      </p>
    </header>
  );
}