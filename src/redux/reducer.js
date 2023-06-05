// // Початкове значення стану Redux для кореневого редюсера,

import { combineReducers } from 'redux';
import { statusFilters } from './constants';

// якщо не передати параметр preloadedState.
const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

// Поки що використовуємо редюсер який
// тільки повертає отриманий стан
// Використовуємо initialState як значення стану за умовчанням
const tasksReducer = (state = tasksInitialState, action) => {
  // Редюсер розрізняє екшени за значенням властивості type
  switch (action.type) {
    // Залежно від типу екшену виконуватиметься різна логіка
    case 'tasks/addTask':
      return [...state, action.payload];

    case 'tasks/deleteTask':
      return state.filter(task => task.id !== action.payload);

    case 'tasks/toggleCompleted':
      return state.map(task => {
        if (task.id !== action.payload) {
          return task;
        }
        return {
          ...task,
          completed: !task.completed,
        };
      });

    default:
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};

// export const rootReducer = (state = {}, action) => {
//   return {
//     tasks: tasksReducer(state.tasks, action),
//     filters: filtersReducer(state.filters, action),
//   };
// };

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
