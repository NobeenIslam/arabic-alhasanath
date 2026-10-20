import { ImageResponse } from 'next/og';
import { SITE_NAME } from '@/lib/constants/site.constants';

export const runtime = 'edge';

export const alt = `About ${SITE_NAME}`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {SITE_NAME}
    </div>,
    {
      ...size,
    }
  );
}
