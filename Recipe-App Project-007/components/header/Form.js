import React from 'react'
import { FormContainer, FoodInput, Button, Select } from './HeaderStyle'
const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handlesubmit")
    }
    return (
        <FormContainer onSubmit={handleSubmit}>
            <FoodInput type="text" placeholder="Search" />
            <Button>Search</Button>
            <Select name="mealTypes" id="mealTypes"></Select>
        </FormContainer>
    )
}

export default Form