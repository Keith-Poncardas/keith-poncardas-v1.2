
document.addEventListener('DOMContentLoaded', () => {
  const avatarMain = document.getElementById("avatarMain");
  const avatarSub = document.getElementById("avatarSub");

  // Change the avatar image in this variable
  const avatarImgName = 'keith.jpg';

  const buildPath = `./assets/media/img/${avatarImgName}`

  avatarMain.setAttribute('src', buildPath);
  avatarSub.setAttribute('src', buildPath);
});
