export default {
  background: {
    color: {
      value: "#000000",
    },
  },
  fullScreen: {
    zIndex: 1,
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
  particles: {
    color: {
      value: "#000000",
      animation: {
        h: {
          enable: true,
          speed: 20,
        },
      },
    },
    links: {
      color: {
        value: "#ffffff",
      },
      enable: true,
      opacity: 0.4,
    },
    move: {
      enable: true,
      outModes: {
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      speed: 6,
    },
    number: {
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: {
        min: 0.1,
        max: 3,
      },
    },
  },
};
