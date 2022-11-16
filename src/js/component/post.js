import React from "react";

export const Post = () => {


    return (
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Title</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Content</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </form>
    )
}