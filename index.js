const { Client, Events, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on("messageCreate", async (message) => {
    switch(message.content){
        case "!ping":
            message.channel.send(`Moj ping: ${client.ws.ping}`)
        break;
    }
})

// Log in to Discord with your client's token
client.login("MTE2MTU0NDUyNDY1NzYwMjU2MA.GGBXNr.AxjpCzYauJlPrSAbeco8_vCOVhgkyw3bA5ZYTs");

