// Solicitar permiso para mostrar notificaciones
if (Notification.permission !== 'granted') {
    Notification.requestPermission();
  }
  
  // Crear notificación de términos y condiciones
  const notification = new Notification('Leer términos y condiciones', {
    body: 'Por favor, lea los términos y condiciones antes de continuar',
    icon: 'https://example.com/notification-icon.png',
    tag: 'terms-and-conditions',
    data: {
      url: 'https://example.com/terms-and-conditions',
    },
    actions: [{
      action: 'open-terms',
      title: 'Leer términos y condiciones',
    }]
  });
  
  // Abrir el modal de los términos al hacer clic en el botón de la notificación
  notification.addEventListener('click', function() {
    window.location.href = notification.data.url;
  });
  
  // Mostrar notificación
  notification.show();