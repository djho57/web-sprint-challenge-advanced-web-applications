import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { screen, render, waitFor} from '@testing-library/react';

const testArticle = {
    author: 'testauthor',
    body: 'testbody',
    createdOn: 'testcreatedon',
    headline: 'testheadline',
    id: 'testid',
    image: 'testimage',
    summary: 'testsummary'
}

const testArticle2 = {
    author: '',
    body: 'testbody',
    createdOn: 'testcreatedon',
    headline: 'testheadline',
    id: 'testid',
    image: 'testimage',
    summary: 'testsummary'
}



test('renders component without errors', ()=> {
    render(<Article article={testArticle}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle}/>)
    const author = screen.queryByTestId('author')
    const headline = screen.queryByTestId('headline')
    expect(author).toBeInTheDocument();
    expect(headline).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={testArticle2}/>)
    const author = screen.queryByText(/Associated Press/i)
    expect(author).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const deleteMock = jest.fn()
    render(<Article article={testArticle} handleDelete={deleteMock}/>)
    const button = screen.getByTestId("deleteButton");
    userEvent.click(button);
    expect(deleteMock).toBeCalledTimes(1);
});

//Task List:
//1. Complete all above tests. Create test article data when needed.