export const handlerIncrement = (timer, setCount, count) => {
  timer.current = setTimeout(function incrementTick() {
    if (count < 999) {
      setCount(++count);
    } else {
      clearTimeout(timer.current);
      return;
    }
    timer.current = setTimeout(incrementTick, 150);
  }, 150);
};
export const handlerDecrement = (timer, setCount, count, minValue) => {
  timer.current = setTimeout(function decremetTick() {
    if (count > 1) {
      setCount(--count);
      timer.current = setTimeout(decremetTick, 150);
    }
  }, 150);
};
export const handlerUp = (timer) => {
  clearTimeout(timer.current);
};


