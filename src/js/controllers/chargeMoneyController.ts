import ChargeMoneyView from '../views/chargeMoneyView';
import VendingMachine from '../vendingMachine/vendingMachine';
import { MoneyDetailType } from '../types';
import { Controller } from '../types/interface';
import { onCustomEvent } from '../utils/common';

export default class ChargeMoneyController implements Controller {
  private vendingMachine: VendingMachine;
  private chargeMoneyView: ChargeMoneyView;

  constructor(vendingMachine: VendingMachine) {
    this.vendingMachine = vendingMachine;
    this.chargeMoneyView = new ChargeMoneyView();

    this.bindEvents();
  }

  bindEvents() {
    onCustomEvent('CHARGE_MONEY', this.handleChargeMoney.bind(this));
  }

  handleChargeMoney(event: CustomEvent) {
    const { inputMoney }: MoneyDetailType = event.detail;
    const isLogin = sessionStorage.getItem('isLogIn') === 'true' ? true : false;

    this.vendingMachine.chargeOwnMoney(inputMoney);

    this.chargeMoneyView.repaintCoinsTable(this.vendingMachine.getCoins());

    this.loadPage(isLogin);
  }

  loadPage(isLogin) {
    const coins = this.vendingMachine.getCoins();
    const totalMoney = this.vendingMachine.getCurrentOwnMoney();

    this.chargeMoneyView.render(isLogin, coins, totalMoney);
  }
}
