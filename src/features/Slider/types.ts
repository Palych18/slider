type SlideDetails = {
  id: number,
  description: string,
  url: string,
};

export type SliderProps = {
  slides: [] | SlideDetails[],
};
