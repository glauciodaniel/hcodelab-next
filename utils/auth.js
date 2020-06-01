import axios from 'axios';
import Router from 'next/router';
import { Cookies } from 'react-cookie';
// set up cookies
const cookies = new Cookies();
const serverUrl = 'http://localhost:3333';

export async  function handleAuthSSR(ctx) {
    console.log('chamou o utils/auth')
  let token = null;
  if (ctx.req) {
    
    
    // ugly way to get cookie value from a string of values
    // good enough for demostration
    
    token = ctx.req.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  }
  else {
    // we dont have request info aka Client Side
    token = cookies.get('token')
  }

  try {

    const config = {
        header: {Authorization: `Bearer ${token}`}
    }

    await axios.get(serverUrl + "/admin/users", config)
    .then((res)=>console.log(res)).catch(e=>console.log(e));
    // dont really care about response, as long as it not an error
    // console.log("token ping:", response.data.msg)
  } catch (err) {
    // in case of error
    // console.log(err.response.data.msg);
    console.log("redirecting back to main page");
    // redirect to login
    if (ctx.res) {
      ctx.res.writeHead(302, {
         Location: '/'
      })
      ctx.res.end()
    } else {
       Router.push('/admin')
    }
  }
}