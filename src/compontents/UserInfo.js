export default class UserInfo {
  constructor({ selectorName, selectorInfo, selectorAvatar }) {
    this._name = document.querySelector(selectorName);
    this._about = document.querySelector(selectorInfo);
    this._avatar = document.querySelector(selectorAvatar);
  }

  getUserInfo() {
    const data = {
      name: this._name.textContent,
      about: this._about.textContent,
    };
    return data;
  }

  setUserAvatar(url) {
    this._avatar.src = url.avatar;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
  }
}
