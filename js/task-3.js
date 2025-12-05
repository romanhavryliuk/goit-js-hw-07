const userName = document.querySelector('#name-input');
const spanLine = document.querySelector('#name-output')
userName.addEventListener('input', handleInput);

function handleInput(event) {
    const elem = event.target;
    const cleanedValue = elem.value.trim();
    if (cleanedValue === '') {
        spanLine.textContent = 'Anonymous'
    } else {
        spanLine.textContent = cleanedValue;
    };
};