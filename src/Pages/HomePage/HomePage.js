import React from 'react'
import { Container } from 'react-bootstrap'

const HomePage = () => {
    return (
        <>
            <Container fluid>
                <div style={{ height: "80vh", marginTop: "25px" }} className=' d-flex justify-content-center align-items-center flex-column'>
                    <h1 className='display-4 text-center text-primary'> Welcome ! </h1>
                    <p className='text-success text-center display-3'>Github Finder</p>
                </div>
            </Container>
        </>
    )
}

export default HomePage;