import styles from './Card.module.css'

export default function Card(props) {

    return (
        <div className={styles.card}>

            {props.children}

            <div className={styles.actions}>

                <button>{props.btnText}</button>

            </div>

        </div>
    )

}