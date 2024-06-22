const Error = ({}) => {
  return (
    <div
      className="d-flex flex-column justify-content-end align-items-center w-100 text-center"
      style={{ height: "100vh" }}
    >
      <h1>404</h1>
      <p className="d-flex  py-5 px-4 text-center w-50 home_hero_content justify-content-center">
        Servidor temporariamente indisponível
      </p>
    </div>
  );
};

export default Error;
