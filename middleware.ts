
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';



export async function middleware(request){
    //console.log('middleware');
    //console.log(request.nextUrl.pathname);
    const jwt= request.cookies.get('myTokenName');
   if(request.nextUrl.pathname.includes('/dashboard')){
    console.log('jwt', jwt);
    if(jwt == undefined){
        return NextResponse.redirect(new URL('/login', request.url));
    }
    try {
        //const {payload }= await jwtVerify( jwt , new TextEncoder().encode('secret'));
     console.log('payload');
         
        return NextResponse.next();
    } catch (error) {
        console.error('error');
        return NextResponse.redirect(new URL('/login', request.url));

    }

   } 
   export  const config  ={
    matcher:['/dashboard', '/']
   }
    
}