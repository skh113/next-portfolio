import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Seyed Keyvan Hosseini | Portfolio',
    short_name: 'SKH Portfolio',
    description: 'Personal portfolio and blog of Seyed Keyvan Hosseini.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        // TODO: Add the correct icon
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        // TODO: Add the correct icon
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  };
}
