import React, { Component } from "react";
import { connect } from "react-redux";
import { addMessage } from "../Actions/Chat";

class MessageInput extends Component {
  state = {
    msgText: ""
  };

  onMsgBoxChange = event => {
    const msgText = event.currentTarget.value;

    this.setState({
      msgText
    });
  };

  sendBtnClickHandler = () => {
    // const { onNewMsg } = this.props;
    const { msgText: message } = this.state;

    // onNewMsg(msgText);
    this.setState({
      msgText: ""
    });

    this.props.addMessage({ message });
  };

  editBtnClickHandler = () => {
    const { onEditMsg } = this.props;
    const { msgText } = this.state;

    onEditMsg(msgText);
    this.setState({
      msgText: ""
    });
  };

  render() {
    const { msgText } = this.state;
    const { messageForEdit } = this.props;
    let textForComp;

    if (msgText) {
      textForComp = msgText;
    } else if (messageForEdit) {
      textForComp = messageForEdit.message;
    } else {
      textForComp = "";
    }

    return (
      <>
        <h1>This is MessageInput component</h1>
        <textarea
          cols={70}
          rows={4}
          value={textForComp}
          onChange={this.onMsgBoxChange}
        />
        {messageForEdit ? (
          <button onClick={this.editBtnClickHandler}>Edit</button>
        ) : (
          <button onClick={this.sendBtnClickHandler}>Send</button>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  addMessage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageInput);
