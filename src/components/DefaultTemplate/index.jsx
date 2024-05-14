import { DefaultStyled } from "./style"

export const DefaultTemplate = ({children}) => {
    return (
        <DefaultStyled>
            {children}
        </DefaultStyled>
    )
}