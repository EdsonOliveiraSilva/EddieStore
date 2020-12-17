import React from "react";


const Footer = () => {
  return (
    <>
      <footer className="footer text-center">
            <div className="container">
                <div className="row">
                
                    <div className="mx-auto">
                        <h4 className="text-uppercase mb-4">Formas de Pagamento</h4>
                        <div className="text-center"><img src="./img/pagamento.png" alt="forma de pagamento" width="500" height="100" /></div>
                        <div className="container"><small>Copyright © Edson Oliveira 2020</small></div>
                        <p className="lead mb-0">
                        
                            
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        
        <div className="copyright py-4 text-center text-white">
            <div className="container"><small>Copyright © Edson Oliveira 2020</small></div>
        </div>

    </>
  );
};

export default Footer;

