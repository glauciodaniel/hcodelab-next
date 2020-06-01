import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../components/Login.module.css';
import React, {useState} from 'react';
import Link from 'next/link.js';
import axios from 'axios';
import { Cookies } from 'react-cookie';

export default function Login(){

    const cookies = new Cookies();
    
    let [token, setToken] = useState(cookies.get('token')|| null)

    const [values, setValues] = useState({email:'', password:''})

    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
        console.log(name)
    }

    const handleFormSubmit = e =>{
        e.preventDefault()

        console.log('chamou o login')
+   
      axios.post(`https://hcodelab-adonis.herokuapp.com/auth`, values)
        .then(
            (res)=>{
                const tokenData = res.data.token
                cookies.set('token', tokenData)
                setToken(tokenData)
                window.location.href=("/admin")
            }
        )    
    }
    return (
        <>
            <Header />
                <main id={styles.login} className={styles.page}>
                        <hr className="italy" />
                    
                    <section>
                        <div className={styles.image}></div>
                        <form onSubmit={handleFormSubmit}>
                            <div>
                                <div className={styles.fields}>
                                    <div className={styles.field}>
                                        <input type="email" name="email" id="email" onChange={handleInputChange} />
                                        <label htmlFor="email">E-mail</label>
                                    </div>
                                    <div className={styles.field}>
                                        <input type="password" name="password" id="password" onChange={handleInputChange} />
                                        <label htmlFor="password">Senha</label>
                                    </div>
                                </div>
                                <div className={styles.actions}>
                                    <button type="submit">Entrar</button>
                                    <a href="#">Esqueci a senha</a>
                                </div>
                            </div>
                            <p>Você ainda não tem conta, 
                                <Link href="/register">
                                <a >clique aqui</a>
                                    </Link> e cadastre-se.</p>
                        </form>
                    </section>
                </main>
            <Footer />
        </>
    )
}