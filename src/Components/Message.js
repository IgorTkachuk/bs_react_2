import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteMessage } from "../Actions/Chat";

class Message extends Component {
  state = {};

  render() {
    const { msg, editOwnMessage } = this.props;
    return (
      <>
        <img src={msg.avatar} width={30} alt="" />
        {msg.message}({msg.created_at})
        {msg.user === "anonym" ? (
          <>
            <button
              onClick={_ => {
                editOwnMessage(msg.id);
              }}
            >
              edit
            </button>
            <button
              onClick={_ => {
                this.props.deleteMessage(msg.id);
              }}
            >
              delete
            </button>
          </>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = {
  deleteMessage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
