import { Link } from "react-router-dom";
import logo from "../../assets/LogoSm.svg";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const Header = () => {
    const {user, userLogout} = useContext(UserContext);
    return (
        <header>
            <div className="border">
                <div className="containerMd">
                    <img src={logo} />
                    <Link className="link sm" to="/" onClick={() => userLogout()}>Sair</Link>
                </div>
            </div>

            <div className="border">
                <div className="containerMd row">
                    <h1 className="title">Olá, {user?.name}!</h1>
                    <p className="label gray">{user?.course_module}</p>
                </div>
            </div>
        </header>
    );
};