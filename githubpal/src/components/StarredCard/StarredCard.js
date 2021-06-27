import React from 'react'
import { Card } from './Styled'
import GitHubIcon from '@material-ui/icons/GitHub';

export const StarredCard = (props) =>{
    return(
        <Card key={props.id}>
            <a target='blank' href={props.url}> <img src={props.avatar} width='50' /></a>
            <p><strong>Name:</strong> {props.name}</p>
            <p><strong>Owner:</strong> {props.owner}</p>
            <p><strong>Size:</strong> {props.size}</p>
            <a target='blank' href={props.html}><GitHubIcon color='inherit'/></a>
        </Card>
    )
}

export default StarredCard