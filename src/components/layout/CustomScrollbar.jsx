import { useCallback, useEffect, useRef, useState } from "react";

const MIN_THUMB_HEIGHT = 80;

export default function CustomScrollbar() {
  const trackRef = useRef(null);
  const dragRef = useRef(null);
  const metricsRef = useRef(null);
  const [metrics, setMetrics] = useState({
    visible: false,
    maxScroll: 0,
    thumbHeight: MIN_THUMB_HEIGHT,
    thumbTop: 0,
    value: 0,
  });

  const updateMetrics = useCallback(() => {
    const trackHeight = trackRef.current?.clientHeight ?? window.innerHeight;
    const viewportHeight = window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const maxScroll = Math.max(pageHeight - viewportHeight, 0);
    const thumbHeight = Math.min(
      trackHeight,
      Math.max(MIN_THUMB_HEIGHT, trackHeight * (viewportHeight / pageHeight)),
    );
    const thumbTravel = Math.max(trackHeight - thumbHeight, 0);
    const value = Math.min(window.scrollY, maxScroll);
    const thumbTop = maxScroll > 0 ? (value / maxScroll) * thumbTravel : 0;
    const nextMetrics = {
      visible: maxScroll > 0,
      maxScroll,
      thumbHeight,
      thumbTop,
      value,
    };

    metricsRef.current = nextMetrics;
    setMetrics(nextMetrics);
  }, []);

  useEffect(() => {
    updateMetrics();
    window.addEventListener("scroll", updateMetrics, { passive: true });
    window.addEventListener("resize", updateMetrics);

    const resizeObserver = new ResizeObserver(updateMetrics);
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener("scroll", updateMetrics);
      window.removeEventListener("resize", updateMetrics);
      resizeObserver.disconnect();
    };
  }, [updateMetrics]);

  const scrollTo = (top, behavior = "auto") => {
    window.scrollTo({
      top: Math.max(0, Math.min(top, metricsRef.current?.maxScroll ?? 0)),
      behavior,
    });
  };

  const handleTrackPointerDown = (event) => {
    if (event.target !== event.currentTarget || !metrics.visible) return;

    const trackRect = event.currentTarget.getBoundingClientRect();
    const thumbTravel = trackRect.height - metrics.thumbHeight;
    const targetTop = event.clientY - trackRect.top - metrics.thumbHeight / 2;
    const scrollRatio = Math.max(0, Math.min(targetTop / thumbTravel, 1));
    scrollTo(scrollRatio * metrics.maxScroll, "smooth");
  };

  const handleThumbPointerDown = (event) => {
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      startY: event.clientY,
      startScroll: window.scrollY,
      previousScrollBehavior: document.documentElement.style.scrollBehavior,
    };
    document.documentElement.style.scrollBehavior = "auto";
  };

  const handleThumbPointerMove = (event) => {
    if (!dragRef.current) return;

    const currentMetrics = metricsRef.current;
    const thumbTravel = trackRef.current.clientHeight - currentMetrics.thumbHeight;
    const scrollPerPixel = currentMetrics.maxScroll / thumbTravel;
    scrollTo(
      dragRef.current.startScroll +
        (event.clientY - dragRef.current.startY) * scrollPerPixel,
    );
  };

  const handleThumbPointerUp = (event) => {
    if (!dragRef.current) return;

    document.documentElement.style.scrollBehavior =
      dragRef.current.previousScrollBehavior;
    dragRef.current = null;
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const handleKeyDown = (event) => {
    const keyboardActions = {
      ArrowDown: () => scrollTo(window.scrollY + 60),
      ArrowUp: () => scrollTo(window.scrollY - 60),
      PageDown: () => scrollTo(window.scrollY + window.innerHeight * 0.85),
      PageUp: () => scrollTo(window.scrollY - window.innerHeight * 0.85),
      Home: () => scrollTo(0),
      End: () => scrollTo(metrics.maxScroll),
    };

    if (!keyboardActions[event.key]) return;
    event.preventDefault();
    keyboardActions[event.key]();
  };

  return (
    <div
      ref={trackRef}
      className={`custom-scrollbar${metrics.visible ? "" : " custom-scrollbar--hidden"}`}
      role="scrollbar"
      aria-label="Page scrollbar"
      aria-orientation="vertical"
      aria-valuemin={0}
      aria-valuemax={Math.round(metrics.maxScroll)}
      aria-valuenow={Math.round(metrics.value)}
      tabIndex={metrics.visible ? 0 : -1}
      onKeyDown={handleKeyDown}
      onPointerDown={handleTrackPointerDown}
    >
      <button
        type="button"
        className="custom-scrollbar__thumb"
        aria-label="Drag to scroll the page"
        style={{
          height: `${metrics.thumbHeight}px`,
          transform: `translateY(${metrics.thumbTop}px)`,
        }}
        onPointerDown={handleThumbPointerDown}
        onPointerMove={handleThumbPointerMove}
        onPointerUp={handleThumbPointerUp}
        onPointerCancel={handleThumbPointerUp}
      />
    </div>
  );
}
