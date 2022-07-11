import React from "react";

import './questRoomCore.css'
import Warden from "./quest_rooms/the_jail/enteties/warden/Warden";
/*
This file is designed to be the core of all the dungeons. It'll contain the main components that will
be generated when the user starts a new quest. This will be the parent for all future updates in terms
of dungeons. Each dungeon will be randomly generated with different mobs. These will be done inside
each game file.
 */

const QuestRoomCore = (props) => {
    return (
        <div className={'row'}>
            <h1>{props.name}</h1>
            <h3>{props.description}</h3>
            <div className={'col-md splitScreen'}>
                <p>test</p>
            </div>
            <div className={'col-md'}>
                <Warden />
            </div>
        </div>
    )
}
export default QuestRoomCore