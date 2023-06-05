// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './taskSlice';
import { filtersReducer } from './filterSlice';
// import { filtersReducer, tasksReducer } from './reducer';

// // Створюємо розширення стора, щоб додати інструменти розробника
// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
