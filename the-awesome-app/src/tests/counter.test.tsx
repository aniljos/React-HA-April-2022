import React from 'react';
import Counter from '../components/TypedCounter';
import {render, screen, fireEvent} from '@testing-library/react';


test("counter is mounted", () => {

    render(<Counter initCount={10}/>);
    //screen.debug();
    expect(screen.getByText("Count: 10")).toBeTruthy();
})

test("counter is updated on click of inc", () => {

    render(<Counter initCount={10}/>);
    //screen.debug();
    fireEvent.click(screen.getByText("Inc"));
    expect(screen.getByText("Count: 11")).toBeTruthy();
})

test("counter is updated on chnage of input", () => {

    render(<Counter initCount={10}/>);
    //screen.debug();
    fireEvent.change(screen.getByPlaceholderText("Enter the Count"), {target: {value: 50}} );
    expect(screen.getByText("Count: 50")).toBeTruthy();
})