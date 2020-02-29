const fs = require('fs');
const avatarInfo = require('./collaboratorInfo.js');
avatarMarkup = []
avatarInfo.forEach(avatar => {
  avatarMarkup.push(`[<img src="${avatar.avatar_url}" width = "100" />](${avatar.html_url}) `)
})

fs.writeFileSync('avatars.md', avatarMarkup.join("\n"));