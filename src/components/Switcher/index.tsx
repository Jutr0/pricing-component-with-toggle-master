

import { useState } from 'react';
import './style.scss'

const Switcher = ({ checkedOption, uncheckedOption, handleSwitch }: IProps) => {

    const [isChecked, setIsChecked] = useState(true);

    const handleChange = () => {
        setIsChecked(!isChecked);
        handleSwitch(!isChecked);
    }

    return (
        <div className="switcher">
            <div className="uncheckedOption">{uncheckedOption}</div>
            <label className="switcherContainer">
                <input className="switcherCheckbox" type="checkbox" checked={isChecked} onChange={handleChange} />
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
    handleSwitch: (value: boolean) => void
}