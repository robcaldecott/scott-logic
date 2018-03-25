import React from "react";
import Card from "../components/Card";

// Todo list
export default class Todos extends React.Component {
  componentDidMount() {
    this.props.get(this.props.userId);
  }

  render() {
    const { todos } = this.props;
    if (todos.length === 0) {
      return null;
    }
    return (
      <Card style={{ marginTop: "1rem" }}>
        <ul className="mdc-list mdc-list--non-interactive">
          {todos.map(({ id, completed, title }) => (
            <li key={id} className="mdc-list-item">
              <span
                style={{
                  textDecoration: completed ? "line-through" : undefined
                }}
              >
                {title}
              </span>
              {completed && (
                <span className="mdc-list-item__meta material-icons">
                  check_circle
                </span>
              )}
            </li>
          ))}
        </ul>
      </Card>
    );
  }
}
