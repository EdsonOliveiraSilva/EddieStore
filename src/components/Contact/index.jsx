import React from 'react';
import MsgList from './MsgList';



export default class Contact extends React.Component {
    
    
    
    render(){     
        return (
            <>
          <header
            className="container text-black border-bottom border-white mb-3"
            style={{paddingTop:"20px"}}
          >
            <h2>Fale Conosco</h2>
          </header>

                <main className="container mt-1">
                    <div className="row mx-auto">
                        <div className="col-sm-12 col-xl-6 mt-1">
                            <button type="button" className="btn btn-primary btn-lg btn-block">
                                <a className="text-light" href="edisoueu@gmail.com?subject:Contato via site" target="_blank" class="btn btn-danger col-sm-12">
                                    contato@eddiestore.com.br
                                </a>
                            </button>
                        </div>

                        <div className="col-sm-12 col-xl-6 mt-1">
                            <button type="button" className="btn btn-primary btn-lg btn-block">
                                <a className="text-light" href="https://api.whatsapp.com/send?l=pt_BR&phone=05511933430885&text=Oi! Gostaria de mais informações sobre games " target="_blank" class="btn btn-success col-sm-12">
                                    
                                     WhatsApp: (11) 93343-0885
                                </a>
                            </button>
                        </div>
                        

                    </div>
                        <form className="col-12" action="http://localhost/EddieStore/backend/processamento_contato.php" method="post">
                            <div className="form-group">
                            <br/><br/>
                                <label for="nome">Nome</label>
                                <input type="text" className="form-control" id="nome" name="nome" placeholder="Digite seu nome"/>
                            </div>
                            <div className="form-group">
                                <label for="msg" className="text-dark">Mensagem</label>
                                <textarea className="form-control" id="msg" rows="3" name="msg" placeholder="Digite sua mensagem aqui"> </textarea>
                            </div>
                            <button type="submit" className="btn btn-info col-xl-12"> Enviar</button>
                        </form>

                    <br/><br/><br/><br/><br/>
                    
                    <div className="mt-1">
                        <MsgList/>
                    </div>
                </main>
            </>
        );
    }
}