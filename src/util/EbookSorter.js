const sort = (array, sortBy, direction) => {
  const ebooks =  array.sort((first, second) => {
    if(first[sortBy.field] > second[sortBy.field]) {
      return 1;
    }
    if(first[sortBy.field] < second[sortBy.field]) {
      return -1;
    }
    return 0;
  });

  // Note: direction takes precedence over sortBy.defaultDirection
  if ( (direction && direction === 'DESC') || (!direction && sortBy.defaultDirection === 'DESC')) {
    return ebooks.reverse();
  }
  return ebooks;
};

export const sortEbooks = (array, sortBy, direction = null) => {
  return sort(array, sortBy, direction);
};
