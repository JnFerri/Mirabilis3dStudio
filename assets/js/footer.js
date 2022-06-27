
var footer = document.getElementById('footer')
export function footerLoad(){
       
        footer.innerHTML = `<div class="footer__container">
        <div class="footer__mirabilis">
            <ul class="footer__lista1">
                <li>
                    <img class="footer__logo" src="assets/imagens/logo.png" alt="logo mirabilis 3D studio">
                </li>
                <li><h4 class="footer__name">Mirabilis 3D studio 2022&copy;</h4></li>
            </ul>
        </div>
        <div class="footer__contato">
            <ul class="footer__lista2">
                <li><h4 class="footer__contato-titulo">Contato :</h4></li>
                <li>
                    <img class="footer__redes" src="assets/imagens/email.png" alt="email"> <p class="footer__escrita">mirabilis3d@gmail.com</p>
                </li>
                <li>
                    <img  class="footer__redes"src="assets/imagens/whatsapp.png" alt="whatsapp"><p class="footer__escrita">(49)99811-6251</p>
                </li>
                <li>
                    <a class="footer__link" href="https://www.instagram.com/mirabilis3dstudio/" target="_blank"> <img class="footer__redes" src="assets/imagens/instagram.png" alt="instagram"> Mirabilis 3D Studio</a>
                </li>
            </ul>
        </div>
    </div>`
    }