import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';

const testArticles = [{
    author: 'testauthor',
    body: 'testbody1',
    createdOn: 'testcreatedon1',
    headline: 'testheadline1',
    id: 'testid1',
    image: 'testimage1',
    summary: 'testsummary1'
},
{
    author: 'testauthor',
    body: 'testbody2',
    createdOn: 'testcreatedon2',
    headline: 'testheadline22',
    id: 'testid2',
    image: 'testimage2',
    summary: 'testsummary2'
},
{
    author: 'testauthor',
    body: 'testbody3',
    createdOn: 'testcreatedon3',
    headline: 'testheadline3',
    id: 'testid3',
    image: 'testimage3',
    summary: 'testsummary3'
},
]



test("renders zero articles without errors", async () => {
    render(<View article={testArticles}/>)
});

test("renders three articles without errors", async ()=> {
    render(<View article={testArticles}/>)
    const artic = screen.queryAllByTestId("testarticles");
    // expect(artic).toHaveLength(3);
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.