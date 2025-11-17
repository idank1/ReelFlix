/**
 * Video Storage Abstraction Layer
 * 
 * This abstraction allows us to easily switch between:
 * - Public URLs (current MVP implementation)
 * - Cloud storage buckets (S3, Google Cloud Storage, etc.)
 * 
 * For MVP, we use public video URLs, but the code is structured
 * to easily integrate with bucket storage in the future.
 */

export interface VideoStorageConfig {
  type: 'public' | 's3' | 'gcs' | 'dropbox';
  baseUrl?: string;
  bucketName?: string;
  region?: string;
  // Add more config options as needed for different storage types
}

export interface VideoStorageService {
  /**
   * Get the full URL for a video
   * @param videoPath - The path or identifier for the video
   * @returns The full URL that can be used to access the video
   */
  getVideoUrl(videoPath: string): string;
  
  /**
   * Upload a video (for future use)
   * @param file - The video file to upload
   * @returns The path/identifier for the uploaded video
   */
  uploadVideo?(file: Buffer | string): Promise<string>;
}

/**
 * Public URL Storage Service (MVP)
 * For MVP, we assume videos are stored as public URLs
 */
export class PublicUrlStorageService implements VideoStorageService {
  constructor(private config: VideoStorageConfig) {}

  getVideoUrl(videoPath: string): string {
    // If videoPath is already a full URL, return it
    if (videoPath.startsWith('http://') || videoPath.startsWith('https://')) {
      return videoPath;
    }
    
    // Otherwise, construct URL from baseUrl if provided
    if (this.config.baseUrl) {
      return `${this.config.baseUrl}/${videoPath}`;
    }
    
    // Fallback: return as-is (assuming it's already a valid URL)
    return videoPath;
  }
}

/**
 * Factory function to create the appropriate storage service
 */
export function createVideoStorageService(config: VideoStorageConfig): VideoStorageService {
  switch (config.type) {
    case 'public':
      return new PublicUrlStorageService(config);
    // Future implementations:
    // case 's3':
    //   return new S3StorageService(config);
    // case 'gcs':
    //   return new GCSStorageService(config);
    default:
      throw new Error(`Unsupported storage type: ${config.type}`);
  }
}

// Default storage service instance
export const videoStorage = createVideoStorageService({
  type: 'public',
  baseUrl: process.env.VIDEO_STORAGE_BASE_URL || undefined
});

