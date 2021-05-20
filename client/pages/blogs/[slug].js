import React from "react";
import Head from 'next/head';
import {IoArrowBackCircleOutline} from "react-icons/io5";
import {useRouter} from "next/router";

const Blog = ({blog}) => {
	const router = useRouter();
	
	return (
		<>
			<Head>
				<title> {blog.title} </title>
			</Head>
			
			<header>
				<IoArrowBackCircleOutline size={35} className="absolute top-10 left-10" onClick={()=> router.back() }/>
			</header>
			
			<div className="w-1/2 mx-auto mt-4">
				<div className="p-2">
					<h2
						className="text-2xl leading-relaxed tracking-wide font-mono font-bold">
						{blog.title}
					</h2>
					<div style={{textIndent: 20}}>
						{blog.post}
					</div>
				</div>
			</div>
		</>
	)
}

Blog.getInitialProps = async ({query}) => {
	
	const _blog = await fetch(`http://localhost:3001/api/getOneBlog/${query._id}`, {
		method: "POST"
	}).then(res => res.json()).then(res => res).catch(err => err);
	
	if (_blog.status === "OK") {
		return {blog: _blog.blog}
	} else {
		return {blog: null}
	}
}

export default Blog;
