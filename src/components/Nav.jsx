import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../actions";

const Nav = () => {
    const isLogged = useSelector(state => state.logged)
    const dispatch = useDispatch()
    return (
        <nav className="navbar p-2" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a class="navbar-item">
                    Redux App
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end" >
                    <a className={"button " + (isLogged ? "is-danger" : "is-primary")} onClick={() => dispatch(signIn())} >{
                        isLogged ? "LogOut" : "LogIn"
                    }</a>
            </div>
            </div>
        </nav >
    )
}

export default Nav