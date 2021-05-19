import React, {useEffect, useState} from "react";
import Head from 'next/head'
import Link from 'next/link'
import {CircularProgress} from '@material-ui/core';

const Home = () => {
	
	const [blogData, setBlogData] = useState([]);
	const [loading, setLoading] = useState(true);
	
	
	useEffect(() => {
		blogs()
	}, [])
	
	
	const blogs = async () => {
		
		
		const _blogs = await fetch("http://localhost:3001/api/allBlog", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			}
		}).then(res => res.json()).then(res => res);
		setLoading(false)
		setBlogData(_blogs.blogs);
	}
	
	
	return (
		<div>
			<Head>
				<title>Next With Mongo Blog App</title>
			</Head>
			
			<header className="w-3/4 mx-auto p-4 border-b-2 border-gray-200">
				<h1> Next With Mongo Blog App </h1>
			</header>
			
			<main className="w-1/2 mx-auto">
				{
					loading ? <CircularProgress/> :
						<>
							{
								blogData.map((item, i) => <Blog key={i} _id={item._id} title={item.title} query={item.query}
								                                blog={item.post}/>)
							}
						</>
				}
			</main>
		</div>
	)
}


const Blog = (props) => {
	
	return (
		<div className="p-2">
			<Link
				href={{
					pathname: `/blogs/[slug]`,
					query: {slug: `${props.query}`, _id: props._id},
				}}
				as={`/blogs/${props.query}`}
			>
				<h2
					className="text-2xl leading-relaxed tracking-wide font-mono font-bold hover:underline hover:text-gray-800 cursor-pointer"> {props.title}</h2>
			</Link>
			<div style={{textIndent: 20}}>
				{
					props.blog.length >= 150 ? props.blog.substr(0, 150) + "..." : props.blog
				}
			</div>
		</div>
	);
}

export default Home;
