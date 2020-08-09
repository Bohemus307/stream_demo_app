const axios = require('axios');
const { StreamChat } = require('stream-chat');

function fetchToken(username) {
  return axios.post('http://localhost:5500/join', {
    username,
  });
}

// Client Side

// Fetch a channel list

const filter = { type: 'messaging', members: { $in: ['thierry'] } };
const sort = { created_at: -1 };

const channels = await authClient.queryChannels(filter, sort, {
    watch: true,
    state: true,
});

for (const c of channels) {
    console.log(c.custom.name, c.cid);
}

// Send a message 

const message = await channel.sendMessage({
  text: "Did you already see the trailer?",
});

// Return message

channel.on("message.new", event => {
  logEvent(event);
});

await channel.sendMessage({
  text: "What is the medieval equivalent of tabs vs spaces?",
});

// Edit a message

const message = { id: 123, text: 'the edited version of my text' };
const update = await client.updateMessage(message);

// Flag a message

const flag = await client.flagMessage(messageResponse.message.id);

// Add reaction to message

const reaction = await channel.sendReaction(123, {
    type: 'love',
    myCustomField: 124,
});
