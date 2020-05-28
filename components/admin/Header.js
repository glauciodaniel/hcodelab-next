import styles from './Header.module.css'
import IconFerrariMobile from './IconFerrariMobile'

export default function Header() {

    return (
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

            </div>

        </header>
    )

}