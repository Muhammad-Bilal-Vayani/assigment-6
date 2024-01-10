import MenuArray from "./MenuArray"

let Navbars=()=>
{
    return(
        <ul className="navMenu">
        {
            MenuArray.map((element,index)=>
            {
                return <li key={index}><a href="">{element.name}</a></li>
            })
        }
       </ul>
    )
}

export default Navbars