import { IPage, IPageFields } from '~/@types/generated/contentful';
import { getEntryCollection } from './index';

export const resolveBySlug = async (slug: string): Promise<IPage> => {
    const entries = await getEntryCollection<IPageFields>('page', {
        limit: 1,
        'fields.slug': slug,
    });

    if (entries.items.length === 0) {
        throw new Error(`Page not found ${slug}`);
    }

    return entries.items[0] as IPage;
};
