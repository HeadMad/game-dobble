
/**
 * Проверяет, является ли число простым.
 * @param {number} number - Число для проверки.
 * @returns {boolean} - True, если число простое, false в противном случае.
 */
export default function isPrime(number) {
   // Числа меньше или равные 1 не являются простыми
   if (number <= 1) {
     return false;
   }

   // Числа 2 и 3 являются простыми
   if (number <= 3) {
     return true;
   }

   // Числа, делящиеся на 2 или 3, не являются простыми
   if (number % 2 === 0 || number % 3 === 0) {
     return false;
   }

   // Проверка делимости на числа вида 6k ± 1
   for (let i = 5; i * i <= number; i += 6) {
     if (number % i === 0 || number % (i + 2) === 0) {
       return false;
     }
   }

   // Все остальные числа являются простыми
   return true;
 }