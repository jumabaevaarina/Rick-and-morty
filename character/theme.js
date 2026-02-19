function applyTheme() {
  const mode = localStorage.getItem('mode');

  if (mode === 'escuroMode') {
    document.body.classList.remove('claro');
  } else {
    document.body.classList.add('claro');
  }
}

applyTheme();