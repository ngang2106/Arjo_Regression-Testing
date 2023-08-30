(() => {
  const hideCookieBot = () => {
    if (window.Cookiebot) {
      Cookiebot.hide();
    }
  };

  window.addEventListener('CookiebotOnDialogDisplay', () => {
    hideCookieBot();
  });

  hideCookieBot();
})();
