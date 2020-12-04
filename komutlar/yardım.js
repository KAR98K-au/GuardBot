const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  if (kontrol == null) {
    kontrol = "EN_us";
  }
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "g-";
  if (kontrol == "TR_tr") {
    const embed = new Discord.RichEmbed()
      .setDescription(
        `:shield:Bot sürümü; **v1.0**, Prefix: **${prefix}**, Dil: **${kontrol}**:shield:`
      )
      .addField(
        `:shield:Bot:shield:`,
        `\`yardım\`, \`dil\`, \`bot-bilgi\`, \`ayarlar\`, \`reboot\`, \`prefix\`, \`prefix-sıfırla\`,\`karaliste\`,\`beyazliste\``
      )
      .addField(
        `:shield:Güvenlik Sistemi:shield:`,
        `\`güvenlik\`, \`güvenlik-sıfırla\`, \`güvenlik-verilecek-rol\`, \`güvenlik-verilecek-rol-sıfırla\`, \`güvenlik-alınacak-rol\`, \`güvenlik-alınacak-rol-sıfırla\`, \`güvenlik-sahte-rol\`, \`güvenlik-sahte-rol-sıfırla\``
      )
      .addField(
        `:shield:Ototag Sistemi:shield:`,
        `\`ototag\`, \`ototag-sıfırla\`, \`ototag-isim\`, \`ototag-isim-sıfırla\``
      )
      .addField(
        `:shield:Rol Koruma:shield:`,
        `\`rol-koruma\`, \`rol-koruma-sıfırla\`, \`rol-koruma-rol\`, \`rol-koruma-rol-sıfırla\`, \`rol-limit\`, \`rol-limit-sıfırla\``
      )
      .addField(`:shield:Kanal Koruma:shield:`, `\`kanal-koruma\`, \`kanal-koruma-sıfırla\``)

      .addField(
        `:shield:Ban Koruma:shield:`,
        `\`ban-koruma\`, \`ban-koruma-sıfırla\`, \`ban-limit\`, \`ban-limit-rol\`, \`ban-limit-sıfırla\`, \`ban-limit-rol-sıfırla\``
      )
      .addField(
        `:shield:Yedekleme:shield:`,
        `\`yedek\`, \`yedek al\`, \`yedek sil\`, \`yedek bilgi\`, \`yedek yükle\`, \`yedek temizle\``
      )
      .addField(
        `:loudspeaker: Linkler :loudspeaker:`,
        `[[DAVET!]](https://discord.com/oauth2/authorize?client_id=775488259966631947&scope=bot&permissions=1342169025)[[DESTEK!]](https://discord.gg/XEVpDNhxM3)[[OY]](https://top.gg/bot/775488259966631947/vote)`
      )
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL);
    message.channel.send(embed);
  } else {
    const embed = new Discord.RichEmbed()
      .setDescription(
        `:shield:Bot Version; **v1.0**, Prefix: **${prefix}**, Language: **${kontrol}**):shield:`
      )
      .addField(
        `:shield:Bot:shield:`,
        `\`help\`, \`language\`, \`bot-info\`, \`settings\`, \`reboot\`, \`prefix\`, \`prefix-reset\`,\`blacklist\`,\`whitelist\``
      )
      .addField(
        `:shield:Security System:shield:`,
        `\`security\`, \`security-reset\`, \`security-add-role\`, \`security-addd-role-reset\`, \`security-remove-role\`, \`security-add-role-reset\`, \`security-fake-role\`, \`security-fake-role-reset\``
      )
      .addField(
        `:shield:Autotag System:shield:`,
        `\`autotag\`, \`autotag-reset\`, \`autotag-name\`, \`autotag-name-reset\``
      )
      .addField(
        `:shield:Role Protection:shield:`,
        `\`role-protection\`, \`role-protection-reset\`, \`role-protection-role\`, \`role-protection-role-reset\`, \`role-limit\`, \`role-limit-reset\``
      )
      .addField(
        `:shield:Channel Protection:shield:`,
        `\`channel-protection\`, \`channel-protection-reset\``
      )
      .addField(
        `:shield:Ban Protection:shield:`,
        `\`ban-protection\`, \`ban-protection-reset\`, \`ban-limit\`, \`ban-limit-role\`, \`ban-limit-reset\`, \`ban-limit-role-reset\``
      )
      .addField(
        `:shield:Backups:shield:`,
        `\`backup\`, \`backup create\`, \`backup delete\`, \`backup info\`, \`backup load\`, \`backup purge\``
      )
      .addField(
        `:loudspeaker: links :loudspeaker:`,
        "[[INVITE!]](https://discord.com/oauth2/authorize?client_id=775488259966631947&scope=bot&permissions=1342169025)  [[SUPPORT!]](https://discord.gg/XEVpDNhxM3)[[VOTE]](https://top.gg/bot/775488259966631947/vote)"
      )
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL);
    message.channel.send(embed);
    return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y", "help", "h"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "yardım",
  usage: "yardım"
};
