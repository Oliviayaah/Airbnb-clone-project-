import React from "react"

export default function card() {
    return (
        <div className="card">
            <img 
            src="../Katie-Zaferes.png" 
            className="Card--image" />
            alt="Image of Katie Zaferes."
            />
            <div className="Card--stats">
                <img 
                src="../images/star.png" 
                className="Card--star"
                alt="Star icon."
                />
                <span>5.0</span>
                <span className="gray">(6)</span>
                <span  className="gray">USA</span>
                </div>
                <h2>Life lessons with Katie Zaferes</h2>
                <p><span className="bold">From $136</span> /person</p>
            </div>
        
    )
}