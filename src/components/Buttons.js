import React from "react";

class Buttons extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { change: currentChange } = this.props;
    const { change: nextChange } = nextProps;

    if (currentChange === nextChange) {
      return false;
    }
    return true;
  }
  render() {
    console.log('button');
    const { change } = this.props;
    const { direc } = this.props;
    return (
      <div>
        <button type="button" onClick={change}>
          Change Language
        </button>
        <button type="button" onClick={direc}>
          Change Direction
        </button>
      </div>
    );
  }
}

export default Buttons;
