
function Button({text, classname, onclick}) {

    return(
        <buttton className={classname} onClick={onclick}>{text}</buttton>
    )
}

export default Button;