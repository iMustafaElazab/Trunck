import {Linking} from 'react-native';
import {Toast} from 'react-native-toast-notifications';
import {translate} from '@src/core';

const getLogMessage = (message: string) => `## LinkingUtils:: ${message}`;

const appendEmail = (emailLink: string, email?: string) => {
  let appendedLink = `${emailLink}`;

  if (email && email.length) {
    appendedLink += email;
  }

  return appendedLink;
};

const appendEmailSubjectBody = (
  emailLink: string,
  subject?: string,
  body?: string,
) => {
  let appendedLink = `${emailLink}`;

  if ((subject && subject.length) || (body && body.length)) {
    appendedLink += '?';

    if (subject && subject.length) {
      appendedLink += `subject=${subject}`;
    }

    if (body && body.length) {
      if (subject && subject.length) {
        appendedLink += '&';
      }

      appendedLink += `body=${body}`;
    }
  }

  return appendedLink;
};

const open = async (url: string, errorMessageKey?: string) => {
  console.info(getLogMessage('open'), url);

  try {
    await Linking.openURL(url);
  } catch (error) {
    console.warn(getLogMessage(`Failed to open: ${url}`), error);

    Toast.show(
      translate(errorMessageKey ? errorMessageKey : 'error_processing_request'),
      {type: 'danger'},
    );
  }
};

export const openUrl = (url?: string, errorMessageKey?: string) => {
  console.info(getLogMessage('openUrl'), url);

  if (url && url.length) {
    open(url, errorMessageKey ?? 'error_open_url');
  }
};

export const openEmail = (
  email?: string,
  subject?: string,
  body?: string,
  errorMessageKey?: string,
) => {
  console.info(getLogMessage('openEmail'), email, subject, body);

  if (
    (email && email.length) ||
    (subject && subject.length) ||
    (body && body.length)
  ) {
    let emailLink = 'mailto:';
    emailLink = appendEmail(emailLink, email);
    emailLink = appendEmailSubjectBody(emailLink, subject, body);
    console.info(getLogMessage('emailLink'), emailLink);
    open(emailLink, errorMessageKey ?? 'error_open_mail');
  }
};

export const openPhone = (phone?: string, errorMessageKey?: string) => {
  console.info(getLogMessage('openPhone'), phone);

  if (phone && phone.length) {
    open(`tel:${phone}`, errorMessageKey ?? 'error_open_phone');
  }
};

export const openWhatsApp = (number?: string, errorMessageKey?: string) => {
  console.info(getLogMessage('openWhatsApp'), number);

  if (number && number.length) {
    open(
      `whatsapp://send?phone=${number}`,
      errorMessageKey ?? 'error_open_whats_app',
    );
  }
};
