export function setupCounter(element: HTMLButtonElement) {
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
