 
import Head from 'next/head'


export default function Index(){

    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Ferrari</title>
            </Head>
            <header id="header">
                <div id="overlay" data-close="menu"></div>
                <a href="/"><img src="images/logo.svg" id="logo" alt="Logo" /></a>
                <button type="button" id="btn-open">
                    <svg id="menu-black-18dp" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                   
                        <path id="Caminho_215" data-name="Caminho 215" d="M0,0H32V32H0Z" fill="none"/>
                        <path id="Caminho_216" data-name="Caminho 216" d="M3,18H29V16H3Zm0-5H29V11H3ZM3,6V8H29V6Z" transform="translate(0 4)"/>
                    </svg>
                </button>
                <nav className="menu">
                    <div>
                        <button type="button" id="btn-close" data-close="menu">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                
                                <path id="caminho" d="M19,6.41,17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59,13.41,12Z"/>
                                <path d="M0,0H24V24H0Z" fill="none"/>
                            </svg>
                        </button>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/our-history.html">Nossa História</a></li>
                            <li><a href="/gallery.html">Galeria</a></li>
                            <li><a href="/contact.html">Contato</a></li>
                        </ul>
                    </div>
                    <a href="register.html" className="btnRegister">
                        Registre-se / Login
                    </a>
                </nav>
            </header>
            <main id="home">        
                <hr className="italy" />
                <header>
                    
                    <h1>SF90 Stradale</h1>
                    <a href="/galeria.html">Detalhes</a>

                </header>
                <section className="gallery">
                    <figure>
                        <img src="/images/photos/espostivas-amarela-375x250.jpg" alt="Ferrari Amarela" />	
                        <figcaption>
                            <h2>Esportivas</h2>
                            <p>Ferrari F1000</p>
                        </figcaption>
                    </figure>

                    <figure>
                        <img src="/images/photos/esportivas-interior-375x250.jpg" alt="Ferrari Interior" />	
                        <figcaption>
                            <h2>Esportivas</h2>
                            <p>Ferrari F1000</p>
                        </figcaption>
                    </figure>

                    <figure>
                        <img src="/images/photos/espostivas-azul-375x250.jpg" alt="Ferrari Azul" />	
                        <figcaption>
                            <h2>Esportivas</h2>
                            <p>Ferrari F1000</p>
                        </figcaption>
                    </figure>

                </section>
                <section className="inspiration">

                    <div></div>

                    <div className="text">
                        <h2>Inspirando<span>Gerações</span></h2>
                        <hr />
                        <p>Assertively iterate enterprise-wide portals through synergistic products. Efficiently build adaptive schema…</p>
                        <p className="complete">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab itaque nesciunt sapiente optio nobis atque veritatis rem aut ea expedita, reprehenderit fugit reiciendis, minus quod obcaecati inventore at placeat provident!</p>
                    </div>

                    <div className="car animated">
                        <div className="wheel"></div>
                    </div>

                </section>

                <section className="know">

                    <div className="know-1">
                        <h1>Conheça a Máquina</h1>
                        <p>Assertively iterate enterprise-wide portals through synergistic products. Efficiently build adaptive schemas after transparent quality vectors. Phosfluorescently optimize competitive resources after extensive convergence. Rapidiously optimize high-quality meta-services via distributed architectures. Credibly deliver 24/365.</p>
                        <a href="/gallery.html">Detalhes</a>
                    </div>

                    <img src="/images/top-view.jpg" alt="Ferrari Top View" />

                    <div className="know-2">
                        
                        <dl>
                            <dt>Motorização</dt>
                            <dd>Assertively iterate enterprise-wide portals through synergistic products.</dd>

                            <dt>Desempenho</dt>
                            <dd>Assertively iterate enterprise-wide portals through synergistic products.</dd>

                            <dt>Conforto</dt>
                            <dd>Assertively iterate enterprise-wide portals through synergistic products.</dd>
                        </dl>

                    </div>

                </section>
            </main>
            <footer id="footer">
                <button type="button">
                    <img src="images/icon-arrow-up.svg" alt="up" />
                </button>
                <div className="columns">
                    <div>
                        <ul className="links">
                            <li className="title">Links</li>
                            <li><a href="/">Home</a></li>
                            <li><a href="/our-history.html">Nossa História</a></li>
                            <li><a href="/gallery.html">Galeria</a></li>
                            <li><a href="/contact.html">Contato</a></li>
                        </ul>
                        <ul>
                            <li className="title">Contato</li>
                            <li>E-mail: support@ferrari.it</li>
                            <li className="social">
                                <a href="#"><img src="images/facebook.svg" alt="Facebook"/></a>
                                <a href="#"><img src="images/twitter.svg" alt="Twitter"/></a>
                                <a href="#"><img src="images/youtube.svg" alt="YouTube"/></a>
                                <a href="#"><img src="images/instagram.svg" alt="Instagram"/></a>
                            </li>
                        </ul>
                    </div>
                    <a href="/"><img src="images/ferrari-footer.svg" alt="Logo" className="logo" /></a>
                </div>
                <p>2020 © Hcode. All rights reserved.</p>
            </footer>
        </>
    )


}