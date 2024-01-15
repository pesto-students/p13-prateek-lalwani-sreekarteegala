import { useState } from "react";

function SearchFilter() {
    const list = [
        "Banana",
        "Apple",
        "Orange",
        "Mango",
        "Pineapple",
        "Watermelon"
    ];

    const [filterList, setFilterList] = useState(list);

    const filterListChanged = (event) => {
        if (event.target.value === "") {
            setFilterList(list);
            return;
        }

        const filteredList = list.filter((item) => item.toLowerCase().indexOf(event.target.value) !== -1);

        setFilterList(filteredList);
    }

    return (
        <>
            <h1>Search Filter using array.filter()</h1>
            Search: <input type="text" onChange={filterListChanged} />
            {filterList && filterList.map((item, index) =>
                <p key={index}>{item}</p>
            )}
        </>
    )
}


export default SearchFilter;