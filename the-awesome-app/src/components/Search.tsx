import React, {ChangeEvent, useState} from 'react';

// const array = useState("");
// //array had 2 elements => 1st element is a variable, 2nd element is a function(chnage the variale)
// const searchKey = array[0];
// const setSearchKey = array[1];

function Search(){

    const [searchKey, setSearchKey] = useState("");
    const [results, setResults] = useState([]);

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        setSearchKey(e.target.value);
    }

    async function search(){

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
                <input type="search" placeholder='Search for something' 
                                            value={searchKey} onChange={handleChange}/>
            </div>
            <p>
                You are searching for {searchKey}
            </p>
            <div>
                <button onClick={search}>Search</button>
            </div>
        </div>
    )
}

export default Search;

