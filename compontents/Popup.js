export default class Popup {
    constructor(popupSelector){
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(popupSelector);
        this._buttonClose = document.querySelector('.popup__close');
        this._handleEscClose = this._handleEscClose.bind(this)
    }

    open() {
        this._popup.classList.add('popup_is-opened');
        document.addEventListener('keydown',this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_is-opened');
        document.removeEventListener('keydown' , this._handleEscClose);
    }

    _handleEscClose(evt){
        if (evt.key === "Escape"){
            this.close();
        }
    }

    _closePopupOverlay (evt) {
        if(evt.target === evt.currentTarget){
            this.close()
        };
    }

    setEventListeners() {
        this._buttonClose.addEventListener('click', () => this.close());
        this._popup.addEventListener("mousedown", (evt) => this._closePopupOverlay(evt));
    }
}