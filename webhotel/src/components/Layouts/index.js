import { children } from "react"
import NavBar from "../NavBar"
import Head from 'next/head'
import Footer from "../Footer"

const Layout = ({children}) => {
    return (
        <>
        <Head>            
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <title>Web Hotel</title>
        </Head>
        <NavBar />
        {children}
        <Footer />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </>
    )
}

export default Layout