import { connect } from "react-redux";
import { numberRequestAction } from "../../actions";
import { NumberSetterComponent } from "./number-setter.component";

const mapDispatchToProps = dispatch => ({
  onRequestNewNumber: () => dispatch(numberRequestAction())
});

export const NumberSetterContainer = connect(
  null,
  mapDispatchToProps
)(NumberSetterComponent);
