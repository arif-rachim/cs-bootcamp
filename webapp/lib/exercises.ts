export type ExerciseTest = {
  name: string;
  // Python statements (usually an `assert`). Indented automatically.
  body: string;
};

export type Exercise = {
  id: string;
  title: string;
  prompt: string;
  starter: string;
  tests: ExerciseTest[];
};

// Auto-graded exercises for the pure-Python weeks. Keyed by lesson slug.
export const EXERCISES: Record<string, Exercise[]> = {
  "week-01-python-basics": [
    {
      id: "c-to-f",
      title: "Konversi Celcius ke Fahrenheit",
      prompt:
        "Tulis fungsi `c_to_f(c)` yang mengubah suhu Celcius menjadi Fahrenheit. Rumus: F = C * 9/5 + 32.",
      starter: "def c_to_f(c):\n    # tulis kodemu di sini\n    pass\n",
      tests: [
        { name: "0°C = 32°F", body: "assert c_to_f(0) == 32" },
        { name: "100°C = 212°F", body: "assert c_to_f(100) == 212" },
        { name: "37°C = 98.6°F", body: "assert abs(c_to_f(37) - 98.6) < 1e-9" },
      ],
    },
  ],
  "week-02-control-flow": [
    {
      id: "fizzbuzz",
      title: "FizzBuzz",
      prompt:
        "Tulis fungsi `fizzbuzz(n)` yang mengembalikan \"Fizz\" jika n kelipatan 3, \"Buzz\" jika kelipatan 5, \"FizzBuzz\" jika kelipatan keduanya, atau str(n) jika tidak.",
      starter: "def fizzbuzz(n):\n    # tulis kodemu di sini\n    pass\n",
      tests: [
        { name: "3 -> Fizz", body: "assert fizzbuzz(3) == 'Fizz'" },
        { name: "5 -> Buzz", body: "assert fizzbuzz(5) == 'Buzz'" },
        { name: "15 -> FizzBuzz", body: "assert fizzbuzz(15) == 'FizzBuzz'" },
        { name: "7 -> '7'", body: "assert fizzbuzz(7) == '7'" },
      ],
    },
  ],
  "week-03-functions": [
    {
      id: "is-prime",
      title: "Cek Bilangan Prima",
      prompt:
        "Tulis fungsi `is_prime(n)` yang mengembalikan True jika n bilangan prima, selain itu False. (n < 2 bukan prima.)",
      starter: "def is_prime(n):\n    # tulis kodemu di sini\n    pass\n",
      tests: [
        { name: "2 prima", body: "assert is_prime(2) is True" },
        { name: "7 prima", body: "assert is_prime(7) is True" },
        { name: "1 bukan prima", body: "assert is_prime(1) is False" },
        { name: "9 bukan prima", body: "assert is_prime(9) is False" },
        { name: "97 prima", body: "assert is_prime(97) is True" },
      ],
    },
    {
      id: "factorial",
      title: "Faktorial",
      prompt: "Tulis fungsi `faktorial(n)` yang mengembalikan n! (0! = 1).",
      starter: "def faktorial(n):\n    # tulis kodemu di sini\n    pass\n",
      tests: [
        { name: "0! = 1", body: "assert faktorial(0) == 1" },
        { name: "5! = 120", body: "assert faktorial(5) == 120" },
        { name: "7! = 5040", body: "assert faktorial(7) == 5040" },
      ],
    },
  ],
  "week-04-algorithms": [
    {
      id: "binary-search",
      title: "Binary Search",
      prompt:
        "Tulis fungsi `binary_search(arr, target)` pada list terurut menaik yang mengembalikan indeks target, atau -1 jika tidak ada.",
      starter:
        "def binary_search(arr, target):\n    # tulis kodemu di sini\n    pass\n",
      tests: [
        { name: "temukan di tengah", body: "assert binary_search([1,3,5,7,9], 5) == 2" },
        { name: "temukan di awal", body: "assert binary_search([1,3,5,7,9], 1) == 0" },
        { name: "temukan di akhir", body: "assert binary_search([1,3,5,7,9], 9) == 4" },
        { name: "tidak ada -> -1", body: "assert binary_search([1,3,5,7,9], 4) == -1" },
        { name: "list kosong -> -1", body: "assert binary_search([], 1) == -1" },
      ],
    },
  ],
  "week-06-data-structures": [
    {
      id: "word-count",
      title: "Hitung Frekuensi Kata",
      prompt:
        "Tulis fungsi `word_count(text)` yang mengembalikan dict {kata: jumlah}. Pisah berdasarkan spasi, anggap huruf kecil-besar berbeda apa adanya.",
      starter: "def word_count(text):\n    # tulis kodemu di sini\n    pass\n",
      tests: [
        {
          name: "hitung sederhana",
          body: "assert word_count('a b a') == {'a': 2, 'b': 1}",
        },
        { name: "string kosong", body: "assert word_count('') == {}" },
        {
          name: "satu kata berulang",
          body: "assert word_count('hi hi hi') == {'hi': 3}",
        },
      ],
    },
  ],
  "week-07-strings": [
    {
      id: "is-palindrome",
      title: "Palindrom",
      prompt:
        "Tulis fungsi `is_palindrome(s)` yang mengembalikan True jika s palindrom, mengabaikan spasi dan kapitalisasi.",
      starter: "def is_palindrome(s):\n    # tulis kodemu di sini\n    pass\n",
      tests: [
        { name: "'kasur rusak'", body: "assert is_palindrome('kasur rusak') is True" },
        { name: "'Katak'", body: "assert is_palindrome('Katak') is True" },
        { name: "'halo'", body: "assert is_palindrome('halo') is False" },
        { name: "string kosong palindrom", body: "assert is_palindrome('') is True" },
      ],
    },
  ],
};

export function getExercises(slug: string): Exercise[] {
  return EXERCISES[slug] ?? [];
}
