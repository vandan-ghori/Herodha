import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

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
        <div className='flex justify-between items-center w-full px-4 md:px-0'>
            <div className='md:pl-6 py-2'>
                <img className='w-6 md:w-7' src="images/kite-logo.svg" alt="Logo" />
            </div>
            
            <div className="md:hidden"> 
               <button onClick={() => setProfile(!profile)} className="focus:outline-none">
                  <img className='w-8 h-8 rounded-full bg-gray-100 p-1' src="images/menu-line.png" alt="Menu" /> 
               </button>
            </div>
    
            <div className='hidden md:flex text-gray-500 mr-10 lg:mr-20 gap-8 items-center'>
                <ul className='flex gap-6 text-sm font-medium'>
                    <Link onClick={() => menuClick(0)} to='/summary'><li className='hover:text-[#387ED1] hover:bg-gray-50 px-2 py-1 rounded cursor-pointer transition'>Dashboard</li></Link>
                    <Link onClick={() => menuClick(1)} to='/orders'><li className='hover:text-[#387ED1] hover:bg-gray-50 px-2 py-1 rounded cursor-pointer transition'>Orders</li></Link>
                    <Link onClick={() => menuClick(2)} to='/holdings'><li className='hover:text-[#387ED1] hover:bg-gray-50 px-2 py-1 rounded cursor-pointer transition'>Holdings</li></Link>
                    <Link onClick={() => menuClick(5)} to='/funds'><li className='hover:text-[#387ED1] hover:bg-gray-50 px-2 py-1 rounded cursor-pointer transition'>Funds</li></Link>
                </ul>
                
                <div onClick={() => setProfile(!profile)} className='relative flex gap-2 items-center cursor-pointer hover:bg-gray-50 p-1 rounded'>
                    <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold border border-purple-200">
                        {user?.username?.[0]?.toUpperCase() || "U"}
                    </div>
                    <span className="text-xs font-semibold max-w-[100px] truncate">{user?.username || "USER"}</span>
    
                    {profile && (
                        <div className='absolute top-full right-0 mt-2 w-48 bg-white shadow-xl rounded-lg border border-gray-100 z-50 overflow-hidden py-1 animate-in fade-in zoom-in-95'>
                             <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
                                <p className="text-sm font-medium text-gray-900 truncate">{user?.username}</p>
                                <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                            </div>
                            <ul className='flex flex-col'>
                                <li className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'>My Profile</li>
                                <li onClick={() => navigation('/support')} className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'>Support</li>
                                <hr className="my-1 border-gray-100" />
                                <li onClick={logout} className='px-4 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer font-medium'>Logout</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
    
            {profile && (
                <div className="md:hidden absolute top-14 left-0 right-0 bg-white border-b border-gray-200 shadow-xl z-50 p-4 animate-in slide-in-from-top-2">
                     <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                            {user?.username?.[0]?.toUpperCase() || "U"}
                        </div>
                        <div className="overflow-hidden">
                            <p className="font-semibold text-gray-900 truncate">{user?.username}</p>
                            <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                        </div>
                     </div>
                     <ul className="space-y-2">
                        <Link to='/summary' onClick={() => setProfile(false)}><li className="block p-3 rounded-lg bg-blue-50 text-blue-700 font-medium">Dashboard</li></Link>
                        <Link to='/orders' onClick={() => setProfile(false)}><li className="block p-3 rounded-lg hover:bg-gray-50 text-gray-600">Orders</li></Link>
                        <Link to='/holdings' onClick={() => setProfile(false)}><li className="block p-3 rounded-lg hover:bg-gray-50 text-gray-600">Holdings</li></Link>
                        <Link to='/funds' onClick={() => setProfile(false)}><li className="block p-3 rounded-lg hover:bg-gray-50 text-gray-600">Funds</li></Link>
                        <li onClick={() => { navigation('/support'); setProfile(false); }} className="block p-3 rounded-lg hover:bg-gray-50 text-gray-600">Support</li>
                        <li onClick={logout} className="block p-3 rounded-lg text-red-600 font-medium hover:bg-red-50 mt-2 border-t border-gray-100">Logout</li>
                     </ul>
                </div>
            )}
        </div>
      )
}

export default Menu