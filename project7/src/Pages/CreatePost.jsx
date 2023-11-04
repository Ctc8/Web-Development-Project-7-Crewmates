import React, { useState } from "react"
import { supabase } from "../client"
import "./CreatePost.css"

const CreatePost = () => {
  const [post, setPost] = useState({ name: "", speed: "" })

	const handleSubmit = async e => {
		e.preventDefault()
    await supabase
      .from("Posts")
      .insert({
          name: post.name,
          speed: post.speed,
      })
      .select()
	}

	return (
		<div className="create-post-container">
      <h1>Create your Crewmates here!</h1>
			<form onSubmit={handleSubmit} className="create-post-form">
				<label>
					Name:
					<input
						type="text"
						value={post.name}
						onChange={e => setPost({...post, name: e.target.value})}
					/>
				</label>
				<label>
					Speed:
					<input
						type="text"
						value={post.speed}
						onChange={e => setPost({...post, speed: e.target.value})}
					/>
				</label>
				<input type="submit" value="Create Crewmate" />
			</form>
		</div>
	)
}

export default CreatePost
