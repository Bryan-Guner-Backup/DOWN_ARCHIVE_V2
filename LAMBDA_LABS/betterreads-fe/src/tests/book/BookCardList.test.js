import React from 'react';
import { fireEvent, findByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookCardList from '../../components/Book/BookCardList';
// Testing Util
import { renderWithRedux } from '../utils/renderWithRedux';
import { testBook } from '../utils/testingConstants';

test('BookCardList Renders', () => {
  renderWithRedux(<BookCardList books={[]} />);
});

test('BookCardListContainer ShelfName Div Renders', () => {
  const { getByTestId } = renderWithRedux(
    <BookCardList label='Test' books={[]} />
  );
  const shelfNameDiv = getByTestId('shelf-name-div');
  expect(shelfNameDiv).toBeInTheDocument();
});

test('BookCardListContainer ShelfName Div Renders', () => {
  const { getByTestId } = renderWithRedux(
    <BookCardList label='My books' books={[]} />
  );
  const shelfNameDiv = getByTestId('my-book-shelf-name');
  expect(shelfNameDiv).toBeInTheDocument();
});

test('BookCardList Div Renders', () => {
  const { getByTestId } = renderWithRedux(
    <BookCardList label='My books' books={[testBook, testBook]} />
  );
  const shelfNameDiv = getByTestId('book-card-list');
  expect(shelfNameDiv).toBeInTheDocument();
});

test('BookCardList Renders Book', () => {
  const { getByTestId } = renderWithRedux(
    <BookCardList books={[testBook, testBook]} />
  );
  const shelfNameDiv = getByTestId('book-card-list');
  expect(shelfNameDiv).toBeInTheDocument();
});

test('BookCardList Renders SearchPagination', () => {
  const { getByTestId } = renderWithRedux(
    <BookCardList source='search' books={[]} />
  );
  const search = getByTestId('search-pagination');
  expect(search).toBeInTheDocument();
});

test('BookCardListContainer Edit Form Does Not Render', () => {
  const { getByTestId } = renderWithRedux(
    <BookCardList label='Test' books={[]} />
  );
  const editH2 = getByTestId('edit-h2');
  expect(editH2).toBeInTheDocument();
});

test('BookCardListContainer Edit Form Renders When Clicking H2', () => {
  const { getByTestId } = renderWithRedux(
    <BookCardList label='Test' books={[]} />
  );
  const editH2 = getByTestId('edit-h2');
  expect(editH2).toBeInTheDocument();
  fireEvent.click(editH2);
  const editForm = getByTestId('edit-form');
  expect(editForm).toBeInTheDocument();
  const input = getByTestId('edit-input');
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: 'ShelfName' } });
  expect(input.value).toBe('ShelfName');
  fireEvent.submit(editForm);
});

test('BookCardListContainer Edit Form Renders When Clicking FontAwesome Icon', () => {
  const { getByTestId } = renderWithRedux(
    <BookCardList label='Test' books={[]} />
  );
  const editIcon = getByTestId('edit-icon');
  expect(editIcon).toBeInTheDocument();
  fireEvent.click(editIcon);
  const editForm = getByTestId('edit-form');
  expect(editForm).toBeInTheDocument();
});

test('Dropdown Menu Appears on Click', () => {
  const { getByTestId } = renderWithRedux(
    <BookCardList label='Test' books={[]} />
  );
  const dropDownIcon = getByTestId('drop-down-link');
  expect(dropDownIcon).toBeInTheDocument();
  fireEvent.click(dropDownIcon);
  const dropDownMenu = getByTestId('drop-down-menu');
  expect(dropDownMenu).toBeInTheDocument();
});
