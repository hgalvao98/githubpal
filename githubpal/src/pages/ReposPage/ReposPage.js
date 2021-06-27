import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import Card from '../../components/ReposCard/ReposCard'
import { Main, SmallHeader, List } from './Styled'
import { useHistory } from 'react-router'
import { goToStarredPage } from '../../routes/coordinator'
import StarIcon from '@material-ui/icons/Star';


export const ReposPage = () => {
    const history = useHistory()
    const [reposList, setReposList] = useState([])

    const params = useParams()

    const getRepos = (username) => {
        axios.get(`https://api.github.com/users/${username}/repos`)
            .then((res) => {
                setReposList(res.data)
            })
            .catch((err) => {
                alert('No repos to display')
            })
    }

    useEffect(() => {
        getRepos(params.username)
    }, [params.username])


    const displayReposList = reposList.map((repos) => {
        return <Card
            name={repos.name}
            size={repos.size}
            created_at={repos.created_at}
            key={repos.id}
            html={repos.html_url}
        />
    })

    return (
        <Main>
            <SmallHeader>
                <p><strong>User:</strong> {params.username}</p>
                <h4>Repositories</h4>
                <button onClick={()=>goToStarredPage(history, params.username)}>Starred <StarIcon /></button>

            </SmallHeader>
            <List>
                {displayReposList}
            </List>

        </Main>

    )
}

export default ReposPage