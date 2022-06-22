import React, { useRef, useState, useEffect } from "react";
import ScrollController from "./ScrollListener.controller";
import { ScrollProps } from "./ScrollListener.types";
  

const ScrollListener: React.FC<ScrollProps> = ({
      onBottomHit,
      isLoading,
      loadOnMount,
      loadingComponent,
      loadSuccess,
      children,
    }) => {

  const [initialLoad, setInitialLoad] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // When component loads, fire the inital call for getting data if loadOnMount prop is true
  // Toggle initial load to ensure function is not called again
  useEffect(() => {
    if (loadOnMount && initialLoad) {
        onBottomHit();
        setInitialLoad(false);
      }
  }, [onBottomHit, loadOnMount, initialLoad]);


  useEffect(() => {

    // When document is scrolled, check if we are loading new data and in view of our component
    // If we are eligible to attempt requesting data, request it
    const onScroll = () => {
      if (!isLoading && ScrollController.isBottom(contentRef)) {
        onBottomHit();
      }
    };

    // Add an event listener to our document to trigger a callback funtion as scrolling occurs
    document.addEventListener('scroll', onScroll);

    // Clean up our event listener as needed
    return () => {document.removeEventListener('scroll', onScroll)};
  
  }, [onBottomHit, isLoading]);
  
  // Apply our content ref to the div, which will always be at the bottom of the document.
  // Render the loading component only when data is already present
  return <React.Fragment>
          {children}
        <div ref={contentRef} />
          {loadSuccess ? loadingComponent : <React.Fragment />}
      </React.Fragment>
};

export default (ScrollListener);