const Blog = (props) => {
	
	console.log(props);
	
	return (
		<>
			<div> asdasd</div>
		</>
	)
}

Blog.getInitialProps = async ({query}) => {
	
	const _blog = await fetch(`http://localhost:3001/api/getOneBlog/${query._id}`, {
		method: "POST"
	}).then(res => res.json()).then(res => res).catch(err => err);
	console.log(_blog);
	if (_blog.status === "OK") {
		return {blog: _blog.blog}
	} else {
		return {blog: null}
	}
}

export default Blog;
