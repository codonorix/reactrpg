import React, {useRef, useState} from "react";

import './characterMenu.css'
import ActionButtons from "./ActionButtons";
import PlayerItems from "./PlayerItems";

import helmet from '../../icons/icons/32x32/helmet_01a.png'
import chestplate from '../../icons/icons/32x32/armor_01a.png'
import gloves from '../../icons/icons/32x32/gloves_01a.png'
import boots from '../../icons/icons/32x32/boots_01a.png'
import sword from '../../icons/icons/32x32/sword_01a.png'
import shield from '../../icons/icons/32x32/shield_01e.png'
import InfoBar from "./info_bars/InfoBar";

const CharacterMenu = (props) => {
    const [name, setName] = useState("Logan")

    const [health, setHealth] = useState(100)
    const [maxHealth, setMaxHealth] = useState(100)

    const [xp, setXp] = useState(0)
    const [reqXp, setReqXp] = useState(100)

    return (
        <div>
            <div className={'row'}>
                <div className={'col-md-4'}>
                    <h1>{name}</h1>
                    <br/>
                </div>

                <InfoBar
                    type='healthBar'
                    health={health}
                    healthMax={maxHealth}
                />
                <InfoBar
                    type='xpBar'
                    health={xp}
                    healthMax={reqXp}
                />
            </div>

            <div className={'row'}>
                <PlayerItems
                    item={'Helmet'}
                    src={helmet}
                />
                <PlayerItems item={'Chestplate'} src={chestplate}/>
                <PlayerItems item={'Gloves'} src={gloves}/>
                <PlayerItems item={'Boots'} src={boots}/>

                <ActionButtons name={'Start new Quest'} location={'game'}/>
            </div>

            <div className={'row'}>
                <PlayerItems item={'Sword'} src={sword}/>
                <PlayerItems item={'Shield'} src={shield}/>

                <ActionButtons name={'Inventory'} location={'inventory'}/>
            </div>

            <div className={'row'}>
                <div className={'col-md'}> </div>
                <ActionButtons name={'Shop'} location={'shop'}/>
            </div>

            <div className={'row'}>
                <div className={'col-md-4'}>

                </div>
                <ActionButtons name={'Encyclopedia'} location={'encyclopedia'}/>
            </div>
        </div>
    )
}

export default CharacterMenu