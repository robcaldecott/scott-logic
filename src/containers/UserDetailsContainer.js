import UserDetails from "../app/UserDetails";
import { connect } from "react-redux";

export default connect(state => ({ user: state.users.selectedUser }))(
  UserDetails
);
