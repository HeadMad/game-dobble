export default function (arrays) {
  const length = arrays.length;
  if (length < 2)
    return false; // Нет пересечений при одном или менее массивах

  const result = [];

  for (let i = 0; i < length - 1; i++) {
    const current = arrays[i];
    const currentResult = [current];
    for (let j = i + 1; j < length; j++) {
      const other = arrays[j];
      const intersectionCount = current.reduce((sum, e) => sum += other.includes(e), 0);

      if (intersectionCount !== 1)
        currentResult.push(other);

    }
    if (currentResult.length > 1)
      result.push(currentResult);
  }

  this.getResult = () => result;

  this.isNormal = () => !result.length ;
}