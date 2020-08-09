const { StreamChat } = require('stream-chat');

const client = new StreamChat(
  STREAM_API_KEY,
  STREAM_APP_SECRET,
);

// creates user and sets them as current
async function addUser(name, id, image, token) {
  const connection = await client.setUser(
    {
      id,
      name,
      image,
    },
    token,
  );
}

// creates channel
async function createChannel(type, name, watch, desc) {
  const channel = client.channel(type, name, {
    name: desc,
    created_by: 'admin',
  });
  await channel.create();

  if (watch) {
    const state = await channel.watch();
  }
}

// adds to channel
async function addUserToChannel(channelName, options) {
  const conversation = client.channel('messaging', channelName, {
    name: 'Founder Chat',
    image: 'http://bit.ly/2O35mws',
    members: ['thierry', 'tommaso'],
  });
  await conversation.create();
}

// updated channel name
async function updateChannel(options) {
  const update = await channel.update(
    {
      name: 'myspecialchannel',
      color: 'green',
    },
    { text: 'Thierry changed the channel color to green', user_id: 'Thierry' },
  );
}

// adds channel members
async function addToChannel(name, channel) {
  await channel.addMembers([name], { text: `${name} joined the channel.` });
}

// removes from channel
async function removeFromChannel(name, channel) {
  await channel.removeMembers([name], { text: `${name} joined the channel.` });
}

// add moderator to channel
async function addModerator(channel) {
  await channel.addModerators(['thierry', 'josh']);
}

// bans user
async function banUser(name, channel) {
  data = await channel.banUser(name, {
    reason: 'Profanity is not allowed here',
  });
}

