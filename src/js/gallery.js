const photos = {
  incs: [
    {
      alt: "Incandescent Clear Bulbs",
      src: "https://res.cloudinary.com/stetsonr/image/upload/e_blur_faces:500/v1631637556/TTS%20Site%20Assets/tts%20gallery%20page/IMG_0225_ybsftt.jpg",
      hoverText: "All Incandescent Clear Bulbs",
    },
    {
      alt: "incandescent Holiday Lights - 3 red, 3 clear",
      src: "https://res.cloudinary.com/stetsonr/image/upload/v1631637555/TTS%20Site%20Assets/tts%20gallery%20page/IMG_0229_cht0lk.jpg",
      hoverText: "incandescent 3 red, 3 clear",
    },
    {
      alt: "Incandescent Holiday Lights - 1 red, 1 clear",
      src: "https://res.cloudinary.com/stetsonr/image/upload/v1631637453/TTS%20Site%20Assets/tts%20gallery%20page/IMG_0253_uupmvz.jpg",
      hoverText: "incandescent 1 red, 1 clear",
    },
    {
      alt: "Incandescent Holiday Lights - 1 green, 1 clear",
      src: "https://res.cloudinary.com/stetsonr/image/upload/v1631637444/TTS%20Site%20Assets/tts%20gallery%20page/IMG_0254_kdaqwu.jpg",
      hoverText: "incandescent 1 green, 1 clear",
    },
    {
      alt: "incandescent Holiday Lights - All red, clear at corners",
      src: "https://res.cloudinary.com/stetsonr/image/upload/v1631637433/TTS%20Site%20Assets/tts%20gallery%20page/inc-red_mlgo8q.jpg",
      hoverText: "incandescent all red with clear corners",
    },
    {
      alt: "incandescent Holiday Lights - All clear",
      src: "https://res.cloudinary.com/stetsonr/image/upload/v1631637433/TTS%20Site%20Assets/tts%20gallery%20page/inc-clear_ne93du.jpg",
      hoverText: "All clear incandescent",
    },
    {
      alt: "Incandesent Holiday lights - holly peaks",
      src: "https://res.cloudinary.com/stetsonr/image/upload/v1631637433/TTS%20Site%20Assets/tts%20gallery%20page/inc-holly-peak_fjtvu9.jpg",
      hoverText: "incandescent all clear with holly peaks",
    },
    {
      alt: "incandescent holiday lights - multi color",
      src: "https://res.cloudinary.com/stetsonr/image/upload/v1631637433/TTS%20Site%20Assets/tts%20gallery%20page/inc-multi_mcnfj3.jpg",
      hoverText: "incandescent multi color",
    },
    {
      alt: "Incandescent Holiday Lights - all clear with red corners",
      src: "https://res.cloudinary.com/stetsonr/image/upload/v1631637433/TTS%20Site%20Assets/tts%20gallery%20page/kern_hb1qxm.jpg",
      hoverText: "incandescent all clear with red corners",
    },
    {
      alt: "incandescent Holiday Lights - all clear with holly peaks",
      src: "https://res.cloudinary.com/stetsonr/image/upload/v1631637433/TTS%20Site%20Assets/tts%20gallery%20page/peaky-holly_t69mud.jpg",
      hoverText: "incandescent all clear with holly peaks",
    },
    {
      alt: "incandescent Holiday Lights - All clear with holly peaks",
      src: "https://res.cloudinary.com/stetsonr/image/upload/v1631637433/TTS%20Site%20Assets/tts%20gallery%20page/big-holly_dirlkk.jpg",
      hoverText: "All clear incandescent with holly peaks",
    },
  ],
  leds: [
    {
      alt: "LED Holiday Lighting - multi color",
      src: "https://res.cloudinary.com/stetsonr/image/upload/e_blur_faces:500/v1631637591/TTS%20Site%20Assets/tts%20gallery%20page/IMG_0235_gwbtuu.jpg",
      hoverText: "LED multi color",
    },
    {
      alt: "LED Holiday Lighting - warm white",
      src: "https://res.cloudinary.com/stetsonr/image/upload/v1631637556/TTS%20Site%20Assets/tts%20gallery%20page/IMG_0240_oh4uaw.jpg",
      hoverText: "LED warm white",
    },
    {
      alt: "LED Holiday Lighting - red, green",
      src: "https://res.cloudinary.com/stetsonr/image/upload/e_blur_faces:500/v1631637555/TTS%20Site%20Assets/tts%20gallery%20page/IMG_0244_llycov.jpg",
      hoverText: "LED red, green",
    },
    {
      alt: "LED Holiday Lighting - pure white, blue",
      src: "https://res.cloudinary.com/stetsonr/image/upload/v1631637454/TTS%20Site%20Assets/tts%20gallery%20page/IMG_0249_henhxt.jpg",
      hoverText: "LED pure white, blue",
    },
    {
      alt: "LED Holiday Lighting - red, pure white, green",
      src: "https://res.cloudinary.com/stetsonr/image/upload/v1631637433/TTS%20Site%20Assets/tts%20gallery%20page/led-red-grn-warm_oi7xl8.jpg",
      hoverText: "LED red, pure white, green",
    },
  ],
};

const galleryInc = document.getElementById("gallery-inc");
const galleryLED = document.getElementById("gallery-led");
const popup = document.getElementById("popup");
const selectedImage = document.getElementById("selectedImage");

photos.incs.forEach(photo => {
  const image = document.createElement('img')
  image.src = photo.src
  image.alt = photo.alt

  galleryInc.appendChild(image)
});

photos.leds.forEach(photo => {
  const image = document.createElement('img')
  image.src = photo.src
  image.alt = photo.alt

  galleryLED.appendChild(image)
});
