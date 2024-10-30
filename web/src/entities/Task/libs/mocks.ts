import { Task } from "../types/Task";

export const TASK_MOCK: Task = {
  title: "Задание 1",
  description:
    "Даны два числа A и B. Вам нужно вычислить их сумму A+B. В этой задаче для работы с входными и выходными данными вы можете использовать и файлы и потоки на ваше усмотрение.",
  attempts: 0,
  max_attempts: 10,
  examples: [],
  type_testing: 'STD',
  input_format: 'Первая строка входа содержит числа A и B ( -2*10^9 ≤ A, B≤ 2*10^9), разделенные пробелом',
  output_format: 'В единственной строке выхода выведите сумму чисел A+B',
  restrictons: {
    memoryLimitInKiB: 10,
    timeLimitInMs: 10000
  },
  languages: [
    {
      image: 'python 3.2',
      name: 'Python 3.2 + Numpy'
    },
    {
      image: 'Javascript',
      name: 'Javascript'
    }
  ]
};