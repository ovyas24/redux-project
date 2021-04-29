import { useSelector } from "react-redux";
const Logged = () => {
    const isLogged = useSelector(state => state.logged)
    return isLogged ?
        (
            <div class="notification is-primary">
                Information accessable to Logged user Only!
            </div>
        ) :
        (
            <div class="notification is-danger">
                Login to access this info
            </div>
        )
}

export default Logged