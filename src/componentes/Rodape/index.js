import './Rodape.css'

const Rodape = () => {
    return (
        <footer>
            <img src="/imagens/fundo.png" alt="Rodape" className="rodape__imagem" />
            <div className="icones">
                <a href="https://www.facebook.com/pedrozo.eduardo" target='__blank'>
                    <img src="/imagens/fb.png" alt="Ícone do Facebook" /></a>
                <a href="https://instagram.com/edupedrozzo"><img src="/imagens/ig.png" alt="Ícone do Instagram" /></a>
            </div>

            <img src="/imagens/logo.png" alt="Logo do Organo" />

            <p>Desenvolvido por Eduardo Pedrozo</p>

        </footer>
    )
}

export default Rodape