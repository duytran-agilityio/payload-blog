import { Article } from '@/payload-types';
import { convertLexicalToPlaintext } from '@payloadcms/richtext-lexical/plaintext';
import { FieldHook } from 'payload';

const MAX_CONTENT_SUMMARY_LENGTH = 160;
export const generateContentSummaryHook: FieldHook<Article, string> = ({
  value,
  data,
}) => {
  if (value) return value.trim();
  if (!data?.content) return '';
  const content = convertLexicalToPlaintext({ data: data?.content }).trim();
  if (!content) return '';
  return content.length > MAX_CONTENT_SUMMARY_LENGTH
    ? content.slice(0, MAX_CONTENT_SUMMARY_LENGTH - 3) + '...'
    : content;
};
