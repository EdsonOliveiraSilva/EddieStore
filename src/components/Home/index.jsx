import React from 'react';

const Home = () => {
    return (
    <>

<body class="d-flex flex-column" >

  <header class="container text-black  border-bottom border-black mb-3" >
    <br/>
    <h2>Seja bem vindo(a)!!!</h2>
    <p class="lead">Se você curte algum game, desde Tetris até COD, aqui é o seu lugar, aperte Start e confira as novidades!</p>
  </header>

  <main class="container flex-fill d-flex flex-column text-center text-black justify-content-around">

    <h3>As pessoas fortes não derrubam as outras, </h3>
      <h3>elas ajudam-nas a se erguerem.</h3>
      <h3> -Dragon Ball </h3>
    <br />
    <div class="container text-center text-black font-weight-bold ">
    <img src={"./img/Snake.gif"} alt="Metal Gear Big Boos" height="300px" />
    </div>
    <br />
    <h3></h3>
    <br />
  </main>

</body>

    </>
    );
}

export default Home;


