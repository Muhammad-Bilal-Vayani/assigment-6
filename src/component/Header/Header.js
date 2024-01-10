import Logo from "./Logo/Logo"
import MenuArray from "./Navbar/MenuArray"
import Navbars from "./Navbar/Navbar"
import RightMenu from "./RightMenu/RightMenu"

let Header=()=>
{
    return(
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Logo/>
                    </div>
                    <div className="col-md-6">
                    <Navbars/>
                    </div>
                    <div className="col-md-3">
                        <RightMenu/>
                    </div>
                </div>
            </div>
        </header>
    )
}
export  {Header}