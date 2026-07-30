import { ImageResponse } from 'next/og';

export const SIZES = {
  '32': 32,
  '192': 192,
  '512': 512
} as const;

export const contentType = 'image/png';

export function generateImageMetadata() {
  return Object.entries(SIZES).map(([id, size]) => ({
    id,
    contentType,
    size: { width: size, height: size }
  }));
}

async function loadPlayfairBold(text: string) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&text=${encodeURIComponent(text)}`,
    {
      // Request a TTF that Satori (ImageResponse) can parse
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1'
      }
    }
  ).then(res => res.text());

  const match = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);

  if (!match) throw new Error('Failed to load Playfair Display font');

  return fetch(match[1]).then(res => res.arrayBuffer());
}

export default async function Icon({ id }: { id: Promise<string> }) {
  const iconId = (await id) as keyof typeof SIZES;
  const letter = 'K';
  const fontData = await loadPlayfairBold(letter);

  const getFontSize = () => {
    if (iconId === '32') return 24;
    else if (iconId === '192') return 128;
    else return 384;
  };

  return new ImageResponse(
    <div
      style={{
        borderRadius: '12px',
        fontFamily: 'Playfair Display',
        fontWeight: 700,
        lineHeight: 1,
        fontSize: getFontSize(),
        background: 'black',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }}
    >
      {letter}
    </div>,
    {
      width: SIZES[iconId],
      height: SIZES[iconId],
      fonts: [
        {
          name: 'Playfair Display',
          data: fontData,
          style: 'normal',
          weight: 700
        }
      ]
    }
  );
}
