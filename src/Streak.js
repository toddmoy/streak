import React, { Component } from "react";
import Moment from "moment";

import "./Streak.css";

const Day = props => {
  return <div className="day" />;
};

class Streak extends Component {
  render() {
    let today = Moment();
    let daysElapsed = today.diff(this.props.start, "days");
    let daysStreaking = [];

    for (let i = 0; i < daysElapsed; i++) {
      daysStreaking.push(<Day key={i} success />);
    }

    return <div className="wrapper">{daysStreaking}</div>;
  }
}

export default Streak;
