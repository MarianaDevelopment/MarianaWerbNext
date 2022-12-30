import '../styles/globals.css'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import UserContext from '@/components/context/userContext'
import { getUserData, logoutUser } from "@/request/authRequest";

export default function App({ Component, pageProps }) {
    const [user, setUser] = useState(null)
    const [hide, setHide] = useState(false)
    const router = useRouter()

    useEffect(() => {
      const userData = async () => {
        const data = await getUserData();
        if (data.status === 200) {
          setUser(data.data);
          setHide(true);
        }
      };
      userData();
    }, []);

    const handleLogout = async () => {
      const data = await logoutUser();
      if (data.status === 200) {
        setUser(null);
        setHide(false);
        router.push("/");
      }
    };

    return (
        <UserContext.Provider value={{ user, setUser, hide, setHide, handleLogout }}>
            <Component {...pageProps} />
        </UserContext.Provider>
    )
}