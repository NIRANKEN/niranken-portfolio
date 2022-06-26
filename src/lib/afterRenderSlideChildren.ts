export const afterRenderSlideChildren = (done: () => void): void => {
  setTimeout(done, 300);
};