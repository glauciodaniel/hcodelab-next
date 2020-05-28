import Header from '../../components/admin/Header'
import styles from '../../components/admin/Home.module.css'
import Footer from '../../components/admin/Footer'

export default function Index() {

    const users = [{
        id: 1,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        date: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 2,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        date: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 3,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        date: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 4,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        date: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 5,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        date: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 6,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        date: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 7,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        date: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 8,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        date: '18 de março de 2020',
        photo: 'user-photo.png'
    }, {
        id: 9,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        date: '18 de março de 2020',
        photo: 'user-photo.png'
    }];

    return (
        <div id="content">

            <Header />

            <main id={styles.home}>

                <h1>Usuários</h1>

                <hr className="italy" />

                <section className={styles.users}>

                    {users.map(user => (

                        <div className={styles.user} key={user.id}>

                            <div className={styles['user-info']}>

                                <div className={styles['user-data']}>

                                    <h2>{user.name}</h2>
                                    
                                    <p>{user.email}</p>

                                    <p>{user.date}</p>

                                </div>

                                <img src={"images/" + user.photo} className={styles['user-photo']} />

                            </div>

                            <div className={styles.actions}>

                                <button>Editar</button>

                            </div>

                        </div>

                    ))}

                </section>

            </main>

            <Footer />

        </div>
    )

}