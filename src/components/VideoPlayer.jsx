import { useRef, useState } from 'react';

const VideoPlayer = () => {
    const videoRef = useRef(null);  // video elementga murojaat qilish uchun ref
    const [isPlaying, setIsPlaying] = useState(false);  // video ijro holati

    const handlePlayPause = () => {
        const video = videoRef.current;
        if (isPlaying) {
            video.pause();
        } else {
            video.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleStop = () => {
        const video = videoRef.current;
        video.pause();
        video.currentTime = 0;
        setIsPlaying(false);
    };

    const handleMute = () => {
        const video = videoRef.current;
        video.muted = !video.muted;
    };

    return (
        <div>
            <h2>React Video Player</h2>
            {/* Video element */}
            <video ref={videoRef} width="640" height="360" controls>
                <source src="https://r812110.yandexwebcache.org/sono-bisque-doll/3.480.c10dac95764c7241.mp4?hash1=3e14357a461d2c6662cdbd7682aee83c&hash2=8ca1446559ac26efdc91660d61d21c6f"type="video/mp4" />
                Sizning brauzeringiz videoni qo‘llab-quvvatlamaydi.
            </video>

            {/* O'yin boshqaruvlari */}
            <div className="controls">
                <button onClick={handlePlayPause}>
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button onClick={handleStop}>Stop</button>
                <button onClick={handleMute}>Mute/Unmute</button>
            </div>
        </div>
    );
};

export default VideoPlayer;
