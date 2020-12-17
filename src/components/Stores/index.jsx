import React from "react";

const OurStores = () => {
  return (
    <>
      <body className="d-flex flex-column" style={{ minHeight: "75vh" }}>
        <header
          className="container text-black border-bottom border-white mb-3"
          style={{ paddingTop: "20px" }}>
          <h2>Nossas Lojas</h2>
        </header>

        <main class="container flex-fill">
          <section className="row">
            <div className="col-lg-4 d-flex justify-content-center">
              <div
                className="card text-black bg-light m-3"
                style={{ minWidth: "15rem" }}>
                <div className="card-header font-weight-bold">Rio de Janeiro </div>
                <img class="card-img-top" src="./img/RJ.jpg" alt="Imagem de capa do card"/>
                <div className="card-body">
                  <p className="card-text">Avenida 64bits, 64</p>
                  <p className="card-text">10° Andar</p>
                  <p className="card-text">Centro</p>
                  <p className="card-text">(21) 3333-3333</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 d-flex justify-content-center">
              <div
                className="card text-black bg-light m-3"
                style={{ minWidth: "15rem" }}>
                <div className="card-header font-weight-bold">São Paulo</div>
                <img
                  class="card-img-top"
                  src="./img/SP.jpg"
                  alt="Imagem de capa do card"/>
                <div className="card-body">
                  <p className="card-text">Avenida 32bits, 32</p>
                  <p className="card-text">3° Andar</p>
                  <p className="card-text">Jardins</p>
                  <p className="card-text">(11) 4444-4444</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 d-flex justify-content-center">
              <div
                className="card text-black bg-light m-3"
                style={{ minWidth: "15rem" }}>
                <div className="card-header font-weight-bold">Minas Gerais</div>
                <img class="card-img-top" src="./img/MG.jpg" alt="Imagem de capa do card"/>
                <div className="card-body">
                  <p className="card-text">Avenida 128bits, 128</p>
                  <p className="card-text">Belo Horizonte - MG</p>
                  <p className="card-text">(47) 5555-5555</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </body>
    </>
  );
};

export default OurStores;
