import React from 'react'
import { FormContainer, FoodInput, Button, Select } from './HeaderStyle'
const Form = ({ setQuery,
    query,
    getData,
    mealTypes,
    setMeal,
    meal }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handlesubmit")
        getData();
    }
    return (
        <FormContainer onSubmit={handleSubmit}>
            <FoodInput type="text" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
            <Button>Search</Button>
            <Select name="mealTypes" id="mealTypes"></Select>
        </FormContainer>
    )
}

export default Form