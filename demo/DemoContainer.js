import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as DemoActions from "./demoRedux";

import Demo from "./Demo";

const mapStateToProps = ({ value }) => ({
  value
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(DemoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
