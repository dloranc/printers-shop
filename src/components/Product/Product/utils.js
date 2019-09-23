export const inStock = inStock => {
  if (inStock > 100) {
    return 'full supply';
  }

  if (inStock > 10) {
    return 'medium supply';
  }

  if (inStock > 0) {
    return 'last pieces';
  }

  return 'not available';
}
