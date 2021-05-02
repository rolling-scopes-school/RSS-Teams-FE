import React, { FC } from 'react';
import { NoteWrapper, NoteList } from './styled';
import { useTranslation } from 'react-i18next';

type NoteBlockProps = {
  title?: string;
  subtitle?: string;
  listItems?: string[];
  isNote?: string;
};

export const NoteBlock: FC<NoteBlockProps> = ({
  title = 'Note',
  subtitle,
  listItems,
  children,
  isNote,
}) => {
  const { t } = useTranslation();
  return (
    <NoteWrapper isNote={isNote && 'Note'}>
      <h4>{t(title)}</h4>
      {subtitle && <p>{t(subtitle)}</p>}
      {listItems && (
        <NoteList>
          {listItems.map((item: string) => (
            <li key={item}>{t(item)}</li>
          ))}
        </NoteList>
      )}
      {children}
    </NoteWrapper>
  );
};
