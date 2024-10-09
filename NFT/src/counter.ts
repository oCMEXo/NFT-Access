export function setupCounter(element: HTMLButtonElement | null) {
  // Проверяем, что элемент не равен null
  if (!element) {
    // console.error('Element is null. Please provide a valid HTMLButtonElement.');
    return; // Прекращаем выполнение функции, если элемент не найден
  }

  let counter = 0;

  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `Count is ${counter}`;
  };

  // Добавляем обработчик события 'click' на кнопку
  element.addEventListener('click', (event: MouseEvent) => {
    event.preventDefault(); // Предотвращаем стандартное поведение кнопки (если это кнопка в форме)
    setCounter(counter + 1); // Увеличиваем счетчик
  });

  // Инициализация счётчика
  setCounter(0);
}
