exports.run = async (client, message, args) => {
    //message.delete();
    const [nickname, realm = "Hyjal", region = "EU", ...rest] = args;

    const embed = {
        "title": `Qui est ${nickname} :thinking:`,
        "color": 4886754,
        "fields": [
            {
                "name": ":shield: Armory",
                "value": `https://worldofwarcraft.com/fr-fr/character/${realm}/${nickname}`
            },
            {
                "name": ":mag: Wowanalyser",
                "value": `https://wowanalyzer.com/character/${region}/${realm}/${nickname}/`
            },
            {
                "name": ":gear: Raider.io",
                "value": `https://raider.io/characters/${region.toLowerCase()}/${realm.toLowerCase()}/${nickname}`
            },
            {
                "name": ":crossed_swords: Wipefest",
                "value": `https://www.wipefest.net/character/${nickname}/${realm}/${region}`
            },
            {
                "name": ":dog: WoW Pets",
                "value": `https://wow-pets.com/character/${region}/${realm}/${nickname}`
            }
        ]
    };

    message.channel.send({embed});
};

exports.help = {
    name: "ping",
    category: "Miscelaneous",
    description: "It like... Pings. Then Pongs. And it's not Ping Pong.",
    usage: "ping"
};