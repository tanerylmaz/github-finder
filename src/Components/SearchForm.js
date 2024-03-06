import React from 'react'
import { Container, InputGroup, Form, Button } from 'react-bootstrap';

const SearchForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <>
            <Container className='py-3'>
                <Form onSubmit={handleSubmit}>
                    <InputGroup>
                        <Form.Control placeholder="Enter search username.">
                        </Form.Control>
                        <Button type='submit' variant='success'>Search</Button>
                    </InputGroup>
                </Form>
            </Container>
        </>
    )
}

export default SearchForm;