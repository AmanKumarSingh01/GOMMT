import React from "react";
import "./Index.scss";
function Post() {
  return (
    <div className="__post">
      <p className="__caption">Property post dashboard</p>
      <h1>Welcome to GOMMT!</h1>
      <div className="divider" />
      <div className="__post__property__wrapper">
        <form onSubmit={() => alert("Form submitted")}>
          <p>Name</p>
          <input type="text" />
          <p>Location</p>
          <input type="text" />
          <p>Price</p>
          <input type="text" />
          <p>ImageUrl external</p>
          <input type="text" />
          <p>ImageUrl internal </p>
          <input type="text" />
          <p>ImageUrl bedroom</p>
          <input type="text" />
          <p>ImageUrl garden</p>
          <input type="text" />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}

export default Post;
