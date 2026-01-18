# Astro Video Demo with ImageKit

A demo application showcasing different approaches to adding video to an Astro site using [ImageKit](https://imagekit.io) for video hosting and optimization.

## What This Demo Shows

1. **Basic HTML5 Video** - Native video element with zero JavaScript
2. **Reusable Video Component** - Pre-rendered Astro component with configurable props
3. **Video.js Player** - Advanced playback with custom controls and playback speed options
4. **Adaptive Bitrate Streaming** - HLS streaming with automatic quality adjustment
5. **Lazy Loading Video** - Thumbnail with play button that loads video on click
6. **ImageKit Transformations** - On-the-fly video resizing and format selection

## Quick Start (No Configuration Required)

The demo works out of the box using ImageKit's public demo media library:

```sh
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to see the demo with sample videos.

## Using Your Own ImageKit Account

To use your own videos and transformations, you'll need an [ImageKit account](https://imagekit.io/registration) (free tier available).

### Getting Your Credentials

1. Sign up or log in at [imagekit.io](https://imagekit.io)
2. Go to **Developer Options** in your dashboard
3. Copy the following values:
   - **URL Endpoint** (e.g., `https://ik.imagekit.io/your_id`)
   - **Public Key**
   - **Private Key**

### Setup

1. Create a `.env` file in the project root:
   ```sh
   IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id
   IMAGEKIT_PUBLIC_KEY=your_public_key
   IMAGEKIT_PRIVATE_KEY=your_private_key
   ```

2. Upload a video named `example_video.mp4` to your ImageKit media library (or update the `videoPath` in `src/pages/index.astro` to match an existing video in your library)

3. Restart the dev server to pick up the new environment variables

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `localhost:4321`        |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview production build locally            |

## Project Structure

```
/
├── src/
│   ├── components/
│   │   ├── Video.astro          # Basic reusable video component
│   │   ├── VideoPlayer.astro    # Video.js player component
│   │   ├── StreamingPlayer.astro # HLS streaming component
│   │   └── LazyVideo.astro      # Lazy-loading video component
│   ├── lib/
│   │   └── imagekit.ts          # ImageKit SDK configuration
│   └── pages/
│       └── index.astro          # Demo page
└── package.json
```

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [ImageKit Documentation](https://docs.imagekit.io)
- [ImageKit Video Transformations](https://docs.imagekit.io/features/video-transformation)
