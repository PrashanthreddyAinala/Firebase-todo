import React from "react";
import {db} from "./firebase"

function TodoList({todo, inprogress , id}) {

    function toggleInprogress() {
        db.collection("todos").doc(id).update({
            inprogress: !inprogress
        })
    }

    function deleteTodo() {
        db.collection("todos").doc(id).delete()
    }

    return(
        <div className="card">
            <div>
                <h2>{todo}</h2>
                <p>{inprogress ? "inprogress" : "completed"}</p>
            </div>
            <div className="card-btn">
                <button onClick={toggleInprogress}>{inprogress ? "Done" : "UnDone"}</button>
                <button onClick={deleteTodo}>Delete</button>
            </div>
        </div>
    )
}

export default TodoList;