import { $, emitCustomEvent, showSnackBar } from '../utils/common';
import { chargeMoneyTemplate, sectionTemplate } from '../templates/chareMoneyTemplate';
import { validateInputOwnMoney } from '../validates/validates';
import { CoinsType } from '../types';
import { SELECTOR } from '../constants/constants';

export default class ChargeMoneyView {
  $content: HTMLDivElement;

  constructor() {
    this.$content = $(SELECTOR.ID.CONTENT);
  }

  bindEvents() {
    $(SELECTOR.ID.CHARGE_MONEY_FORM).addEventListener(
      'submit',
      this.handleSubmitChargeMoney.bind(this),
    );
  }

  handleSubmitChargeMoney() {
    try {
      const inputMoney: number = $(SELECTOR.CLASS.CHARGE_MONEY_INPUT).valueAsNumber;

      validateInputOwnMoney(inputMoney);

      emitCustomEvent('CHARGE_MONEY', { detail: { inputMoney } });
      showSnackBar('잔돈이 충전되었습니다.');
    } catch (error) {
      alert(error.message);
    }
  }

  render(isLogin, coins: CoinsType, totalMoney: number) {
    this.$content.replaceChildren();
    this.$content.insertAdjacentHTML('beforeend', chargeMoneyTemplate(isLogin, coins, totalMoney));

    if (isLogin) {
      this.bindEvents();
    }
  }

  repaintCoinsTable(coins: CoinsType) {
    $(SELECTOR.CLASS.COIN_TABLE).replaceChildren();
    $(SELECTOR.CLASS.COIN_TABLE).insertAdjacentHTML(
      'beforeend',
      sectionTemplate.coinTableContent(coins),
    );
  }

  clearInput() {
    $(SELECTOR.CLASS.CHARGE_MONEY_INPUT).value = '';
  }
}
