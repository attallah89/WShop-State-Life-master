import React from "react";

class Pub extends React.Component {
  render() {
    return (
      <div className="pub">
        <h2>Relaxing Music take some rest</h2>
        <h6>Juste activate the sound</h6>
        <iframe
          title="myvideo"
          style={{ borderRadius: "40px" }}
          width="800"
          height="250"
          src="https://www.youtube.com/embed/TGG_A7saKSA?autoplay=1&mute=1&loop=1"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}

export default Pub;
