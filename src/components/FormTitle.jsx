function FormTitle({ id, title, handleClick }) {
    return(
        <button className="form-title" id={id} onClick={handleClick}>
            {title}
        </button>
    )
}

export default FormTitle