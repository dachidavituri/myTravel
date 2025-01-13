import { videos } from "@/data";
import { PauseCircleTwoTone, PlayCircleTwoTone } from "@ant-design/icons";
import { useRef, useState } from "react";
import { videoContainerStyles } from "./videos-cva";

const Videos: React.FC = () => {
  const videoRefs = [useRef(null), useRef(null), useRef(null)];
  const [playing, setPlaying] = useState<boolean[]>(videos.map(() => false));

  const handlePlayPause = (index: number) => {
    const video = videoRefs[index]?.current as HTMLVideoElement | null;
    if (video) {
      if (video.paused) {
        video.play();
        setPlaying((prev) =>
          prev.map((state, i) => (i === index ? true : state)),
        );
      } else {
        video.pause();
        setPlaying((prev) =>
          prev.map((state, i) => (i === index ? false : state)),
        );
      }
    }
  };

  return (
    <div className="mt-6 flex justify-center space-x-4 md:mt-0 md:w-1/2">
      {videos.map((videoSrc, index) => (
        <div
          key={index}
          className={videoContainerStyles({
            margin: index === 1 ? "md4" : index === 2 ? "md8" : "none",
          })}
        >
          <video
            ref={videoRefs[index]}
            src={videoSrc}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
          />
          <button
            onClick={() => handlePlayPause(index)}
            className="absolute bottom-2 left-2 rounded-full bg-white p-1 shadow-lg"
          >
            {playing[index] ? (
              <PauseCircleTwoTone twoToneColor="orange" />
            ) : (
              <PlayCircleTwoTone twoToneColor="orange" />
            )}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Videos;
