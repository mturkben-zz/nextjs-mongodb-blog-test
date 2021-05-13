import React, {useState} from "react";
import {useRouter} from "next/router";
import {Button, TextField} from '@material-ui/core';
import Head from "next/head";

const Register = () => {
    const router = useRouter();
    const [registerData, setRegisterData] = useState({})

    const register = async event => {
        event.preventDefault();
        const _register = await fetch("http://localhost:3001/api/admin/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: registerData.username,
                password: registerData.password
            })
        }).then(res => res.json()).then(res => res)

        if (_register.status === "OK") {
            return router.push("login")
        }
    }

    return (
        <>
            <Head>
                <title> Admin | Register </title>
            </Head>
            <div className="flex m-3">
                <div className="inline-flex justify-center w-full">
                    <div className="overflow-hidden rounded-lg shadow-sm w-1/2 bg-gray-50">
                        <div className="p-4 text-center">
                            <p className="text-lg">Admin Login</p>
                        </div>
                        <div className="flex flex-col items-center justify-center my-5">
                            <div>
                                <TextField
                                    variant="outlined"
                                    label="Username"
                                    type="text"
                                    className="w-50"
                                    value={registerData.username}
                                    onChange={e => setRegisterData({...registerData, username: e.target.value})}
                                />
                            </div>
                            <span className="my-3"/>
                            <div>
                                <TextField
                                    variant="outlined"
                                    label="Password"
                                    type="password"
                                    className="w-50 my-3"
                                    value={registerData.password}
                                    onChange={e => setRegisterData({...registerData, password: e.target.value})}
                                />
                            </div>
                            <span className="my-3"/>
                            <div>
                                <TextField
                                    variant="outlined"
                                    label="Password"
                                    type="password"
                                    className="w-50 my-3"
                                    value={registerData.passwordRepeat}
                                    onChange={e => setRegisterData({...registerData, passwordRepeat: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="p-4 flex items-center justify-center border-t-2 border-gray-400">
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={() => router.push("register")}
                            >
                                Register
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Register
