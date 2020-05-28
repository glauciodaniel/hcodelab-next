import styles from '../../components/admin/Header.module.css'

export default function Index() {

    return (
        <>
            <header id={styles.header}>
            
                <div className={styles.menu}>

                    <div className={styles['header-top']}>
                    
                        <div className={styles.logo}>

                            <img src="images/ferrari-admin.svg" className={styles['image-ferrari']} />

                        </div>

                        <div className={styles['user-info']}>

                            <img src="images/user-photo.png" className={styles['user-photo']} />

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
        </>
    )

}