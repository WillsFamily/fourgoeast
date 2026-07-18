(function () {
  function initPostcardForm(form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var button = form.querySelector('button[type="submit"]');
      var originalText = button.textContent;
      button.disabled = true;
      button.textContent = 'Sending…';
      fetch(form.action, {
        method: form.method || 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          button.textContent = '✓ on its way';
          form.reset();
        } else {
          button.textContent = 'Something went wrong — try again';
          button.disabled = false;
        }
      }).catch(function () {
        button.textContent = 'Something went wrong — try again';
        button.disabled = false;
      });
    });
  }

  document.querySelectorAll('.postcard form').forEach(initPostcardForm);
})();
