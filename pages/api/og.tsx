// /pages/api/og.tsx

import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

const  OgImageHandler = async (req: NextRequest)=> {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title')||'Mate'
    // const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // const jsonData = await data.json()
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
        backgroundImage: 'url(https://exp.nostradome.com/misc/nostragem.png)', // Set the background image
        backgroundSize: 'contain', // Ensure the image covers the entire div
        backgroundPosition: 'center', // Center the image
        color: 'blue', // Set text color to contrast with the background
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add shadow to text for better readability
        backgroundRepeat:'no-repeat'
      }}
    >
     
    </div>
  ),
  {
    width: 1200,
    height: 600,
  },
);
};

export default OgImageHandler;