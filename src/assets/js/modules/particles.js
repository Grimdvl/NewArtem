const particles = () => {
    const mainColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--main-color')
        .trim();

        particlesJS("particles-js", {
        "particles": {
            "number": {
            "value": 15,
            "density": {
                "enable": true,
                "value_area": 800
            }
            },
            "color": {
                    "value": mainColor
                },
            "shape": {
            "type": "circle",
            },
            "opacity": {
            "value": 0.6,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
            },
            "size": {
            "value": 50,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 4,
                "size_min": 0.1,
                "sync": false
            }
            },
            "line_linked": {
                "enable": false,
            },
            "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "none",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
            }
        },
        "retina_detect": true
        });
}

export default particles;