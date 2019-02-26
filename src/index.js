import React, { useEffect } from 'react';
import { TimelineMax, Expo } from 'gsap';
import ScrollMagic from 'scrollmagic';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageContainer = styled.figure`
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #E7E7E7;
  transform-origin: top;
  transform: scaleY(0);
`;

const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
  opacity: 0;
`;

const RevealImage = ({
  src,
  as,
  delay,
  className,
  ...props
}) => {
  const container = React.useRef(null);
  const image = React.useRef(null);

  if (typeof window !== 'undefined') {
    const imageTimeline = new TimelineMax({
      delay: 0.5,
      paused: true,
    });
  
    const controller = new ScrollMagic.Controller();
  
    const onEnter = () => {
      imageTimeline.play();
    };
  
    useEffect(() => {
      new ScrollMagic.Scene({
        triggerHook: 'onEnter',
        triggerElement: container.current,
        offset: 100,
        duration: '100%',
      })
        .on('enter', onEnter)
        .addTo(controller);
  
      imageTimeline
        .to(container.current, 1, {
          delay,
          scaleY: 1,
          ease: Expo.easeOut,
        })
        .to(image.current, 0.5, {
          opacity: 1,
        });
    }, []);
  }

  return (
    <ImageContainer
      ref={container}
      className={`reveal-image__container ${className}`}
      as={as}
      {...props}
    >
      <Image
        ref={image}
        src={src}
        alt=""
        className="reveal-image__image"
      />
    </ImageContainer>
  );
};

RevealImage.defaultProps = {
  delay: 0,
  as: 'figure',
  className: '',
};

RevealImage.propTypes = {
  src: PropTypes.string.isRequired,
  as: PropTypes.string,
  className: PropTypes.string,
  delay: PropTypes.number,
};

export default RevealImage;
