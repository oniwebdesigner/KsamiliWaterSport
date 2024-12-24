import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Kjo zakonisht përputhet me segmentin `[locale]`
  let locale = await requestLocale;

  // Sigurohu që gjuha është e vlefshme
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../app/messages/${locale}.json`)).default
  };
});
