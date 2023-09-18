import "../App.css";

function Perfil({ imagen, usuario, texto }) {
  const containerStyle = {
    display: "flex",
    flexDirection: "column", // Para alinear verticalmente
    alignItems: "center", // Centra verticalmente
    textAlign: "center", // Centra horizontalmente
  };

  const imagenStyle = {
    borderRadius: "50%",
    width: "80%",
    height: "50%",
  };

  const handleSalirClick = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="container-fluid" style={{ padding: 10 }}>
      <div className="card" style={containerStyle}>
        <img
          src={imagen}
          className="card-img-top"
          alt="..."
          style={imagenStyle}
        />
        <div className="card-body">
          <div className="row" style={containerStyle}>
            <p className="card-title">
              <b>@{usuario}</b>
            </p>
            <p className="card-text">{texto}</p>
            <button type="button" className="btn btn-danger" onClick={handleSalirClick}>
              Salir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
