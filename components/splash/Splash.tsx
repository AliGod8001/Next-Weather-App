"use client"
import React, { useEffect } from "react";

import { useUserStore } from "@/store/user-store";

import Loading from "../ui/loading/Loading";

const Splash = ({
    children
} : {
    children: React.ReactNode
}) => {
    const [city, setInitialValues] = useUserStore(state => [state.city, state.setInitialValues])

    useEffect(() => {
        if ( !localStorage.getItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY!) ) {
            localStorage.setItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY!, JSON.stringify({
                city: "Paris",
                lat: 52.52,
                long: 13.41,
                period: "daily",
                offset: 2,
            }))

        } else {
            const item : LocalStorageState = JSON.parse(localStorage.getItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY!)!)
            setInitialValues(item)
        }

    }, [city])

    return <>{city ? <>{children}</> : <Loading />}</>
}

export default Splash;