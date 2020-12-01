const Discord = require("discord.js");
const db = require("quick.db");
const moment = require("moment");
require("moment-duration-format");
module.exports.run = async (bot, message) => {
  try {
    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    //let shardi = bot.shard.id + 1;

    const duration = moment
      .duration(bot.uptime)
      .format("D [gün], H [saat], m [dakika], s [saniye]");
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .addField(`Versiyon(version)`, `1`, true)
      .addField(`Aktiflik Süresi(Activity time)`, duration, true)
      .addField(`Sunucular(servers)`, bot.guilds.size.toLocaleString(), true)
      .addField(
        `Kullanıcılar(Users)`,
        bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(),
        true
      )
      .addField(`Gecikme(ping)`, bot.ping + "ms", true)
      .addField(
        `Ram Kullanımı(ram usage)`,
        `%${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}`,
        true
      )
      //.addField(`Toplam Shard`, bot.shard.count, true)
      //.addField(`Bulunduğum Shard`, shardi, true)
      //.addField(`Genel Shard`, `${shardi}/${bot.shard.count}`, true)
      .addField(`Destek Sunucusu(support server)`, `[Soon!](Soon)`, true)
      .addField(
        `Botu Ekleyin(Add the Bot)`,
        `[Click!](https://discord.com/oauth2/authorize?client_id=775488259966631947&scope=bot&permissions=8)`,
        true
      )
      .addField(`Bota Oy Verin(Vote for Bot)`, `YAKINDA(Soon)`, true)
      .setFooter(bot.user.username, bot.user.avatarURL);
    message.channel.send(embed);
  } catch (err) {
    const ayarlar = require("../ayarlar.json");
    const embed = new Discord.RichEmbed()
      .setDescription(
        `Sanırım bir sorun var!(I think there is a problem!) Bunu yetkililere bildirin!(Report this to the authorities!)\nDestek Sunucusu(Support Server): [Click!](${ayarlar.sunucun})`
      )
      .setColor("RED")
      .setTimestamp();
    message.channel.send(embed);
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-info"],
  permLevel: 4,
  kategori: "sunucu"
};

module.exports.help = {
  name: "bot-bilgi",
  description: "bot-bilgi",
  usage: "bot-bilgi"
};
