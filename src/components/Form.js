import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "JavaScript",
      description: "JavaScript is a programming language",
      libraries: "vue",
      awesome: false,
    };
  }

  handleChange = (event) => {
    if (event.target.type === "text") {
      this.setState({ name: event.target.value });
    } else if (event.target.type === "textarea") {
      this.setState({ description: event.target.value });
    } else if (event.target.type === "select-one") {
      this.setState({ libraries: event.target.value });
    } else if (event.target.type === "checkbox") {
      this.setState({ awesome: event.target.checked });
    } else {
      console.log("nothing");
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Description</label>
          <textarea
            value={this.state.description}
            onChange={this.handleChange}
          ></textarea>
          <br />
          <br />
          <label>Libraries</label>
          <select value={this.state.libraries} onChange={this.handleChange}>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
          </select>
          <br />
          <br />
          <label>Awesome</label>
          <input
            type="checkbox"
            checked={this.state.awesome}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
