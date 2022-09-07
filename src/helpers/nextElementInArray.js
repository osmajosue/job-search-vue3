export const findNextItem = (array, currentItem) => {
  const currentItemIndex = array.indexOf(currentItem);
  const nextItemIndex = (currentItemIndex + 1) % array.length;
  const nextItem = array[nextItemIndex];

  return nextItem;
};
