import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';

export default function Home({session}) {

  if(!session) return <Login/>

  return (
    <>
      <Head>
        <title>Facebook</title>
      </Head>
      {/* header */}
      <Header/>
      <main className='flex'>
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </main>
    </>
  )
}

export async function getServerSideProps(context){
  // get the user
  const session = await getSession(context);

  return {
    props:{
      session
    }
  }
}
