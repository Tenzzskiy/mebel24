import {Props} from "./layout.props";
import {AppWrapper} from "../../utilites/helpers/helpers";





const Layout = ({children}: Props): JSX.Element => {
    return (
        <>
            <AppWrapper >
                {children}
            </AppWrapper>
        </>
    );
};

export default Layout;
