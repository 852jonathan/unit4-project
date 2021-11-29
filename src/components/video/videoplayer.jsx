import React from 'react'

const VIDEO_WIDTH = 1920
const VIDEO_HEIGHT = 1080

export default function CompsVideoPlayer() {
  return (
    <div className="video-background" position="relative">
      <div className="yt-cover" />
      <iframe
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        src="https://www.youtube.com/embed/CEdTeCFHBb4?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&enablejsapi=1&&widgetid=3&playlist=CEdTeCFHBb4"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />

    </div>
  )
}
