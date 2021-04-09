import React from 'react';

import PetSounds from './web_fonts/PetSounds';
import MobyDick from './web_fonts/MobyDick';
import Western from './web_fonts/Western';
import Conrad from './web_fonts/Conrad';
import McPhee from './web_fonts/McPhee';

function WebFonts() {
  return (
    <div className="page-container fonts-container">
      <h1 className="landing-text">Web Fonts.</h1>
      <h3 className="landing-desc">
        Interesting typefaces in use in the real world, on the web
      </h3>
      <PetSounds />
      <McPhee />
      <Western />
      <MobyDick />
      <Conrad />
    </div>
  );
}

export default WebFonts;
