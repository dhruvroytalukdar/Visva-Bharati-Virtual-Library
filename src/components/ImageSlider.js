import { useTransition, animated, config } from "react-spring";
import { useState, useEffect } from "react";
import "./compstyle.css";

const pictureList = [
  {
    id: 0,
    url: "images/vb.jpg"
  },
  {
    id: 1,
    url: "images/vb2.jpg"
  },
  {
    id: 2,
    url: "images/vb3.jpg"
  }
];

export default function ImageSilder() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setInterval(() => setIndex((index) => (index + 1) % 3), 5000);
    return clearInterval();
  }, []);

  const transitions = useTransition(pictureList[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.wobbly
  });

  return transitions.map(({ item, props, key }) => (
    <animated.div
      className="main-image"
      key={key}
      style={{
        ...props,
        backgroundImage: `url(${item.url})`
      }}
    />
  ));
}
