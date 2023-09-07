/**
 * Генерирует все возможные комбинации пар из массива.
 * @param {Array} arr - Исходный массив.
 * @param {number} k - Размер комбинации.
 * @returns {Array} - Массив пар.
 */
 export default function combinations(arr, k) {
  let result = [];
  function backtrack(start, currentCombo) {
    if (currentCombo.length === k) {
      result.push([...currentCombo]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      currentCombo.push(arr[i]);
      backtrack(i + 1, currentCombo);
      currentCombo.pop();
    }
  }
  backtrack(0, []);
  return result;
}
