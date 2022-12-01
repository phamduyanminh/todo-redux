import React from 'react';


/*NOTE 
* action creator => function
*/
export const addTodo = (data) => {
    return{
        type: 'todoList/addTodo',
        payload: data,
    }
}