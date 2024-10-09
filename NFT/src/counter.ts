export function setupCounter(element: HTMLButtonElement | null) {

    if (!element) {
        return;
    }

    let counter = 0;

    const setCounter = (count: number) => {
        counter = count;
        element.innerHTML = `Count is ${counter}`;
    };

    element.addEventListener('click', (event: MouseEvent) => {
        event.preventDefault();
        setCounter(counter + 1);
    });

    setCounter(0);
}
