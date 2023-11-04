import { useState } from "react"
import CreatePost from "./Pages/CreatePost"
import ReadPost from "./Pages/ReadPost"
import EditPost from "./Pages/EditPost"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import "./index.css"

function App() {
	const [posts, setPosts] = useState([])

	return (
		<Router>
			<div className="background">
			<nav>
				<Link to="/">Create Post</Link>
				<Link to="/new">Read Post</Link>
			</nav>
			<Routes>
				<Route path="/" element={<CreatePost setPosts={setPosts}/>} />
				<Route path="/new" element={<ReadPost posts={posts}/>} />
				<Route path="/edit/:id" element={<EditPost />} />
				{/* <Route path="/more/:id" element={<MoreInfo posts={posts}/>} /> */}
			</Routes>
			</div>
		</Router>
	)
}

export default App
