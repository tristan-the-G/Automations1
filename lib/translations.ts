import { en } from '@/app/content/en';
import { de } from '@/app/content/de';

export const getTexts = (language: 'en' | 'de') => {
  return language === 'de' ? de : en;
};