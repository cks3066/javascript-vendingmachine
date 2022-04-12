import LogInView from '../views/logInView';
import { emitCustomEvent, onCustomEvent, showSnackBar } from '../utils/common';
import { Controller } from '../types/interface';
import { SNACK_BAR_MESSAGE } from '../constants/constants';

export default class LogInController implements Controller {
  private logInView: LogInView;

  constructor() {
    this.logInView = new LogInView();

    this.bindEvents();
  }

  public bindEvents() {
    onCustomEvent('LOG_IN', this.handleLogIn.bind(this));
  }

  private handleLogIn(event: CustomEvent) {
    const { email, password, targetId } = event.detail;
    const data = JSON.stringify({
      email,
      password,
    });

    fetch('https://json-vendingmachine-server.herokuapp.com/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: data,
    })
      .then(res => {
        return res.json();
      })
      .then(result => {
        const { accessToken, user } = result;
        if (!accessToken) {
          throw new Error(result);
        }
        sessionStorage.setItem('jwt-token', accessToken);
        sessionStorage.setItem('isLogIn', 'true');
        sessionStorage.setItem('user', JSON.stringify(user));

        emitCustomEvent('ROUTE_CHANGE', { detail: { targetId } });
        showSnackBar(SNACK_BAR_MESSAGE.LOGIN_SUCCESS);
      })
      .catch(error => alert(error.message));
  }

  public loadPage(isLogin) {
    this.logInView.render(isLogin);
  }
}
