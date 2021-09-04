

import { useState } from 'react';
import './style.scss'

const Switcher = ({ checkedOption, uncheckedOption }: IProps) => {

    const [isChecked, setIsChecked] = useState(true);

    return (
        <div className="switcher">
            <div className="uncheckedOption">{uncheckedOption}</div>
            <label className="switcherContainer">
                <input className="switcherCheckbox" type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                <div className="customSwitcher"></div>
            </label>
            <div className="checkedOption">{checkedOption}</div>
        </div >
    )
}

export default Switcher;

type IProps = {
    checkedOption: string;
    uncheckedOption: string;
}