var header = document.getElementById('header')
export function headerLoad(){
        header.innerHTML += `<div class="header__container">
        <img class="header__imagem" src="assets/imagens/logo.png" alt="logo Mirabilis">
        <nav class="header__nav">
            <ul class="header__lista" type="none">
                <li><a href="index.html" class="header__link">home</a></li>
                <li><a href="portifolio.html" class="header__link">portifólio</a></li>
                <li><a href="contato.html" class="header__link">contato</a></li>
            </ul>
        </nav>
    
        </div>`
        
}