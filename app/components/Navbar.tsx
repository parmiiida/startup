import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { auth, signOut, signIn } from "@/auth";

const Navbar = async () => {

    const session = await auth();
  return (
    <header className='py-3 px-5 font-work-sans bg-white shadow-sm '>
        <nav className='flex justify-between items-center'>
            <Link href="/">
                <Image src='/logo.png' alt='logo' width={144} height={30}/>
            </Link>

            <div className='flex gap-5 items-center'>
                {session && session?.user ?(
                    <>
                        <Link href="/startup/create">
                            <span>Create</span>
                        </Link>

                        <form action={async () => {
                            'use server';

                            await signOut({redirectTo : '/'})
                        }}>
                            <span>LogOut</span>
                        </form>

                        <Link href={`/user/${session?.id}`}>
                             <span>{session?.user?.name}</span>
                        </Link>
                    </>
                ) : (
                    <form action={async () => {
                        'use server' ;

                        await signIn('github')}}>
                        <button type='submit'>sign in</button>
                    </form>
                )}
            </div>
        </nav>
    </header>
  )
}

export default Navbar