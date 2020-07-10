module.exports = {
  config: {
    name: "종료",
    description: "꿀꿀봇 종료시키는 버튼",
    use: "ㄲ 종료",
    category: "ADMIN",
    accessableby: "Bot Owner",
    aliases: ["botstop"]
  },
  run: async (bot, message, args) => {
    if (!client.devs.includes(msg.author.id))
      return message.channel.send("봇 관리자가 아닙니다!");

    try {
      await message.channel.send("봇 종료중...");
      process.exit();
    } catch (e) {
      message.channel.send(`ERROR: ${e.message}`);
    }
  }
};
