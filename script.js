document.getElementById('result-liff-init').innerHTML = 'loading...';
document.getElementById('result-liff-ready').innerHTML = 'loading...';
document.getElementById('result-liff-get-os').innerHTML = liff.getOS();
document.getElementById('result-liff-get-language').innerHTML = liff.getLanguage();
document.getElementById('result-liff-get-version').innerHTML = liff.getVersion();
document.getElementById('result-liff-get-line-version').innerHTML = liff.getLineVersion() == null ? 'null (external browser)' : liff.getLineVersion();
document.getElementById('result-liff-is-in-client').innerHTML = liff.isInClient();

liff
  .init({
    liffId: '1655282255-NyVZMY3z'
  })
  .then(() => {
    document.getElementById('result-liff-init').innerHTML = 'success';
  })
  .catch((err) => {
    document.getElementById('result-liff-init').innerHTML = `fail: ${err}`;
    document.getElementById('result-liff-ready').innerHTML = 'liff fail to init';
  });

liff.ready.then(() => {
  document.getElementById('result-liff-ready').innerHTML = 'ready';

  document.getElementById('result-liff-is-logged-in').innerHTML = liff.isLoggedIn();
  document.getElementById('result-liff-is-api-available-1').innerHTML = liff.isApiAvailable('shareTargetPicker');
  document.getElementById('result-liff-is-api-available-2').innerHTML = liff.isApiAvailable('multipleLiffTransition');
  document.getElementById('result-liff-get-access-token').innerHTML = liff.getAccessToken() == null ? 'null (login first)' : liff.getAccessToken();
  document.getElementById('result-liff-get-id-token').innerHTML = liff.getIDToken() == null ? 'null (login first)' : liff.getIDToken();
  document.getElementById('result-liff-get-decode-id-token').innerHTML = liff.getDecodedIDToken() == null ? 'null (login first)' : JSON.stringify(liff.getDecodedIDToken(), null, 2);
  document.getElementById('result-liff-get-context').innerHTML = JSON.stringify(liff.getContext(), null, 2);

  liff.getProfile()
    .then((data) => {
      document.getElementById('result-liff-get-profile').innerHTML = JSON.stringify(data, null, 2);
    }).catch((error) => {
      document.getElementById('result-liff-get-profile').innerHTML = `fail: ${error}`;
    });
  liff.getFriendship()
    .then((data) => {
      document.getElementById('result-liff-get-friendship').innerHTML = JSON.stringify(data, null, 2);
    }).catch((error) => {
      document.getElementById('result-liff-get-friendship').innerHTML = `fail: ${error}`;
    });
});


function onClickCloseWindow() {
  liff.closeWindow();
}
function onClickScanCode() {
  liff.scanCodeV2().then((data) => {
    document.getElementById('result-liff-scan-code').innerHTML = JSON.stringify(data, null, 2);
  });
}
