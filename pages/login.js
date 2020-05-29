import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../components/Login.module.css';


export default function Login(){
    return (
        <body>
            <Header />
                <main id={styles.login} className={styles.page}>
                    <div className={styles['page-header']}>
                        <header>
                            <h1>Login</h1>
                        </header>
                        <hr className="italy" />
                    </div>
                    <section>
                        <div className={styles.image}></div>
                        <form>
                            <div>
                                <div className={styles.fields}>
                                    <div className={styles.field}>
                                        <input type="email" name="email" id="email" />
                                        <label htmlFor="email">E-mail</label>
                                    </div>
                                    <div className={styles.field}>
                                        <input type="password" name="password" id="password" />
                                        <label htmlFor="password">Senha</label>
                                    </div>
                                </div>
                                <div className={styles.actions}>
                                    <button type="submit">Entrar</button>
                                    <a href="#">Esqueci a senha</a>
                                </div>
                            </div>
                            <p>Você ainda não tem conta, <a href="/register">clique aqui</a> e cadastre-se.</p>
                        </form>
                    </section>
                </main>
            <Footer />
        </body>
    )
}