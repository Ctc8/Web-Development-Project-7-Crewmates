import React from "react"
import { Link } from "react-router-dom"
import "./Card.css"
import Crewmate from "../Crewmate.png"

const Card = props => {
	return (
		<div className="card">
			<Link to={props.id}></Link>
			<h2 className="name">Name: {props.name}</h2>
            <img src={Crewmate} alt="image"></img>
			<p className="speed">Speed: {props.speed} mph</p>
            <Link to={`/edit/${props.id}`}><button>Edit Post</button></Link> 
            <Link to={`/more/${props.id}`}><button>View More</button></Link> 
		</div>
	)
}

export default Card
