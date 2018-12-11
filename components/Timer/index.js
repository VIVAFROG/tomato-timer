import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Timer from "./presenter";
import { actionCreators as tomatoActinos } from "../../reducer";

function mapStateToProps(state) {
  const { isPlaying, elapsedTime, timerDuration } = state;
  return {
    isPlaying,
    elapsedTime,
    timerDuration
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startTimer: bindActionCreators(tomatoActinos.startTimer, dispatch),
    restartTimer: bindActionCreators(tomatoActinos.restartTimer, dispatch),
    addSecond: bindActionCreators(tomatoActinos.addSecond, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
