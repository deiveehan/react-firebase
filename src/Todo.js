import { Button, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import { db } from './firebase_config'

export default function TodoListItem({todo, inprogress, id}) {

    function toggleInProgress() {
        db.collection("todo").doc(id).update({
            inprogress: !inprogress
        })
    }

    function deleteTodo() {
        db.collection("todo").doc(id).delete();
    }

    return (
        <div style = {{display: "flex"}}>
        <ListItem>
            <ListItemText primary={todo} secondary={inprogress ? "In progress" : "Completed"}>
            </ListItemText>
        </ListItem>

        <Button onClick={toggleInProgress}> { inprogress ? "In progress" : "Completed"}</Button>
        <Button onClick={deleteTodo}>X</Button>
        </div>
    )
}
