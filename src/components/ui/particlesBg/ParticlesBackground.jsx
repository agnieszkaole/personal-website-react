import React, { useEffect, useRef } from "react";
import particlesJS from "particles.js";
import particlesConfig from "../../../particles-config.json"; // Import your configuration file

const ParticlesBackground = () => {
  const particlesContainerRef = useRef(null);

  useEffect(() => {
    // Ensure particlesJS is available globally
    if (window.particlesJS) {
      window.particlesJS("particles-js", particlesConfig);
    } else {
      console.error("particlesJS is not available");
    }

    // Cleanup function to destroy the particles instance when the component is unmounted
    return () => {
      if (window.pJSDom && window.pJSDom.length) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
      }
    };
  }, []);

  return (
    <div
      id="particles-js"
      ref={particlesContainerRef}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: "-1",
      }}
    ></div>
  );
};

export default ParticlesBackground;
