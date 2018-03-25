import Todos from "../app/Todos";
import { connect } from "react-redux";
import { actions } from "../reducers/todos";

export default connect(
  state => ({
    userId: state.users.selectedUser.id,
    todos: state.todos
  }),
  actions
)(Todos);
