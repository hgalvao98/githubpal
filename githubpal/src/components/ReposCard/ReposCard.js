import React from 'react'
import { Card } from './Styled'
import GitHubIcon from '@material-ui/icons/GitHub';

export const ReposCard = (props) =>{
    return(
        <Card key={props.id}>
            {/* <img src={repos.owner.avatar_url}/> */}
            <p><strong>Name:</strong> {props.name}</p>
            <p><strong>Size:</strong> {props.size}</p>
            <p><strong>Created at:</strong> {props.created_at}</p>
            <a target='blank' href={props.html}><GitHubIcon color='inherit' /></a>
        </Card>
    )
}

export default ReposCard