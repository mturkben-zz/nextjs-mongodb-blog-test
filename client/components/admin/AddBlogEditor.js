import React, {useEffect, useState} from "react";
import swal from 'sweetalert';
import {Button, TextField} from "@material-ui/core";

const AddBlogEditor = () => {
	const [blogData, setBlogData] = useState({
		title: "",
		post: "",
		query: "",
	});
	
	
	useEffect(() => {
		const _query = blogData.title.toLowerCase().split(" ").join("-");
		setBlogData({...blogData, query: _query});
	}, [blogData.title])
	
	
	const _onChange = (e) => setBlogData({
		...blogData,
		[e.target.name]: e.target.value
	})
	
	
	const send = async (e) => {
		e.preventDefault();
		
		
		const _send = await fetch("http://localhost:3001/api/admin/addBlog", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(blogData)
		}).then(res => res.json()).then(res => res);
		
		if (_send.status === "OK") {
			swal("Good job!", "You Added A Blog!", "success");
		} else {
			swal("Soory!", "This Blog Already Exit! Change Header 👌", "error");
		}
		
	}
	
	return (
		<div className="w-1/2 mx-auto">
			<div className="text-center">
				<h2> Add Blog Page </h2>
			</div>
			<hr/>
			<TextField label="Blog Header" fullWidth style={{marginBottom: 30}} name="title" value={blogData.title}
			           onChange={(e) => _onChange(e)}/>
			<TextField label="Body" fullWidth multiline rows={4} variant="outlined" name="post" value={blogData.post}
			           onChange={(e) => _onChange(e)}/>
			<div className="float-right m-2">
				<Button variant="outlined" color="primary" onClick={(e) => send(e)}>
					Send
				</Button>
			</div>
		</div>
	);
};

export {AddBlogEditor};
