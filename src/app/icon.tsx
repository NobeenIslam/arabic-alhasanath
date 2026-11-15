import { ImageResponse } from 'next/og';
import { BRAND_COLORS } from '@/lib/constants/brand.constants';
import { loadGoogleFont } from '@/lib/google-font';

export const size = {
  width: 48,
  height: 48,
};
export const contentType = 'image/png';

const letter = 'ل';

const Icon = async () =>
  new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: BRAND_COLORS.green,
        color: BRAND_COLORS.gold,
        fontFamily: 'Aref Ruqaa',
        fontSize: 44,
        paddingBottom: 6,
        lineHeight: 1,
      }}
    >
      {letter}
    </div>,
    {
      ...size,
      fonts: [
        {
          name: 'Aref Ruqaa',
          data: await loadGoogleFont('Aref Ruqaa', 700, letter),
          weight: 700,
        },
      ],
    }
  );

export default Icon;
