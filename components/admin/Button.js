<<<<<<< HEAD
export default function Button(props) {

    const styles = {
        border: "none",
        background: "var(--white)",
        textTransform: "uppercase",
        color: "var(--green)",
        border: "1px solid var(--green)",
        borderRadius: "4px",
        padding: "16px"
    }

    return (
        <>
            <button style={Object.assign(styles, props.styles)}>{props.children}</button>
        </>
=======
import styles from './Button.module.css'

export default function Button(props) {

    return (
        <button className={styles.button}>{props.children}</button>
>>>>>>> 52b3476b5e70a908327d4905b6f195dd9df73dee
    )

}