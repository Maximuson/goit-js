/* eslint-disable no-underscore-dangle */
import List from './list';
import themes from './themes';

const App = {
  checkBoxTheme: document.querySelector('.js-switch-input'),
  theme: themes.LIGHT,
  _getTheme() {
    let theme = localStorage.getItem('theme');
    if (!theme) {
      console.log(theme);
      localStorage.setItem('theme', themes.LIGHT);
      theme = themes.LIGHT;
      document.body.classList.add(theme);
      return theme;
    }

    if (theme === themes.DARK) {
      this.checkBoxTheme.checked = true;
    }
    document.body.classList.add(theme);
    return theme;
  },
  _changeTheme() {
    let theme;
    document.body.classList.remove(localStorage.getItem('theme'));
    if (this.checkBoxTheme.checked) {
      localStorage.setItem('theme', themes.DARK);
      theme = themes.DARK;
    } else {
      localStorage.setItem('theme', themes.LIGHT);
      theme = themes.LIGHT;
    }
    document.body.classList.add(theme);
  },

  start() {
    this.checkBoxTheme.addEventListener('click', () => {
      this._changeTheme.call(this);
    });
    this._getTheme();

    List.render(List.menuData);
  },
};

export default App;
