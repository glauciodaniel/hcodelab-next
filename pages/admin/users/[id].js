import { useRouter } from 'next/router'
import Header from '../../../components/admin/Header'
import HeaderTitle from '../../../components/admin/HeaderTitle'
import Footer from '../../../components/admin/Footer'
import Card from '../../../components/admin/Card'
import styles from '../../../components/admin/UserEdit.module.css'

export default function Users() {

    const router = useRouter()
    const { id } = router.query // Selecionando o ID do usuário pela URL

    const userObj = {
        id: 9,
        name: 'João Rangel',
        email: 'joaohcrangel@gmail.com',
        date: '18 de março de 2020',
        photo: 'user-photo.png'
    }
    
    return (
        <div id="content">

            <Header />

            <main id="edit-user">
                
                <HeaderTitle text="Editar Usuário" /> {/* Esse código poderá ser adicionado depois, se desejar */}

                <section className={styles.cards}>

                    <Card user={userObj} btnText="Teste">

                        <>
                            <h2>{userObj['name']}</h2>
                            
                            <p>{userObj['email']}</p>

                            <p>{userObj['date']}</p>
                        </>

                        <img src={"/images/" + userObj['photo']} className='user-photo' />

                    </Card>

                </section>

            </main>

            <Footer />

        </div>
    )

}