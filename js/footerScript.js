class FooterScript extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3">
                    <div class="container" align="center">
                        <img src="/images/footer/LogoFooter.svg">
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
                                    <li><a href="legalidad.html">Legalidad</a></li>
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
                        <table style="text-align:center;">
                    <tr>
                        <th>
                            <div class="container iconosRS">
                                <a href="https://www.instagram.com/deux.diseno.mx/'" target="_blank">
                                    <img src="/images/footer/Instagram.svg" style="width:26px;margin-top: 12px;">
                                </a>
                            </div>
                        </th>
                        <th>
                            <div class="container iconosRS">
                                <a href="https://www.facebook.com/deux.diseno.mx'" target="_blank">
                                    <img src="/images/footer/facebook.svg" style="width:26px;margin-top: 12px;">
                                </a>
                            </div>
                        </th>
                        <th>
                            <div class="container iconosRS">
                                <a href="https://www.youtube.com/channel/UCk9jq6eN76kU0gWe9x1CoVA'" target="_blank">
                                    <img src="/images/footer/youtube.svg" style="width:26px;margin-top: 12px;">
                                </a>
                            </div>
                        </th>
                        <th>
                            <div class="container iconosRS">
                                <a href="https://www.tiktok.com/@designdeux?is_from_webapp=1&sender_device=pc" target="_blank">
                                    <img src="/images/footer/tiktok.svg" style="width:26px;margin-top: 12px;">
                                </a>    
                            </div>
                        </th>
                    </tr>
                </table>
                    </div>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-sm">
                    <p style="text-align:center">
                        © 2023 DEUX. Todos los derechos reservados. <a href="legalidad.html">Términos y condiciones & Avisos de privacidad</a>
                    </p>
                </div>
            </div>
        </div>`
    }
}

customElements.define('deux-footer', FooterScript);