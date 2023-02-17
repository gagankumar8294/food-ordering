import Footer from "./Footer";
import Navbar from "./Navba";

export default function Layout({ children }) {
    return(
        <>
            <Navbar />
                {children}
            <Footer/>

        </>
    )
}