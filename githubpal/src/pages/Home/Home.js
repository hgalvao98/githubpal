import React, {useState} from 'react'
import axios from 'axios'
import { Form, Card, Main, Buttons } from './Styled'
import {goToRepos, goToStarredPage} from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import SearchIcon from '@material-ui/icons/Search';


export const Home = () => {
const history = useHistory()
    const [searchInput, setSearchInput] = useState('')
    const [profile, setProfile] = useState([])
    

    const handleChange = (event) =>{
        setSearchInput(event.target.value)
    }

    const handleClick = () =>{
        axios.get(`https://api.github.com/users/${searchInput}`)
        .then((res)=>{
            setProfile(res.data)
        })
        .catch((err)=>{
            alert('No user found')
        })
    }


    return (
        <Main>
        <Form>
            <AccountCircleIcon /><input
            value={searchInput}
            placeholder='username'
            onChange={handleChange}
            />
            
            <button onClick={handleClick}><SearchIcon/></button>
        </Form>
        {profile && profile.login ? <Card>
        <img src={profile.avatar_url} alt={profile.login} />
        <h3>{profile.login}</h3>
        <p>{profile.followers} Followers</p>
        <p>{profile.following} Following</p>
        <Buttons>
        <button onClick={()=>goToRepos(history, profile.login)}><p>{profile.public_repos} Repos</p></button>
        <button onClick={()=>goToStarredPage(history, profile.login)}><p>Starred</p></button>
        </Buttons>
        </Card> : 'Type the username above'}
        
      </Main>
    )
}

export default Home