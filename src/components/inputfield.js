
function Inputfield ({label, type, placeholder, name, onchange}) {

    return(

        <div className="form-group">
          <label>{label}</label>
          <input type={type}
           placeholder={placeholder} 
           name={name} 
           onChange={onchange} 
           className="form-control"/>
        </div>
    )
}

export default Inputfield;