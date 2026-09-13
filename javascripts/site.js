// This is where it all goes :)

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.formspree-contact-form').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          form.closest('.contact-form-wrapper').innerHTML =
            '<p class="thank-you">Thanks for reaching out &mdash; I\'ll get back to you soon.</p>';

          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: 'contact_form_submitted' });
        } else {
          alert('Oops, there was a problem submitting your form.');
        }
      }).catch(function () {
        alert('Oops, there was a problem submitting your form.');
      });
    });
  });
});
