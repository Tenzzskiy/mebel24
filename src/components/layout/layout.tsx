import {Props} from "./layout.props";
import {AppWrapper, loadScript} from "../../utilites/helpers/helpers";
import {useEffect} from "react";






const Layout = ({children}: Props): JSX.Element => {
    useEffect(() => {
        loadScript('/main.js');
    });
    return (
        <>
            <AppWrapper >
                {children}
            </AppWrapper>
        </>
    );
};

export default Layout;
