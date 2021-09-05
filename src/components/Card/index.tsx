
import './style.scss'

const Card = ({ title, header, options, button, main, isSwitchChecked }: IProps) => {
    return (
        <div className={`cardContainer ${ main ? "mainCard" : "" }`}>
            <header> <h4>{title}</h4> </header>
            <div className="price">{isSwitchChecked ? header.monthly : header.annually}</div>
            {options.map((option) => (
                <div className="option" key={option}> {option} </div>
            ))}
            <button>{button}</button>
        </div>
    )
}

export default Card;

type IProps = {
    title: string;
    header: {
        annually: string;
        monthly: string;
    },
    options: string[];
    button: string;
    main: boolean;
    isSwitchChecked: boolean;
}