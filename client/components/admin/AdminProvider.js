import React, {useEffect, useState} from "react";
import Head from "next/head"
import {useRouter} from "next/router";

const AdminProvider = (props) => {
    const router = useRouter()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        controlAdmin()
    }, [])

    const controlAdmin = async () => {
        const getAdmin = await sessionStorage.getItem("token")
        setLoading(false)
        getAdmin === null && await router.push("/admin/login")
    }

    return (
        <>
            <Head>
                <title> {props.title} </title>
            </Head>
            {
                loading ? <div> loading... </div> : props.children
            }
        </>
    );
}


export {AdminProvider}
