import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const UserRepo = ({ userRepoName, userRepoUrl }) => {
    return (

        <>
            <ListGroupItem className='w-auto' action={true} href={userRepoUrl} target="_blank">
                {userRepoName}
            </ListGroupItem>
        </>

    )
}

export default UserRepo