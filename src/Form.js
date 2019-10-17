import React, { useState } from "react";

const TeamForm = props => {

    const [team,setTeammates] = useState({ 
        name: '', 
        email: '', 
        role: '' });
    const ChangeHandler = e => {
        setTeammates ({...team, [e.target.name]: e.target.value}) 
        console.log(e.target.name);
    };
    const SubmitForm = e =>{
        e.preventDefault();
        const newMember = {
            ...team,
            id:Date.now()
        };
        props.addNewMember(newMember);
        setTeammates({name: '', email: '', role: ''});

    };
    return (


        <form onSubmit={SubmitForm}>


        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={team.name} onChange={ChangeHandler}/>


        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={team.email} onChange={ChangeHandler}/>


        <label htmlFor="role">Role</label>
        <input type="text" name="role" value={team.role} onChange={ChangeHandler}/>


        <button type="submit">Add Teammate</button>

        </form>
        // ends the form 


    );
}

export default TeamForm;