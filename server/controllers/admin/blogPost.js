const Blog = require("../../models/Blog");

const addBlog = async (req, res) => {
	const {title, post, query} = req.body;
	
	const findDB = await Blog.findOne({query})
	
	if (findDB !== null) {
		res.status(403).json({status: "NO", notice: "This Blog Already Used"})
	} else {
		
		const newBlog = new Blog({title, post, query});
		
		await newBlog
			.save()
			.then(() => {
				res.status(200).json({status: "OK"});
			})
			.catch(() => res.status(403).json({status: "NO", notice: "Error, Try Again"}));
		
	}
	
}

module.exports = {
	addBlog
}
