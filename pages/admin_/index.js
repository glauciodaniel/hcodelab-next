import Header from '../../components/admin/Header'
import Footer from '../../components/admin/Footer'
import React from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { handleAuthSSR } from '../../utils/auth';


export default function Index() {

    const cookies = new Cookies();
    const serverUrl = 'http://localhost:3333';

    return (
        <>

            <Header />

            <Footer />

        </>
    )

}

Index.getInitialProps = async (ctx) => {
    console.log('chamou o getInitialProps')
    await handleAuthSSR(ctx);
  
    // Must return an object
    return {}
  }