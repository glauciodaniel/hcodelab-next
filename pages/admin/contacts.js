import Layout from '../../components/admin/Layout'
import HeaderTitle from '../../components/admin/HeaderTitle'
import { handleAuthSSR } from '../../utils/auth'
import styles from '../../components/admin/Contacts.module.css'
import Button from '../../components/admin/Button'

export default function Contacts() {

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
                            <tr>
                                <td>João Rangel</td>
                                <td>17/04/2020 às 00:45</td>
                            </tr>
                            <tr>
                                <td>Glaucio Daniel</td>
                                <td>17/04/2020 às 00:45</td>
                            </tr>
                        </tbody>

                    </table>

                </section>

                <section className={styles.messages}>

                    <div className={styles.messageHeader}>
                        <div className={styles.messageName}>
                            <h2>Glaucio Daniel</h2>
                            <h4>glaucio@hcode.com.br</h4>
                        </div>

                        <div className={styles.messageTime}>
                            <p>17/04/2020 às 00:45</p>
                            <Button styles={{
                                color: "var(--red)",
                                border: "1px solid var(--red)",
                                margin: "0 auto"
                            }}>Excluir</Button>
                        </div>
                    </div>

                    <div className={styles.messageContent}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at arcu et dolor pharetra sodales id sit amet mi. Donec metus tellus, pharetra nec eleifend nec, bibendum sed arcu. Vivamus ornare consectetur lacus vel ultrices. Integer ac nisl mollis, dignissim nibh in, commodo nibh. Maecenas lorem neque, varius in urna nec, gravida laoreet lectus. Fusce sapien massa, condimentum vitae orci a, fermentum tempor magna. Etiam hendrerit ullamcorper lorem eu fringilla. Ut laoreet, ipsum sit amet venenatis dictum, tellus felis pretium neque, nec pretium urna tortor in felis. Integer auctor fermentum nibh sit amet laoreet. Donec facilisis magna in massa vulputate, ut ornare nibh iaculis. Morbi id nibh ac tortor auctor tempor.

                            Donec id tempus orci. Curabitur tincidunt imperdiet eleifend. Vivamus finibus, urna vitae accumsan semper, elit nunc aliquam nunc, nec venenatis mauris leo in enim. Duis volutpat scelerisque laoreet. Cras suscipit, nisi vitae bibendum feugiat, nunc nulla ultricies ex, vel cursus elit ligula eu odio. Vivamus dui augue, congue lacinia interdum pharetra, lobortis at nunc. Integer laoreet quis risus quis accumsan. Nam finibus erat ut tortor varius, eget blandit nulla commodo. Nullam luctus quam eget quam commodo pretium. Vivamus aliquam eleifend semper.

                            Ut finibus urna sit amet mi ultrices faucibus. Nullam dapibus diam odio. Nam faucibus ligula eu lacus suscipit, ut dapibus metus hendrerit. Nullam aliquam, elit a luctus euismod, dui lorem rhoncus velit, vel molestie ligula orci in neque. Sed tempor ex ut nulla dictum molestie. Duis sit amet velit et ante sodales posuere. Nulla vitae quam blandit, pulvinar tortor eu, auctor purus. Vivamus non dolor facilisis, venenatis velit et, malesuada neque. In vel tortor quis sem imperdiet eleifend. Mauris dapibus eu nisl egestas tempus. Sed volutpat consequat neque vel pharetra. Ut molestie tincidunt mi vitae facilisis. Fusce rhoncus, velit non imperdiet dapibus, metus diam efficitur est, sit amet condimentum turpis leo vitae neque. Curabitur sit amet suscipit ligula. Etiam quis varius turpis, nec tincidunt dui.
                        </p>
                    </div>

                </section>

            </div>

        </Layout>
    )

}

Contacts.getInitialProps = async (ctx) => {
    // await handleAuthSSR(ctx)

    return {}
}
