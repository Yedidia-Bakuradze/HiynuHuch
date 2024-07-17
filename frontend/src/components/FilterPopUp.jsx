import React, { useState } from 'react';
import '../Style/FilterPopUp.css';

const FilterPopUp = () => {
    const [filters, setFilters] = useState([]);

    const addFilter = () => {
        setFilters([...filters, { parameter: '', sorting: '', amount: 0 }]);
    };


    const handleSortingChange = (index, value) => {
        const updatedFilters = [...filters];
        updatedFilters[index].sorting = value;
        setFilters(updatedFilters);
    };

    const handleAmountChange = (index, value) => {
        const updatedFilters = [...filters];
        updatedFilters[index].amount = value;
        setFilters(updatedFilters);
    };

    return (
        <div className='PopUpWindow'>
            <button onClick={addFilter}>Add Filter</button>
            <div >
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Sorting</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody >
                    {filters.map((filter, index) => (
                        <tr className='SortCondition' key={index}>
                            <td >
                            <select className='Select'
                                    value={filter.parameter}
                                    onChange={(e) => handleSortingChange(index, e.target.value)}
                                >
                                    <option value="Status">Status</option>
                                    <option value="Star">Star</option>
                                    <option value="Name">Name</option>
                                    <option value="Location">Location</option>
                                </select>
                            </td>
                            <td>
                                <select className='Select'
                                    value={filter.sorting}
                                    onChange={(e) => handleSortingChange(index, e.target.value)}
                                >
                                    <option value="a-z">A to Z</option>
                                    <option value="z-a">Z to A</option>
                                    <option value="<">Less than</option>
                                    <option value="=">Equal to</option>
                                    <option value="!=">Not equal to</option>
                                </select>
                            </td>
                            <td>
                                <input 
                                    type="number"
                                    value={filter.amount}
                                    onChange={(e) => handleAmountChange(index, e.target.value)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}





export default FilterPopUp;