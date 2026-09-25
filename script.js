(() => {
  const form = document.getElementById('enquiry-form');
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = 'Business enquiry — ' + (data.get('business') || 'Blue Earth Media website');
    const body = [
      'Name: ' + (data.get('name') || ''),
      'Business Name: ' + (data.get('business') || ''),
      'Business Email: ' + (data.get('email') || ''),
      'Website: ' + (data.get('website') || ''),
      'Service Required: ' + (data.get('service') || ''),
      '',
      'Message:',
      data.get('message') || ''
    ].join('\n');
    window.location.href = 'mailto:contact@blueearthe.media?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
})();