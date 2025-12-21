import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom'

const Menu = () => {
    const [menu, setMenu] = useState(0)
    const [profile, setProfile] = useState(false)
    const navigation = useNavigate()
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
    }, []);

    const menuClick = (idx) => {
        setMenu(idx);
    }
    const logout = () => {
        localStorage.removeItem("user");
        navigation("/login");
    };

  return (
    <div className='flex justify-between w-[70%] '>
        <div className='p-1 pl-6'>
            <img className='w-8 p-1' src="images/kite-logo.svg" alt="" />
        </div>
        <div className='text-gray-500 flex mr-20 gap-5'>
            <ul className=' p-1 text-gray-500 flex gap-5'>
                <Link onClick={() => menuClick(0)} to='/summary'><li className='hover:text-red-500 cursor-pointer'>Dashboard</li></Link>
                <Link onClick={() => menuClick(1)} to='/orders'><li className='hover:text-red-500 cursor-pointer'>Orders</li></Link>
                <Link onClick={() => menuClick(2)} to='/holdings'><li className='hover:text-red-500 cursor-pointer'>Holdings</li></Link>
                <Link onClick={() => menuClick(5)} to='/funds'><li className='hover:text-red-500 cursor-pointer'>Funds &nbsp;&nbsp; |</li></Link>
            </ul>
            <div onClick={() => setProfile(!profile)} className='relative p-1 flex gap-4'>
                <img className='cursor-pointer' src="images/account-circle-fill.png" alt="" />
                <h2 className='cursor-pointer'>{user ?.username|| "USER_ID"}</h2>

                {profile && (
                    <div className='absolute top-full  -ml-6 mt-1 h-fit w-50 bg-white shadow-lg rounded-md border z-50 overflow-auto'>
                        <ul className='p-4 flex flex-col gap-2'>
                            <li className='text-xl hover:text-red-400 cursor-pointer w-fit'>My Profile</li>
                            <li onClick={() => navigation('/support')} className='text-xl hover:text-red-400 cursor-pointer w-fit'>Support</li>
                            <li onClick={logout} className='text-xl hover:text-red-400 cursor-pointer w-fit'>Logout</li>
                        </ul>
                    </div>
                )}

            </div>
        </div>
    </div>
  )
}

export default Menu