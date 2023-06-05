// Початкове значення стану Redux для кореневого редюсера,
// якщо не передати параметр preloadedState.
const initialState = {
  tasks: [
    { id: 0, text: 'Learn HTML and CSS', completed: true },
    { id: 1, text: 'Get good at JavaScript', completed: true },
    { id: 2, text: 'Master React', completed: false },
    { id: 3, text: 'Discover Redux', completed: false },
    { id: 4, text: 'Build amazing apps', completed: false },
  ],
  filters: {
    status: 'all',
  },
};
// Поки що використовуємо редюсер який
// тільки повертає отриманий стан
// Використовуємо initialState як значення стану за умовчанням
export const rootReducer = (state = initialState, action) => {
  // Редюсер розрізняє екшени за значенням властивості type
  switch (action.type) {
    // Залежно від типу екшену виконуватиметься різна логіка
    case 'tasks/addTask': {
      return {
        // в якому є всі дані існуючого стану
        ...state,
        // та новий масив задач
        tasks: [
          // в якому є всі існуючі завдання
          ...state.tasks,
          // та об'єкт нового завдання
          action.payload,
        ],
      };
    }

    default:
      // Кожен редюсер отримує всі екшени, відправлені в стор.
      // Якщо редюсер не повинен обробляти якийсь тип екшену,
      // необхідно повернути наявний стан без змін.
      return state;
  }
};
