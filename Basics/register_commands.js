// Registering Commands
require('dotenv').config();
const {REST, Routes, ApplicationCommandOptionType }  = require('discord.js');



// making command
const commands = [
    {
        name:'embeded',
        description:'Embeded Things',
        
    }
];

const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);


(async() =>{
    try {

        console.log("Commands Are Registering...")
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID,process.env.GUILD_ID),
            {body:commands}
        );
        console.log("Commands Are Registered !!")
        
    } catch (error) {
        console.log(`Error Detected named : ${error} `);
    }
})();