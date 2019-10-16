import React, { useState } from "react";

const teamForm = (props) => {

    const [team,setTeam] = useState({ name: '', email: '', role: '', });
    return (
        <div>
            <form>
                <label htmlFor='name'>Name<label/>
                    <input>
                    </input>
                </label>
            </form>
        </div>
    );
}