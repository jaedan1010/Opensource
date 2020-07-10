exports.run = async (client, msg, args, prefix) => {
  var user = msg.mentions.users.first();
  if (!user) {
    msg.reply("차단하시기 전에 맨션을 먼저 해주세요!");
  } else {
    var member = msg.guild.member(user);
    if (member) {
      member
        .ban(`${msg.author.username}님의 의해 서버에서 밴됨.`)
        .then(member => {
          msg.reply(`성공적으로 ${member.user.tag}님을 밴하였습니다.`);
        })
        .catch(msg.reply("해당 유저를 차단 할 권한이 없습니다."));
    } else {
      msg.reply("이 서버에 존재하지 않은 유저입니다!");
    }
  }
};

exports.config = {
  name: "밴",
  aliases: ["벤"],
  category: ["MODERATOR"],
  des: ["유저를 해당 서버에서 차단 시킵니다."],
  use: ["ㄲ 밴 <유저 맨션>"]
};
