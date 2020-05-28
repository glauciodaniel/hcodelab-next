import styles from '../../components/admin/Header.module.css'
import IconFerrariMobile from '../../components/admin/IconFerrariMobile'
import stylesHome from '../../components/admin/Home.module.css'

export default function Index() {

    return (
        <div id={styles.content}>
            <header id={styles.header}>

                <div className={styles.logo}>

                    <IconFerrariMobile />

                    <button type="button" id={styles['btn-open']}>
                        <svg id="menu-black-18dp" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <path id="Caminho_215" data-name="Caminho 215" d="M0,0H32V32H0Z" fill="none"/>
                            <path id="Caminho_216" data-name="Caminho 216" d="M3,18H29V16H3Zm0-5H29V11H3ZM3,6V8H29V6Z" transform="translate(0 4)" fill="#000" />
                        </svg>
                    </button>

                </div>

                <div className={styles.menu}>
                    
                    <div className={styles['header-top']}>

                        <div className={styles['user-info']}>

                            <img src="images/user-profile-photo.png" className={styles['user-photo']} />

                            <h2>João Rangel</h2>

                            <p>joaohcrangel@gmail.com</p>

                            <a href="#">Editar meus dados</a>
                        
                        </div>

                        <ul className={styles.links}>

                            <li className={styles.link}>
                                <img src="images/icon-users.svg" />

                                <a href="#">Usuários</a>
                            </li>

                            <li className={styles.link}>
                                <img src="images/icon-contacts.svg" />

                                <a href="#">Contatos</a>
                            </li>

                            <li className={styles.link}>
                                <img src="images/icon-logout.svg" />

                                <a href="#">Sair</a>
                            </li>

                        </ul>
                    
                    </div>

                    <p className={styles.rights}>2020 © Hcode. All rights reserved.</p>

                </div>

            </header>

            <main id={stylesHome.home}>

                <h1>Usuários</h1>

                <hr class="italy" />

                <section className={stylesHome.users}>

                    <div className={stylesHome.user}>

                        <div className={stylesHome['user-info']}>

                            <div className={stylesHome['user-data']}>

                                <h2>João Rangel</h2>
                                
                                <p>joaohcrangel@gmail.com</p>

                                <p>18 de março de 2020</p>

                            </div>

                            <img src="images/user-photo.png" className={stylesHome['user-photo']} />

                        </div>

                        <div className={stylesHome.actions}>

                            <button>Editar</button>

                        </div>

                    </div>

                </section>

            </main>

        </div>
    )

}