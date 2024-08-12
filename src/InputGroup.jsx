function InputGroup({ type, id, name, value, labelText, changeHandler }) {
    return(
        <div className="input-group">
            <label htmlFor={id}>{labelText}</label>
            <input 
             type={type} 
             name={name} 
             value={value} 
             onChange={changeHandler} 
             id={id}/>
        </div>
    )
}

export default InputGroup