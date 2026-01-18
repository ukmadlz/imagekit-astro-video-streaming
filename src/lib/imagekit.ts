import ImageKit from 'imagekit';

const urlEndpoint = import.meta.env.IMAGEKIT_URL_ENDPOINT || 'https://ik.imagekit.io/ikmedia';

const imagekit = new ImageKit({
  publicKey: import.meta.env.IMAGEKIT_PUBLIC_KEY || 'public_placeholder',
  privateKey: import.meta.env.IMAGEKIT_PRIVATE_KEY || 'private_placeholder',
  urlEndpoint,
});

type Transformation = {
  width?: number;
  height?: number;
  format?: string;
  quality?: number;
  [key: string]: string | number | boolean | undefined;
};

export function getVideoUrl(
  path: string,
  transformation?: Transformation
): string {
  return imagekit.url({
    path,
    transformation: transformation ? [transformation] : undefined,
  });
}

export function getThumbnailUrl(
  videoPath: string,
  options?: {
    second?: number;
    width?: number;
    height?: number;
  }
): string {
  const transformation: Record<string, string | number> = {};

  if (options?.second !== undefined) {
    transformation['so'] = options.second;
  }
  if (options?.width) {
    transformation['width'] = options.width;
  }
  if (options?.height) {
    transformation['height'] = options.height;
  }

  return imagekit.url({
    path: `${videoPath}/ik-thumbnail.jpg`,
    transformation: Object.keys(transformation).length > 0 ? [transformation] : undefined,
  });
}

export { imagekit };
