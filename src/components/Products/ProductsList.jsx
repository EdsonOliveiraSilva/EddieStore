import React, { useState, useEffect } from "react";

const ProductList = () => {
  const [prods, setProds] = useState([]);

  useEffect(async () => {
    const res = await fetch(
      "http://localhost/EddieStore/backend/apifullstack.php"
    );
    setProds(await res.json());
  }, []);

let destaque = (event) => {
    if (event.target.style.width === "260px") {
        event.target.style.width = "100px";
    }
    else {
        event.target.style.width = "260px";
        event.target.style.height = "260px"
    }
}

let redimensiona = (event) => {
    if (event.target.style.width === "120px") {
        event.target.style.width = "260px";
    }
    else {
        event.target.style.width = "120px";
        event.target.style.height = "120px"
    }
}


  return (
    <>

      {prods.map((item) => {
        return (
              <>
              <div  id={item.id_categoria} key={item.idproduto} className="card bg-light sm-3 box-item"  style={{width:"13rem" , height:"18rem"}}>
                <img style={{width:"120px" , height:"100px"}}      src={item.imagem} className="card-img-top mx-auto d-block img-thumbnail" onMouseOver={destaque}  onMouseOut={redimensiona}/>
                <div className="card-body text-center">
                  <p className="card-text font-weight-bold " style={{fontSize:"0.8rem"}}>{item.descricao}</p>
                  <h7 className="card-title" style={{textDecoration:"linethrough"}}><strike>R$ {item.preco}</strike></h7>
                  <h6 className="card-title text-primary font-weight-bold">R$ {item.precofinal}</h6>              
                </div>
               
              </div>
              <br />
              </>

                );
            })}
          </>
          );
          };

export default ProductList;
