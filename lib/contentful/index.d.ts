import { Entry as BaseEntry, EntryCollection as BaseEntryCollection } from 'contentful';

declare type Entry<T> = BaseEntry<T>;
declare type EntryCollection<T> = BaseEntryCollection<T>;

declare const getEntryCollection = async <T extends Entry, Q = Entry>(
    contentType: string,
    query?: Q,
): Promise<EntryCollection<T>> => await client.getEntries<T>({ content_type: contentType, include: 10, ...query });

declare const getEntry = async <T extends Entry>(id: string, contentType: string): Promise<Entry<T>> =>
    await client.getEntry<T>(id, { content_type: contentType, include: 10 });
