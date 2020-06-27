const initState = {
    projects: [
        {id: '1', title: 'title1', content: 'some content'},
        {id: '2', title: 'title2', content: 'some content'},
        {id: '3', title: 'title3', content: 'some content'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state;
        default:
            return state
    }
}

export default projectReducer