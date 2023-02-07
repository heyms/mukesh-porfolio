import * as React from "react";
import placeholder from "../../../../assets/png/placeholder.png";
import { BlogCardPops } from "../../../../types/blog";
import "./single-blog.css";
const Fade = require("react-reveal/Fade");

function BlogCard({ theme, title, desc, date, image, url, id }: BlogCardPops) {
  return (
    <Fade bottom>
      <a
        className='singleBlog'
        key={id}
        href={url}
        target='_blank'
        rel='noreferrer'
        style={{ backgroundColor: theme.quaternary }}>
        <div
          className='singleBlog--image'
          style={{ backgroundColor: theme.secondary }}>
          <img src={image ? image : placeholder} alt={title} />
        </div>
        <div className='singleBlog--body'>
          <p style={{ color: theme.primary }}>{date}</p>
          <h3 style={{ color: theme.tertiary }}>{title}</h3>
          <h6 style={{ color: theme.tertiary }}>{desc}</h6>
        </div>
      </a>
    </Fade>
  );
}

export default BlogCard;
