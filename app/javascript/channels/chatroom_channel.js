import consumer from "./consumer";

const initChatroomCable = () => {
  const messagesContainer = document.getElementById('messages');
  if (messagesContainer) {
    const id = messagesContainer.dataset.chatroomId;
    console.log('id', id);

    consumer.subscriptions.create({ channel: "ChatroomChannel", id: id }, {
      received(messageHTML) {
        messagesContainer.insertAdjacentHTML('beforeend', messageHTML)
      },
    });
  }
}

export { initChatroomCable };