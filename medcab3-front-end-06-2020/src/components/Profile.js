import React from 'react'

export const Profile = props => {
    console.log(props)
    return ( 
    <h1>{props.userInfo.email}</h1>
    )
}