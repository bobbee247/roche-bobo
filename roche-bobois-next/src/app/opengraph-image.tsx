import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Roche Bobois Residences St. Petersburg – Ultra-Luxury Condominiums';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#1A1714',
        }}
      >
        {/* Background hero image */}
        <img
          src="https://clinicboom.co/wp-content/uploads/maxresdefault.jpg"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* Dark gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            background:
              'linear-gradient(135deg, rgba(26,23,20,0.82) 0%, rgba(26,23,20,0.55) 50%, rgba(26,23,20,0.75) 100%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '60px 80px',
          }}
        >
          {/* Top accent line */}
          <div
            style={{
              width: 60,
              height: 3,
              backgroundColor: '#D94F8E',
              marginBottom: 36,
              display: 'flex',
            }}
          />

          {/* Main title */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 300,
              color: '#FAF7F0',
              letterSpacing: '0.06em',
              lineHeight: 1.1,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span>ROCHE BOBOIS</span>
            <span>RESIDENCES</span>
          </div>

          {/* Location */}
          <div
            style={{
              fontSize: 18,
              fontWeight: 400,
              color: 'rgba(250,247,240,0.6)',
              letterSpacing: '0.35em',
              marginTop: 20,
              display: 'flex',
            }}
          >
            ST. PETERSBURG, FLORIDA
          </div>

          {/* Divider */}
          <div
            style={{
              width: 120,
              height: 1,
              backgroundColor: 'rgba(217,79,142,0.5)',
              marginTop: 40,
              marginBottom: 40,
              display: 'flex',
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 300,
              color: '#D94F8E',
              letterSpacing: '0.3em',
              display: 'flex',
            }}
          >
            LIVE DIFFERENTLY
          </div>

          {/* Bottom accent line */}
          <div
            style={{
              width: 60,
              height: 3,
              backgroundColor: '#D94F8E',
              marginTop: 36,
              display: 'flex',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
