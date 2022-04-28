import React from 'react';
import ListProducts from '../components/ListProducts';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import fetch from 'jest-fetch-mock';


jest.spyOn(window, "alert").mockImplementation(() => {});

beforeEach(()=>{
    fetch.resetMocks();
})

test("ListProducts is mounted", async () => {

    process.env.REACT_APP_PRODUCTS_URL = "http://localhost:9000/product";
    fetch.mockResponseOnce(JSON.stringify([{id: 1, name:"p1", price: 100, description: "d1"}, 
                            {id: 2, name:"p2", price: 200, description: "d2"}]))

    render(<Provider store={store}> <ListProducts/> </Provider>);
    expect(screen.getByText("List Products")).toBeTruthy();
    //data-testid="prd"
    //expect(screen.getAllByTestId("prd")).toHaveLength(2);
    const productsNode = await waitFor(() => screen.getAllByTestId("prd"));
    expect(productsNode.length).toBe(2);
    screen.debug();



    
})

test("ListProducts should delete the product", async () => {

    process.env.REACT_APP_PRODUCTS_URL = "http://localhost:9000/product";
    fetch.mockResponseOnce(JSON.stringify([{id: 1, name:"p1", price: 100, description: "d1"}, 
                            {id: 2, name:"p2", price: 200, description: "d2"}]))

    render(<Provider store={store}> <ListProducts/> </Provider>);
    const productsNode = await waitFor(() => screen.getAllByTestId("prd"));
    expect(productsNode.length).toBe(2);

    //fetch.resetMocks();
    fetch.mockResponseOnce(JSON.stringify([]), {status: 200});

    const allDeleteBtns = screen.getAllByText("Delete");
    fireEvent.click(allDeleteBtns[0]);
    const updatedProductsNode = await waitFor(() => screen.getAllByTestId("prd"));
    expect(updatedProductsNode.length).toBe(1);
    screen.debug();




    

    
})