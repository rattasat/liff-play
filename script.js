liff.ready.then(() => {
  document.getElementById('result-liff-ready').innerHTML = 'ready';
});

liff
  .init({
    liffId: 'YOUR LIFF ID'
  })
  .then(() => {
    document.getElementById('result-liff-init').innerHTML = 'success';
  })
  .catch((err) => {
    document.getElementById('result-liff-init').innerHTML = `fail: ${err}`;
  });


document.getElementById('result-liff-get-os').innerHTML = liff.getOS();
document.getElementById('result-liff-get-language').innerHTML = liff.getLanguage();
document.getElementById('result-liff-get-version').innerHTML = liff.getVersion();
document.getElementById('result-liff-get-line-version').innerHTML = liff.getLineVersion() == null ? 'null (external browser)' : liff.getLineVersion();
document.getElementById('result-liff-is-in-client').innerHTML = liff.isInClient();

function onClickCloseWindow() {
  liff.closeWindow();
}
