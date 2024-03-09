const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const selectedValue = document.getElementById('selectedValue'); 

const value = [
{ value: "1", text: "1. Ожидает оценки", className: "option1" },
{ value: "2", text: "2. Оценена, ожидает подтверждения оценки", className: "option2" },
{ value: "3", text: "3. Оценка отклонена", className: "option3" },
{ value: "4", text: "4. Оценка подтверждена, ожидает принятия в разработку", className: "option4" },
{ value: "5", text: "5. В очереди к исполнению", className: "option5" },
{ value: "6", text: "6. Пауза", className: "option6" },
{ value: "7", text: "7. В работе", className: "option7" },
{ value: "8", text: "8. Тестирование менеджером", className: "option8" },
{ value: "9", text: "9. На проверку на тесте", className: "option9" }
];

// обработчик события для того чтобы при нажатии на строку выводился список
searchInput.addEventListener('click', () => { 
    showAllValue();
});

// обработчик ввода текста
searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();
    
    // если строка пуста, вызываем функцию showAllValue() которая выводит все варинаты
    if (searchValue === '') {
        showAllValue();
    } 
    // фильтрация
    else {
        searchResults.innerHTML = '';
        const filter = value.filter(value => value.text.toLowerCase().includes(searchValue));

        filter.forEach((value) => {
            createResultElement(value);
        });
    }
});

function showAllValue() {
    searchResults.innerHTML = '';

    value.forEach((value) => {
        createResultElement(value);
    });
}

function createResultElement(value) {
    const result = document.createElement('div');
    result.textContent = value.text;
    result.className = value.className;
    result.addEventListener('click', () => {
        searchInput.value = '';
        searchResults.innerHTML = '';
        selectedValue.textContent = value.text;
    });
    searchResults.appendChild(result);
}