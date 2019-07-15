import React, { Component } from "react";
import { connect } from "react-redux";
import { loadedMessage, addMessage } from "../Actions/Chat";

import ChatService from "../services/chat-service";
import { genRandomId } from "../helpers/utils";

import Header from "./Header";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

class Chat extends Component {
  state = {};

  componentDidMount() {
    const chatService = new ChatService();
    chatService.getAllMessages().then(messages => {
      this.props.loadedMessage(messages);
    });
  }

  addNewMessage = newMsgText => {
    const messages = [
      ...this.state.messages,
      {
        id: genRandomId(),
        message: newMsgText,
        user: "anonym"
      }
    ];
    this.setState({
      messages
    });
  };

  editOwnMessage = messageId => {
    const { messages } = this.state;
    const messageById = messages.find(msg => {
      return msg.id === messageId;
    });

    if (messageById) {
      this.setState({
        messageForEdit: messageById
      });
    }
  };

  applyEditedMessage = editedMsg => {
    const { messages, messageForEdit } = this.state;
    const newMessages = [...messages];

    const messageIdxById = newMessages.findIndex(msg => {
      return msg.id === messageForEdit.id;
    });

    if (messageIdxById) {
      newMessages[messageIdxById].message = editedMsg;
    }

    this.setState({
      messageForEdit: undefined,
      messages: newMessages
    });
  };

  deleteMessage = messageId => {
    const { messages } = this.state;
    const messageIdxById = messages.findIndex(msg => {
      return msg.id === messageId;
    });

    if (messageIdxById) {
      const newMessages = [...messages];
      newMessages.splice(messageIdxById, 1);
      this.setState({
        messages: newMessages
      });
    }
  };

  render() {
    const { messageForEdit } = this.state;
    const { messages } = this.props;
    return (
      <>
        <h1>This is Chat component</h1>
        And his childrens
        <Header />
        {messages ? (
          <MessageList
            messages={messages}
            editOwnMessage={this.editOwnMessage}
            deleteMessage={this.deleteMessage}
          />
        ) : (
          "Loading..."
        )}
        <MessageInput
          onNewMsg={this.addNewMessage}
          onEditMsg={this.applyEditedMessage}
          messageForEdit={messageForEdit}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.Chat.message
  };
};

const mapDispatchToProps = {
  loadedMessage,
  addMessage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
