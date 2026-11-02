// The survey return URL can be configured when available.
window.BELONG_CONFIG = {
  surveyReturnUrl: '',
  chatApiBaseUrl: ['localhost', '127.0.0.1'].includes(location.hostname)
    ? ''
    : 'https://belong-dei-chat-api.happycharm35.chatgpt.site'
};
