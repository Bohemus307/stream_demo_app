const { StreamChat } = require('stream-chat');

// instantiate client on server side
const apiKey = '3nn6a4b3hkq5';
const client = new StreamChat(apiKey, null, {
  timeout: 6000,
});
const token = client.createToken('john');
client.setUser({
  id: 'john',
  name: 'John Doe',
  image: 'https://getstream.io/random_svg/?name=John',
},
token);
client.disconnect();
// Create a few users
client.setUser({ id: 'jill' }, token);
client.setUser({ id: 'andy' }, token);
// Add some to channels
const room1 = client.channel('messaging', 'basement', {
  members: ['josh'],
});
room1.create();
room1.addMembers(['jill', 'andy']);
// Update channel to have a name
room1.update({ name: 'first channel' });
// Add/Remove channel members
room1.removeMembers(['jill']);
// Promote a moderator
room1.addModerators(['josh']);
// Ban a user
room1.banUser('any', { reason: 'Profanity' });

// Client Side ------------------------------------------------------------

// create client dev token for development enviroment token (minus auth) setup in dashboard
const client1 = new StreamChat('3nn6a4b3hkq5', null, { timeout: 6000 });
const devToken = client1.devToken('joshua');
client1.createToken('josh');
client1.setUser({ id: 'jill' }, devToken);
// Fetch a channel list
const filter = { type: 'messaging', members: { $in: ['joshua'] } };
const sort = { created_at: -1 };
client1.queryChannels(filter, sort, {
  watch: true,
  state: true,
});
// Send a message
const message = { id: 1, text: 'hello world' };
client1.sendMessage(message);
// Edit a message
const newMessage = { id: 1, text: 'hello new world' };
client1.updateMessage(newMessage);
// Flag a message
client1.flagMessage(newMessage); // i think i need an event for this to work ?
// Add reaction to message
const messageID = '1';
client1.sendReaction(messageID, {
  type: 'love',
});
