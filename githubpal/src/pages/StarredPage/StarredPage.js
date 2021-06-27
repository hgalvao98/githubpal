import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import axios from 'axios'
import Card from '../../components/StarredCard/StarredCard'
import { SmallHeader, List } from '../ReposPage/Styled'
import { goToRepos } from '../../routes/coordinator'
import SubjectIcon from '@material-ui/icons/Subject';


export const StarredPage = () => {
    const history = useHistory()
    const [starredList, setStarredList] = useState([])

    const params = useParams()


    const getStarred = (username) => {
        axios.get(`https://api.github.com/users/${username}/starred`)
            .then((res) => {
                setStarredList(res.data)
            })
            .catch((err) => {
                alert('No Starred Repos to display')
            })
    }

    useEffect(() => {
        getStarred(params.username)
    }, [params.username])


    const displayStarredList = starredList.map((repos) => {
        return <Card
            name={repos.name}
            owner={repos.owner.login}
            size={repos.size}
            key={repos.id}
            html={repos.html_url}
            avatar={repos.owner.avatar_url}
            url={repos.owner.html_url}
        />
    })

    return (
        <div>
            <SmallHeader>
                <p><strong>User:</strong> {params.username}</p>
                <h4>Starred</h4>
                <button onClick={() => goToRepos(history, params.username)}>Repos <SubjectIcon/> </button>

            </SmallHeader>
            <List>{displayStarredList}</List>

        </div>

    )
}

export default StarredPage