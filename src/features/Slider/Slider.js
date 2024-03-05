import classes from './Slider.module.scss';
import { useRef, useState, useEffect } from 'react';
import { IconArrowLeft, IconArrowRight } from 'shared';

/**
 * @typedef {import('./types').SliderProps} SliderProps
 */

/**
 * @function Slider
 * @param {SliderProps} props
 * @returns {null | JSX.Element}
 */

export const Slider = (props) => {
  const slidesCount = 4;
  const slideWidth = 400;
  const sliderRef = useRef(null);
  const slidesRef = useRef(null);

  /** @type {['forward' | 'backward' | string, Function]} */
  const [direction, setDirection] = useState('forward');
  const [backwardStep, setBackwardStep] = useState(slidesCount);
  const [forwardStep, setForwardStep] = useState(1);

  useEffect(() => {
    const /** @type {*} */ slider = sliderRef.current;

    const leftCloneSlide = document.createElement('div');
    leftCloneSlide.id = 'clone-l';
    leftCloneSlide.innerHTML = '4';
    leftCloneSlide.className = classes.clone;
    leftCloneSlide.style.left = `-${slideWidth}px`;
    leftCloneSlide.style.zIndex = '-1';

    const rightCloneSlide = document.createElement('div');
    rightCloneSlide.id = 'clone-r';
    rightCloneSlide.innerHTML = '1';
    rightCloneSlide.className = classes.clone;
    rightCloneSlide.style.left = `${slideWidth}px`;
    rightCloneSlide.style.zIndex = '-1';

    slider.append(leftCloneSlide, rightCloneSlide);
  }, []);

  useEffect(() => {
    const isBackward = direction === 'backward';
    if (!isBackward) return;
    const /** @type {*} */ slider = sliderRef.current;
    const /** @type {*} */ slides = slidesRef.current;
    if (!slider || !slides) return;

    if (backwardStep === (slidesCount + 1)) {
      /** @type {HTMLDivElement | null} */
      const cloneSlide = document.querySelector('#clone-l');
      if (!cloneSlide) return;
      cloneSlide.style.zIndex = '1';
      cloneSlide.style.left = '0';
      slides.style.left = `${slideWidth}px`;
      setTimeout(() => {
        slides.style.left = `-${(slidesCount - 1) * slideWidth}px`;
      }, 100);
      setTimeout(() => {
        setBackwardStep(1);
        setForwardStep(slidesCount);
        cloneSlide.style.zIndex = '-1';
      }, 300);
      setTimeout(() => {
        cloneSlide.style.left = `-${slideWidth}px`;
      }, 600);
    }

    if (backwardStep > 0) {
      slides.style.left = `-${(slidesCount - backwardStep) * slideWidth}px`;
    }
  }, [direction, backwardStep]);

  useEffect(() => {
    const isForward = direction === 'forward';
    if (!isForward) return;
    const /** @type {*} */ slider = sliderRef.current;
    const /** @type {*} */ slides = slidesRef.current;
    if (!slider || !slides) return;

    if (forwardStep === (slidesCount + 1)) {
      /** @type {HTMLDivElement | null} */
      const cloneSlide = document.querySelector('#clone-r');
      if (!cloneSlide) return;
      cloneSlide.style.zIndex = '1';
      cloneSlide.style.left = '0';
      slides.style.left = `-${(forwardStep - 1) * slideWidth}px`;
      setTimeout(() => {
        slides.style.left = '0';
      }, 100);
      setTimeout(() => {
        setForwardStep(1);
        cloneSlide.style.zIndex = '-1';
      }, 300);
      setTimeout(() => {
        cloneSlide.style.left = `${slideWidth}px`;
      }, 600);
      return;
    }
    if (forwardStep > 0) {
      slides.style.left = `-${(forwardStep - 1) * slideWidth}px`;
    }
  }, [direction, forwardStep]);

  const handlePrevClick = () => {
    setDirection('backward');
    setBackwardStep(backwardStep + 1);
    if (backwardStep === slidesCount) {
      setForwardStep(slidesCount);
    };
    setForwardStep(forwardStep - 1);
  };

  const handleNextClick = () => {
    setDirection('forward');
    setBackwardStep(backwardStep - 1);
    if (forwardStep === slidesCount) {
      setBackwardStep(slidesCount);
    };
    setForwardStep(forwardStep + 1);
  };

  return (
    <div className={classes.slider}
      ref={sliderRef}
    >
      {/* buttons */}
      <div className={classes.buttons}>
        {/* prev */}
        <button className={classes.button}
          onClick={handlePrevClick}
        >
          <IconArrowLeft />
        </button>
        {/* next */}
        <button className={classes.button}
          onClick={handleNextClick}
        >
          <IconArrowRight />
        </button>
      </div>
      {/* slides */}
      <div className={classes.slides}
        ref={slidesRef}
        style={{ width: `${slideWidth * slidesCount}px` }}
      >
        <div className={classes.slide}>1</div>
        <div className={classes.slide}>2</div>
        <div className={classes.slide}>3</div>
        <div className={classes.slide}>4</div>
      </div>
    </div>
  );
};
