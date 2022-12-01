const initState = {
    filters: {
        search: '',
        status: 'All',
        priority: []
    },
    todoList: [
        {
            id: 1,
            name: 'Learn yoga',
            completed: false,
            priority: 'Medium'
        },
        {
            id: 2,
            name: 'Learn react',
            completed: false,
            priority: 'High'
        },
        {
            id: 3,
            name: 'Learn js',
            completed: true,
            priority: 'Low'
        },
    ],
}

const rootReducer = (state = initState, action) => {
    switch(action.type){
        
    }
}