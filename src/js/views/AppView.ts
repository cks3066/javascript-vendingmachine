import { $, $$ } from '../utils/common';

const template = `
<h1>🍿 자판기 🍿</h1>
<div class="nav-container">
  <button id="item-manage-tab" class="nav-button nav-button-clicked">상품 관리</button>
  <button id="money-charge-tab" class="nav-button">잔돈 충전</button>
  <button id="item-purchase-tab" class="nav-button">상품 구매</button>
</div>
<div id="content"></div>

`;

export default class AppView {
  $navContainer: HTMLElement;
  $app: HTMLElement;

  constructor() {
    this.$app = $('#app');
  }

  bindEvents() {
    $('.nav-container').addEventListener('click', event => {
      const { target } = event;
      this.customEvent(target);
      this.changeButtonColor(target);
    });
  }

  customEvent(target) {
    window.dispatchEvent(new CustomEvent('ROUTE_CHANGE', { detail: target }));
  }

  bindPostStateEvent(callback) {
    window.addEventListener('popstate', callback);
  }

  render() {
    this.$app.insertAdjacentHTML('beforeend', template);
  }

  changeButtonColor(clickedButton) {
    const navButtons = $$('.nav-button');
    navButtons.forEach(navButton =>
      navButton === clickedButton
        ? navButton.classList.add('nav-button-clicked')
        : navButton.classList.remove('nav-button-clicked'),
    );
  }
}