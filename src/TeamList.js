import React from "react";

const List = props => {
    console.log(props);
    return (
        <div classNames="form-list">
            {props.addNewMember.map(team => {
                return (
                    <div className="member" key={team.id}>
                        <h2>{team.name}</h2>
                        <h2>{team.email}</h2>
                        <h2>{team.role}</h2>
                    </div>

                );
            })}
        </div>
    )
}
export default List;