import React, {ChangeEvent, useState, useEffect, useRef} from 'react';
import { withBorder } from './withBorderHOC';

// const array = useState("");
// //array had 2 elements => 1st element is a variable, 2nd element is a function(chnage the variale)
// const searchKey = array[0];
// const setSearchKey = array[1];

function Search(){

    const [searchKey, setSearchKey] = useState("");
    const [results, setResults] = useState([]);
    const count = useRef(0);
    const searchInputRef = useRef<HTMLInputElement>(null)

    //useEffect(callback, dependencies])

    //useEffect with no dependencies
    useEffect(() => {
        console.log("equivalent to componentDidMount..")
        searchInputRef.current?.focus();
        //callback returend by the useEffect with no dependencies
        return () => {
            console.log("equivalent to componentWillUnmount..")
        }
    }, []);

     //useEffect with dependencies
    // useEffect(() => {
    //   //  console.log("componentDidUpdate searckKey changed", searchKey);
    // }, [searchKey])
    // useEffect(() => {
    //    // console.log("componentDidUpdate results changed", results)
    // }, [results])
    // useEffect(() => {
    //     console.log("componentDidUpdate searckKey changed", searchKey);
    //     console.log("componentDidUpdate results changed", results)
    // }, [searchKey, results])

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        setSearchKey(e.target.value);
    }

    async function search(){

        count.current++;
        console.log("count: ", count.current);
        try {
            const url 
            = `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${searchKey}&limit=20`;

            const response = await fetch(url, {method: "GET"});
            const data = await response.json();
            console.log(data[1]);
            setResults(data[1]);


        } catch (error) {
            console.log("error", error);
        }
    }


    return (
        <div>
            <h3>Search</h3>
            <div>
                <input ref={searchInputRef} type="search" placeholder='Search for something' 
                                            value={searchKey} onChange={handleChange}/>
            </div>
            <p>
                You are searching for {searchKey}
            </p>
            <div>
                <button onClick={search}>Search</button>
            </div>
            <div>
                {results.map((item, index) => {
                    return (
                        <p key={index}>{item}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default withBorder(Search);

