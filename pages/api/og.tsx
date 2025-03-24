import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

const OgImageHandler = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Mate';
  const body = searchParams.get('body');

  // Define your background images
  const backgroundImage1 = 'https://exp.nostradome.com/misc/nostragem.png';
  const backgroundImage2 = 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'; // Replace with your second image URL

  // Conditionally set the background image based on the `body` parameter
  const backgroundImage = body ? backgroundImage2 : backgroundImage1;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${backgroundImage})`, // Use the dynamically selected background image
          backgroundSize: 'contain', // Ensure the image covers the entire div
          backgroundPosition: 'center', // Center the image
          color: 'blue', // Set text color to contrast with the background
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add shadow to text for better readability
          backgroundRepeat: 'no-repeat',
        }}
      >
        Hello {title}
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
};

export default OgImageHandler;