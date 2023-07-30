import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <div className="titleContainer">
        <h1 className="title">Error 404</h1>
        <h2>¡Oh no!, Parece que te has perdido.</h2>
        <br />
        <h2>Página no encontrada.</h2>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dunwbzf2f/image/upload/v1690749503/ReactEntregasTanans/others/notFound1.gif"
          alt="Gif de perdido."
        />
      </div>
      <div className="textContainer">
        <h2 className="return">
          No te preocupes, puedes volver a nuestro sitio web apretando en
          <a href=""> StoreGames</a>
        </h2>
      </div>
    </>
  );
};

export default NotFound;
