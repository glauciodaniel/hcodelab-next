import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import styles from '../components/Register.module.css';
import React, {useState} from 'react';
import axios from 'axios';

/*
import React from 'react';
const Register = ()=>{
    return (
        <body>
            <Header />
            <Footer />
        </body>
    )
}

export default Register;
*/

/*
class Register extends React.Component {
    render() {
        return (
            <body>
                <Header />

                <Footer />
            </body>
        )
    }
}

export default Register
*/

export default function Register(){


    const [values, setValues] = useState({name:'',email:'',birth_at: '', password:'',level:'1'})

    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
        console.log(name)
    }

    const hadleFormSubmit = e =>{
        e.preventDefault()


        axios.post(`https://hcodelab-adonis.herokuapp.com/users`, values)
        .then(res => {
            e.reset()
            console.log('Parabéns',res)
        })
    }


    return (
        <>
            <Header />
            <main id={styles.register} className={styles.page}>
                        <hr className="italy" />
                   
                    <section>
                        <div className={styles.image}></div>
                        <form onSubmit={hadleFormSubmit}>
                            <div>
                                <div className={styles.fields}>
                                    <div className={styles.field}>
                                        <input type="text" name="name" id="name" onChange={handleInputChange}/>
                                        <label htmlFor="name">Nome Completo</label>
                                    </div>
                                    <div className={styles.field}>
                                        <input type="email" name="email" id="email" onChange={handleInputChange}/>
                                        <label htmlFor="email">E-mail</label>
                                    </div>
                                </div>
                                <div className={styles.fields}>
                                    <div className={styles.field}>
                                        <input type="date" name="birth_at" id="birth_at" onChange={handleInputChange}/>
                                        <label htmlFor="birth_at">Data de Nascimento</label>
                                    </div>
                                    <div className={styles.field}>
                                        <input type="password" name="password" id="password"onChange={handleInputChange} />
                                        <label htmlFor="password">Senha</label>
                                    </div>
                                </div>
                                <button type="submit">Cadastrar</button>
                            </div>
                            <p>Se você já possui uma conta,  <Link href="/login">
                                <a >clique aqui</a>
                                    </Link> para fazer o login.</p>
                        </form>
                    </section>
                </main>
            <Footer />
        </>
    )
}