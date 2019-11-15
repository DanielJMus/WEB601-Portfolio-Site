import { combineReducers } from 'redux';

const booksReducer = () => {
    return [
        {title: 'Book1', notes:'Notes1'},
        {title: 'Book2', notes:'Notes2'},
        {title: 'Book3', notes:'Notes3'}
    ]
}

const selectBookReducer = (selectedBook = null, action) => {
    if(action.type === 'BOOK-SELECTED') {
        return action.payload
    }
    return selectedBook
}

export default combineReducers ({
    books: booksReducer,
    selectedBook: selectBookReducer
})