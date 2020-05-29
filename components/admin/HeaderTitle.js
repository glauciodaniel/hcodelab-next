import styles from './HeaderTitle.module.css'

export default function HeaderTitle(props) {

    return (
        <>
            <hr className="italy" />
                
            <h1 id={styles.title}>{props.text}</h1>
        </>
    )

}