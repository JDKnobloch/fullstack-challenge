// Check if we are at the bottom of our ref/div
function isBottom(ref: React.RefObject<HTMLDivElement>) {
    if (!ref.current) {
      return false;
    }
    return ref.current.getBoundingClientRect().bottom <= window.innerHeight;
  }
  const ScrollController = {
    isBottom:isBottom
}

export default ScrollController;