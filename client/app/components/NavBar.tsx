import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
<div className="navbar bg-primary">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link href='login'>Log In</Link></li>
      <li><Link href='signup'>Sign Up</Link></li>
      <li><Link href='explore' className='font-light bg-secondary-content border-none text-base-100 hover:bg-neutral'>Explore Topics</Link></li>
      </ul>
    </div>
    <a className="text-base-100 text-xl navbar ps-5" style={{fontFamily: 'var(--title-font)', fontSize: '28px', fontWeight: '600'}}>The Curator</a>
  </div>
  <div className="navbar-end hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 font-light flex items-center">
      <li><Link href='explore' className='btn font-light bg-secondary-content border-none text-base-100 hover:bg-neutral'>Explore Topics</Link></li>
      <li><Link href='login' className='text-base-100 hover:bg-primary'>Log In</Link></li>
      <li><Link href='signup' className='text-base-100 hover:bg-primary'>Sign Up</Link></li>
    </ul>
  </div>
</div>
  )
}

export default NavBar