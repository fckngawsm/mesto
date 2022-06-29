export default class UserInfo{
    constructor({selectorName , selectorInfo}){
        this._name = document.querySelector(selectorName);
        this._info = document.querySelector(selectorInfo);
    }

    getUserInfo(){
        const data = {
            name: this._name.textContent,
            info: this._info.textContent
        };
        return data;
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._info.textContent = data.info;
    }
}