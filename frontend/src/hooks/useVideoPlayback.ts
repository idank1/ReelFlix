import { useState, useRef } from 'react';
import { Video, AVPlaybackStatus } from 'expo-av';

/**
 * Hook to handle video playback state
 */
export function useVideoPlayback() {
  const videoRef = useRef<Video>(null);
  const [status, setStatus] = useState<AVPlaybackStatus | null>(null);

  return {
    videoRef,
    status,
    setStatus,
  };
}

