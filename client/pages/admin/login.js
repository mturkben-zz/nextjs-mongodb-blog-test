import React, {useState} from "react";
import {useRouter} from 'next/router'
import {Button, TextField} from '@material-ui/core';
import {AdminProvider} from "../../components";

const Login = () => {
	const router = useRouter();
	const [loginData, setLoginData] = useState({})
	
	console.log(router);
	const login = async event => {
		event.preventDefault();
		
		const _login = await fetch("http://localhost:3001/api/admin/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				username: loginData.username,
				password: loginData.password
			})
		}).then(res => res.json()).then(res => res);
		
		if (_login.status === "OK") {
			await sessionStorage.setItem("token", _login.token)
			router.back()
		} else {
			alert(_login.notice)
		}
		
	}
	
	return (
		<AdminProvider title="Admin | Login">
			<div className="flex m-3">
				<div className="inline-flex justify-center w-full">
					<div className="overflow-hidden rounded-lg shadow-sm w-1/2 bg-gray-50">
						<div className="p-4 text-center">
							<p className="text-lg"> Admin Login </p>
						</div>
						<div className="flex flex-col items-center justify-center my-5">
							<div>
								<TextField
									variant="outlined"
									label="Username"
									type="text"
									className="w-50"
									value={loginData.username}
									onChange={e => setLoginData({...loginData, username: e.target.value})}
								/>
							</div>
							<span className="my-3"/>
							<div>
								<TextField
									variant="outlined"
									label="Password"
									type="password"
									className="w-50 my-3"
									value={loginData.password}
									onChange={e => setLoginData({...loginData, password: e.target.value})}
								/>
							</div>
						</div>
						<div className="p-4 flex items-center justify-center border-t-2 border-gray-400">
							<Button
								variant="outlined"
								color="primary"
								onClick={event => login(event)}
							>
								Login
							</Button>
							<span className="text-gray-800 mx-3"> / </span>
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
		</AdminProvider>
	)
}


export default Login
