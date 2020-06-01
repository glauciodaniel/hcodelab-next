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
    )

}