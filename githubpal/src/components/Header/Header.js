import React from 'react'
import { goToHome } from '../../routes/coordinator'
import { useHistory } from 'react-router'
import { NavBarButton } from './Styled'

export const Header = () => {
    const history = useHistory()
    return (
        <div>
        <NavBarButton>
        <p onClick={()=>goToHome(history)}>GitHub Search Pal</p>
        </NavBarButton>
        </div>
    )
}

export default Header