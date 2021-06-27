export const goToRepos = (history, id) =>{
    history.push(`/${id}/repos`)
}

export const goToHome = (history) =>{
    history.push('/')
}

export const goToStarredPage = (history, id) =>{
    history.push(`/${id}/starred`)
}