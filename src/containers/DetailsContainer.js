import Details from "../app/Details";
import { connect } from "react-redux";
import { actions } from "../reducers/details";

export default connect(state => ({ activeTab: state.details }), actions)(
  Details
);
