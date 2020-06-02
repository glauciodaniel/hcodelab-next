import Layout from '../../components/admin/Layout'
import HeaderTitle from '../../components/admin/HeaderTitle'
import { handleAuthSSR } from '../../utils/auth'
import styles from '../../components/admin/Contacts.module.css'
import Button from '../../components/admin/Button'
import React, { useState } from 'react'
import axios from 'axios'

export default function Contacts() {

    const contacts = [{
        id: 1,
        name: 'João Rangel',
        created_at: '17/04/2020 às 00:45',
        email: 'joao@hcode.com.br',
        msg: 'Lorem Ipsum'
    }, {
        id: 2,
        name: 'Glaucio Daniel',
        created_at: '17/04/2020 às 00:45',
        email: 'glaucio@hcode.com.br',
        msg: 'Lorem Ipsum 123'
    }, {
        id: 3,
        name: 'Djalma Sindeaux',
        created_at: '17/04/2020 às 00:45',
        email: 'djalma@hcode.com.br',
        msg: 'Next is Awesome'
    }, {
        id: 4,
        name: 'Ronaldo Braz',
        created_at: '17/04/2020 às 00:45',
        email: 'ronaldo@hcode.com.br',
        msg: 'Hcode Treinamentos'
    }, {
        id: 5,
        name: 'Anthony Rafael',
        created_at: '17/04/2020 às 00:45',
        email: 'anthony@hcode.com.br',
        msg: 'Vai Corinthians!!!'
    }];

    const [values, setValues] = useState({})

    const setMessageInfo = data => {
        
        setValues(data);
        
    }

    const removeMessage = () => {



    }

    return (
        <Layout>

            <HeaderTitle text="Contatos" />

            <div className={styles.container}>

                <section className={styles.contacts}>

                    <table>

                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Enviado em</th>
                            </tr>
                        </thead>

                        <tbody>
                            {contacts.map(contact => (
                                <tr key={contact.id} onClick={() => setMessageInfo(contact)}>
                                    <td>{contact.name}</td>
                                    <td>{contact.created_at}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </section>

                {values.id && <section className={styles.messages}>

                    <div className={styles.messageHeader}>
                        <div className={styles.messageName}>
                            <h2>{values.name}</h2>
                            <h4>{values.email}</h4>
                        </div>

                        <div className={styles.messageTime}>
                            <p>{values.created_at}</p>
                            <Button styles={{
                                color: "var(--red)",
                                border: "1px solid var(--red)",
                                margin: "0 auto"
                            }} onClick={removeMessage}>Excluir</Button>
                        </div>
                    </div>

                    <div className={styles.messageContent}>
                        <p>{values.msg}</p>
                    </div>

                </section>}

            </div>

        </Layout>
    )

}

Contacts.getInitialProps = async (ctx) => {
    await handleAuthSSR(ctx)

    return {}
}
