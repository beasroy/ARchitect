import React from 'react';

function UnityGame() {
    return (
        <div className='p-8 bg-form bg-cover bg-center'>
            <iframe className='shadow-lg shadow-gray-700 rounded-lg mx-auto min-w-fit'
                title="Unity WebGL Game"
                src="http://127.0.0.1:5501/client/Unity%20webbuild/index.html"
                width="930" // Adjust these dimensions as needed
                height="550"
                frameBorder="0"
                scrolling="no"
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
                allow="camera; microphone"
            ></iframe>
        </div>
    );
}

export default UnityGame;
