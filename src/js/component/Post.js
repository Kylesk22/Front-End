import React from "react";

export const Post = ({title, content, author, date_posted}) => {
    return (
        <div className="card bg-light mb-3" style={{maxWidth: "18rem"}}>
            <div className="card-header">{author} {date_posted}</div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
            </div>
        </div>
    )
}