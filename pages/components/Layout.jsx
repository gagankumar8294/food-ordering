import Footer from "./Footer";

export default function Layout({ children }) {
    reeturn(
        <>
            <Navbar />
            {children}
            <Footer/>

        </>
    )
}