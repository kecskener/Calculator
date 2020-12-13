import React from 'react';
import Button from '../Button/Button';
import './Calculator.scss';

class Calculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: "0",
        };
    }

    inputNumber = (number) => {
        this.setState({ value: this.state.value === "0" ? String(number) : `${this.state.value + number}` });
    }

    calculate = () => {
        const unprepared = this.state.value;

        if (!unprepared.includes("+-") && !unprepared.includes("-+") && !unprepared.includes("/*") && !unprepared.includes("*/") && !unprepared.includes("-/") && !unprepared.includes("+/") && !unprepared.includes("-*") && !unprepared.includes("-*")){
            const sum = eval(this.state.value).toString();

            this.setState({ value: sum });
        }
    }

    sqaureRoot = () => {
        const number = Number(this.state.value);

        const sum = Math.sqrt(number);

        this.setState({ value: sum });
    }

    clearAll = () => {
        this.setState({ value: "0" });
    }

    render() {
        return (
            <div className={"container--calculator"}>
                <input className={"container--calculator__input"} value={this.state.value} readOnly />
                <div className={"container--calculator__control"}>
                    <div className={"container--calculator__control--left"}>
                        <Button symbol={"0"} click={() => this.inputNumber(0)} class={"container--calculator__control--left__button"} />
                        <Button symbol={"1"} click={() => this.inputNumber(1)} class={"container--calculator__control--left__button"} />
                        <Button symbol={"2"} click={() => this.inputNumber(2)} class={"container--calculator__control--left__button"} />
                        <Button symbol={"3"} click={() => this.inputNumber(3)} class={"container--calculator__control--left__button"} />
                        <Button symbol={"4"} click={() => this.inputNumber(4)} class={"container--calculator__control--left__button"} />
                        <Button symbol={"5"} click={() => this.inputNumber(5)} class={"container--calculator__control--left__button"} />
                        <Button symbol={"6"} click={() => this.inputNumber(6)} class={"container--calculator__control--left__button"} />
                        <Button symbol={"7"} click={() => this.inputNumber(7)} class={"container--calculator__control--left__button"} />
                        <Button symbol={"8"} click={() => this.inputNumber(8)} class={"container--calculator__control--left__button"} />
                        <Button symbol={"9"} click={() => this.inputNumber(9)} class={"container--calculator__control--left__button"} />
                    </div>
                    <div className={"container--calculator__control--right"}>
                        <Button symbol={"+"} click={() => this.inputNumber("+")} class={"container--calculator__control--right__button"} />
                        <Button symbol={"-"} click={() => this.inputNumber("-")} class={"container--calculator__control--right__button"} />
                        <Button symbol={"÷"} click={() => this.inputNumber("/")} class={"container--calculator__control--right__button"} />
                        <Button symbol={"×"} click={() => this.inputNumber("*")} class={"container--calculator__control--right__button"} />
                        <Button symbol={"%"} click={() => this.inputNumber(" / 100 * ")} class={"container--calculator__control--right__button"} />
                        <Button symbol={"✔"} click={this.sqaureRoot} class={"container--calculator__control--right__button"} />
                        <Button symbol={"cc"} click={this.clearAll} class={"container--calculator__control--right__button"} />
                        <Button symbol={"="} click={this.calculate} class={"container--calculator__control--right__button"} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;