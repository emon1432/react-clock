/* eslint-disable jsx-a11y/no-distracting-elements */
// @ts-nocheck
import React from "react";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), locale: "en-US", direction: "left" };
  }

  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  changeLanguage = () => {
    //get the current locale
    const { locale } = this.state;
    //if locale is en-US then set locale to bn-BD
    if (locale === "en-US") return this.setState({ locale: "bn-BD" });
    //if locale is bn-BD then set locale to en-US
    if (locale === "bn-BD") return this.setState({ locale: "en-US" });
  };

  changeDirection = () => {
    //get the current direction
    const { direction } = this.state;
    //if direction is left then set direction to right
    if (direction === "left") return this.setState({ direction: "right" });
    //if direction is right then set direction to up
    if (direction === "right") return this.setState({ direction: "up" });
    //if direction is up then set direction to down
    if (direction === "up") return this.setState({ direction: "down" });
    //if direction is down then set direction to left
    if (direction === "down") return this.setState({ direction: "left" });
  };

  render() {
    const { date, locale, direction } = this.state;
    return (
      <div>
        <button type="button" onClick={this.changeLanguage}>
          Change Language
        </button>
        <button type="button" onClick={this.changeDirection}>
          Change Direction
        </button>
        <marquee direction={direction}>
          <h1>{date.toLocaleTimeString(locale)}</h1>
        </marquee>
        {/* <marquee direction="right">
          <h1>{date.toLocaleTimeString(locale)}</h1>
        </marquee>
        <marquee direction="up">
          <h1>{date.toLocaleTimeString(locale)}</h1>
        </marquee>
        <marquee direction="down">
          <h1>{date.toLocaleTimeString(locale)}</h1>
        </marquee> */}
      </div>
    );
  }
}

export default Clock;
