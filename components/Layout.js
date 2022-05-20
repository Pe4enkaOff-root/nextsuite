import Footer from "./Footer";
import Header from "./Header.js";

const Layout = ({children}) =>(
    <>
        <Header />
        {children}
        <Footer />
    </>
);

export default Layout;