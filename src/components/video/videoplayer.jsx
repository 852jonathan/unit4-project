import React from "react";


function CompsVideoPlayer(props) {
  const url = `https://dgjerrv5x.mo.cloudinary.net/burger-background-video`;

  return (
    <>
    <div className="iframe-container">
      <iframe className="responsive-iframe"
        title="Cloud Hosted Video Player"
        src={url}
        width="640"
        height="480"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
        frameBorder="0"
      ></iframe>
      </div>
    </>
  );
}
export default CompsVideoPlayer
