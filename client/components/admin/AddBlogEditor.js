import React, {useEffect, useState} from "react";

const AddBlogEditor = () => {
	
	const [blog, setBlog] = useState("");
	const [loading, setLoading] = useState(true);
	
	
	useEffect(() => {
		setTimeout(() => setLoading(false), 2000)
	}, [])
	
	return (
		<>
			{
				loading ? <div> Loading... </div> :
					<>
						<div>
						</div>
					</>
			}
		</>
	)
}

export {
	AddBlogEditor
}
