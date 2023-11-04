import React, { useState, useEffect } from "react"
import "./ReadPost.css"
import { Link } from "react-router-dom"
import Card from "../Components/Card"
import { supabase } from "../client"

const ReadPosts = () => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		const fetchPost = async () => {
			const { data } = await supabase
				.from("Posts")
				.select()
				.order("created_at", { ascending: true })

			setPosts(data)
		}
		fetchPost()
	}, [])

	return (
		<div className="ReadPosts card-container">
			{posts && posts.length > 0 ? (
				posts.map((post, index) => (
					<div key={index} className="card">
						<Card id={post.id} name={post.name} speed={post.speed} />
					</div>
				))
			) : (
				<h2 className="blank">{"No Crewmates Yet 😞"}</h2>
			)}
		</div>
	)
}

export default ReadPosts
