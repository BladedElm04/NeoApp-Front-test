import { StyledHeader } from "./style"
import { IoMenu, IoSearch } from "react-icons/io5";

export const Header = () => {
    return (
        <StyledHeader>
            <div className="header__container">
                <button className="header__button"><IoMenu size={50}/></button>
                <img src="../../src/assets/marvelLogo.png" alt="Marvel Logo" />
                <button className="header__button"><IoSearch size={50}/></button>
            </div>
        </StyledHeader>
    )
}