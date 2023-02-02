class FooterScript extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3">
                    <div class="container" align="center">
                        <img src="./images/footer/LogoFooter.svg">
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="container">
                        <h6>Menú</h6>
                    <div class="container-fluid" id="menuFooter">
                        <div class="row">
                            <div class="col-lg-6">
                                <ul>
                                    <li><a href="index.html">Inicio</a></li>
                                    <li><a href="nosotros.html">Nosotros</a></li>
                                    <li><a href="clientes.html">Clientes</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-6">
                                <ul>
                                    <li><a href="servicios.html">Servicios</a></li>
                                    <li><a href="cotiza.html">Cotiza</a></li>
                                    <li><a href="cotiza.html">Legalidad</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="container">
                        <h6>Contáctanos</h6>
                        <p>hello@designdeux.com</p>
                        <p>CDMX, México</p>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="container">
                        <h6>Social Media</h6>
                        <div class="iconosSocialMedia">
                            <ul>
                                <li>
                                    <div class="iconoSMfooter">
                                        <img src="./images/footer/Instagram.svg">
                                    </div>
                                </li>
                                <li>
                                    <div class="iconoSMfooter">
                                        <img src="./images/footer/tiktok.svg">
                                    </div>
                                </li>
                                <li>
                                    <div class="iconoSMfooter">
                                        <img src="./images/footer/facebook.svg">
                                    </div>
                                </li>
                                <li>
                                    <div class="iconoSMfooter">
                                        <img src="./images/footer/youtube.svg">
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-sm">
                    <p style="text-align:center">
                        © 2023 DEUX. Todos los derechos reservados. Términos y condiciones & Avisos de privacidad
                    </p>
                </div>
            </div>
        </div>`
    }
}

customElements.define('deux-footer', FooterScript);