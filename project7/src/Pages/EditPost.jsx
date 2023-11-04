import React, { useState, useEffect } from "react"
import { supabase } from "../client"
import { useParams } from "react-router-dom"
import "./EditPost.css"

const EditPost = () => {
	const { id } = useParams()
	const [post, setPost] = useState({})

	const deletePost = async e => {
		e.preventDefault()
		await supabase.from("Posts").delete().eq("id", id)
		window.location = "/"
	}

	const updatePost = async event => {
		event.preventDefault()

		await supabase
			.from("Posts")
			.update({
				name: post.name,
				speed: post.speed,
			})
			.eq("id", id)

		window.location = "/"
	}

	useEffect(() => {
		async function fetchPost() {
			const { data } = await supabase
				.from("Posts")
				.select()
				.eq("id", id)
				.single()

			setPost(data)
		}
		fetchPost()
	}, [id])

	const handleChange = event => {
		setPost({
			...post,
			[event.target.name]: event.target.value,
		})
	}

	return (
		<div>
			<form onSubmit={updatePost} className="edit-post-form">
				<label>Name</label>
				<input
					type="text"
					id="name"
					name="name"
					value={post.name}
					onChange={handleChange}
				/>
				<label>Speed</label>
				<input
					type="text"
					id="speed"
					name="speed"
					value={post.speed}
					onChange={handleChange}
				/>
				<input type="submit" value="Update" />
				<button className="delete" onClick={deletePost}>
					Delete
				</button>
			</form>
		</div>
	)
}

export default EditPost
