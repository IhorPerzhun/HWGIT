function MenuItem(props) {
    return (
        <div className="card">
            <div className="cardLogo">
                <img 
                src={props.logoUrl} 
                alt={props.logo} />
            </div>
            <div className="cardTitle">
                <p className="title">
                    {props.title}
                </p>
                <p className="value">
                    {props.value}
                </p>
            </div>
        </div>
    )

    }


function Menu() {
  return (
    <>
        <div>
            <MenuItem logoUrl="" /> 
            <MenuItem logo="Petro" /> 
        </div>
        <div></div>
        <div></div>
        <div></div>
    </>
  )
}

export default Menu