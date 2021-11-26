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
        // src="https://www.youtube.com/embed/Ys6Pv8PAy7A?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&enablejsapi=1&&widgetid=3&playlist=Ys6Pv8PAy7A"
        src="https://www.youtube.com/embed/kMjyy5v9sI8?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&enablejsapi=1&&widgetid=3&playlist=kMjyy5v9sI8"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />

    </div>
  )
}
