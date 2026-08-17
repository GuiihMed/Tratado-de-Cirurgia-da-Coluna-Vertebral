document.querySelectorAll('.row-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const row = button.closest('.outline-row');
    const open = row.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(open));
  });
});
