import React from 'react';
import { Image } from 'antd';

function RenderLandingPage(props) {
  return (
    <section style={welcomeContainer}>
      <div>
        <Image
          alt="Xcel Work Order"
          preview={false}
          src="https://img.wallpapersafari.com/desktop/1920/1080/62/79/bYdv3O.jpg"
          style={welcomePicture}
        />
      </div>
    </section>
  );
}

let welcomeContainer = {
  position: 'relative',
  top: '-300px',
};

let welcomePicture = {
  width: '100%',
  height: '50%',
};

export default RenderLandingPage;
