const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active'); 
});

function renderFooter() {
    const footerContent = `
        <div class="footer-container">
            <div class="social-media">
                <h3>Siga-me nas redes sociais:</h3>
                <a href="https://www.facebook.com/doze.bluebelt" target="_blank"><img src="img/facebook_icon-icons.com_53612.png" alt="fabebook logo"></a>
                <a href="https://www.instagram.com/ivanofontes/" target="_blank"><img src="img/iconfinder-social-media-applications-3instagram-4102579_113804.png" alt=" intagramlogo"></a>
                <a href="https://www.linkedin.com/in/ívano-fontes/" target="_blank"><img src="img/linkedin_socialnetwork_17441.png" alt="linkedin logo"></a>
            </div>
            <div class="container">
                <p>&copy; 2025 Ívano Fontes. Todos os direitos reservados.</p>
            </div>
        </div>`;
    document.getElementById("mainfooter").innerHTML = footerContent;
}

function renderHeader() {
    const headerContent = `
        <div class="container">
        <div class="perfil">
        <img src="img/perfil.jpg" alt="minha foto" class="foto-perfil">
        <div class="info-perfil">
            <h1>Ívano Fontes</h1>
            <hr>
            <p>Desenvolvedor Fullstack</p>
        </div>
        </div>
        <nav>
            <div class="menu-toggle" id="mobile-menu">
            <span class="bar bar1"></span>
            <span class="bar bar2"></span>
            <span class="bar bar3"></span>
            </div>
            <div class="nav-menu" id="nav-menu">
            <ul>
                <li><a href="#projetos">projetos</a></li>
                <li><a href="form.html">contato</a></li>
                <li><a href="#blog">blog</a></li>
            </ul>
            </div>
        </nav>
        </div>`;
    document.getElementById("mainheader").innerHTML = headerContent;
}
