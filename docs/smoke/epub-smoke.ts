/// <reference path="../../declarations/autojs6/index.d.ts" />

// Run with tsc --noEmit --strictNullChecks --skipLibCheck --target ES2020 --lib ES2020.

let available: boolean = epub.isAvailable();
let book: Internal.Epub.Book = epub.open('/sdcard/Books/moby-dick.epub');
let named: Internal.Epub.Book = epub.open({ path: './books/moby-dick.epub', displayName: 'Moby Dick' });
let sameModule: Internal.Epub = $epub;

let meta: Internal.Epub.Metadata = book.metadata;
let title: string = meta.title;
let authors: string[] = meta.authors;
let coverHref: string | undefined = meta.cover;
let layout: 'reflowable' | 'fixed' = meta.layout;
let toc: Internal.Epub.TocEntry[] = book.toc;
let nested: Internal.Epub.TocEntry[] = toc[0].children;
let order: Internal.Epub.ReadingOrderEntry[] = book.readingOrder;
let mediaType: string = order[0].type;
let positions: number = book.positions;
let path: string = book.path;

let firstResource: string = book.text(0, { maxChars: 500 });
let markdown: string = book.text('OPS/chapter_003.xhtml', { format: 'markdown', offset: 100 });
let byEntry: string = book.text(toc[0]);
let byOrder: string = book.text(order[1], { maxChars: 1000 });
let everything: string = book.text();
let whole: string = book.textAll({ maxChars: 2 * 1024 * 1024, format: 'text' });
let image: ImageWrapper = book.cover();
image.recycle();
let savedCover: string = book.cover('./covers', { overwrite: true });
let exported: string = book.resource('OPS/images/frontispiece.jpg', './out/frontispiece.jpg');
let hits: Internal.Epub.SearchHit[] = book.search('white whale', { limit: 20, offset: 0 });
let hitLocator: Internal.Epub.Locator = hits[0].locator;
let hitTitle: string | undefined = hits[0].title;
let highlight: string = hits[0].text.highlight;
let byLocatorText: string = book.text(hitLocator, { maxChars: 200 });

book.textAsync(1).then((text: string) => console.log(text.length));
book.textAllAsync({ format: 'markdown' }).then((text: string) => console.log(text.length));
book.coverAsync().then((img: ImageWrapper) => img.recycle());
book.coverAsync('./covers/cover.jpg', { overwrite: true }).then((saved: string) => console.log(saved));
book.resourceAsync('OPS/chapter_001.xhtml', './out').then((saved: string) => console.log(saved));
book.searchAsync('whale').then((found: Internal.Epub.SearchHit[]) => console.log(found.length));
book.close();
let closed: boolean = book.isClosed;
let description: string = book.toString();

let quickMeta: Internal.Epub.Metadata = epub.metadata('./books/moby-dick.epub');
let quickToc: Internal.Epub.TocEntry[] = epub.toc({ path: './books/moby-dick.epub' });
let quickOrder: Internal.Epub.ReadingOrderEntry[] = epub.readingOrder('./books/moby-dick.epub');
let quickText: string = epub.text('./books/moby-dick.epub', 0, { maxChars: 100 });
let quickWhole: string = epub.text('./books/moby-dick.epub');
let quickCover: ImageWrapper = epub.cover('./books/moby-dick.epub');
let quickCoverPath: string = epub.cover('./books/moby-dick.epub', './covers', { overwrite: false });
let quickHits: Internal.Epub.SearchHit[] = epub.search('./books/moby-dick.epub', 'whale');
epub.openAsync('./books/moby-dick.epub').then((opened: Internal.Epub.Book) => opened.close());
epub.metadataAsync('./books/moby-dick.epub').then((m: Internal.Epub.Metadata) => console.log(m.title));
epub.tocAsync('./books/moby-dick.epub').then((entries: Internal.Epub.TocEntry[]) => console.log(entries.length));
epub.readingOrderAsync('./books/moby-dick.epub').then((entries: Internal.Epub.ReadingOrderEntry[]) => console.log(entries.length));
epub.textAsync('./books/moby-dick.epub', null, { maxChars: 100 }).then((text: string) => console.log(text));
epub.coverAsync('./books/moby-dick.epub').then((img: ImageWrapper) => img.recycle());
epub.coverAsync('./books/moby-dick.epub', './covers').then((saved: string) => console.log(saved));
epub.searchAsync('./books/moby-dick.epub', 'whale', { limit: 5 }).then((found: Internal.Epub.SearchHit[]) => console.log(found.length));
epub.isAvailableAsync().then((ok: boolean) => console.log(ok));

let session: Internal.Epub.ReaderSession = epub.read('./books/moby-dick.epub', {
    href: 'OPS/chapter_003.xhtml',
    preferences: { theme: 'sepia', fontSize: 1.2, lineHeight: 1.5, publisherStyles: false, fontFamily: null },
});
let byProgression: Internal.Epub.ReaderSession = epub.read('./books/moby-dick.epub', { progression: 0.5 });
let byLocator: Internal.Epub.ReaderSession = epub.read({ path: './books/moby-dick.epub' }, { locator: hitLocator });
let state: Internal.Epub.SessionState = session.state;
let pending: boolean = !session.isOpen && !session.isClosed;
let sessionProgress: number = session.progress;
let sessionLocator: Internal.Epub.Locator | null = session.locator;
let sessionTitle: string | null = session.title;
let chapterTitle: string | null = session.chapterTitle;
let sessionHref: string | null = session.href;
let sessionPositions: number = session.positions;
let reason: Internal.Epub.CloseReason | null = session.reason;

session
    .on('open', (e: Internal.Epub.OpenEvent) => console.log(e.href, e.positions, e.title))
    .on('progress', (e: Internal.Epub.ProgressEvent) => console.log(e.totalProgression, e.chapterTitle, e.locator?.locations?.position))
    .on('bookmark', (e: Internal.Epub.BookmarkEvent) => console.log(e.action, e.locator?.href, e.createdAt))
    .on('error', (e: Internal.Epub.EpubError) => console.warn(e.code, e.message))
    .once('close', (e: Internal.Epub.CloseEvent) => console.log(e.reason));

session.goTo('OPS/chapter_004.xhtml').goTo(0.25).goTo({ href: 'OPS/chapter_004.xhtml', type: 'application/xhtml+xml', locations: { progression: 0.5 } });
session.next().prev().nextChapter().prevChapter();
session.setPreferences({ scroll: true, columnCount: '1', textAlign: 'justify', hyphens: true, verticalText: false, pageMargins: 1.5 });
let bookmarks: Internal.Epub.Bookmark[] = session.bookmarks();
let createdAt: number = bookmarks[0].createdAt;
let excerpt: string | undefined = bookmarks[0].text;
let annotations: Internal.Epub.Annotation[] = book.annotations();
let quote: string | undefined = annotations[0].quote;
let style: Internal.Epub.AnnotationStyle = annotations[0].style;
let updatedAt: number = annotations[0].updatedAt;
let withNotes: Internal.Epub.Annotation[] = annotations.filter((a: Internal.Epub.Annotation) => a.note !== undefined);
book.annotationsAsync().then((list: Internal.Epub.Annotation[]) => console.log(list.length));
let quick: Internal.Epub.Annotation[] = epub.annotations({ path: './books/moby-dick.epub' });
epub.annotationsAsync('./books/moby-dick.epub').then((list: Internal.Epub.Annotation[]) => session.goTo(list[0].locator));
session.on('highlight', (e: Internal.Epub.HighlightEvent) => console.log(e.action, e.id, e.style, e.color, e.quote, e.note, e.locator?.href));
let sessionDescription: string = session.toString();
session.close();
session.close({ finish: true });
epub.readAsync('./books/moby-dick.epub').then((s: Internal.Epub.ReaderSession) => s.close());

try {
    epub.open('./books/missing.epub');
} catch (e) {
    if (e instanceof epub.EpubError) {
        let name: 'EpubError' = e.name;
        let code: Internal.Epub.ErrorCode | string = e.code;
        console.log(name, code, e.toString());
    }
}
let custom: Internal.Epub.EpubError = new epub.EpubError('boom', 'INTERNAL');

// @ts-expect-error path is required.
epub.open({ displayName: 'Moby Dick' });
// @ts-expect-error The text format is text or markdown.
book.text(0, { format: 'html' });
// @ts-expect-error The theme is light, sepia or dark.
session.setPreferences({ theme: 'neon' });
// @ts-expect-error goTo needs a target.
session.goTo();
// @ts-expect-error The column count is auto, 1 or 2.
session.setPreferences({ columnCount: 3 });
// @ts-expect-error annotations takes no arguments (the list is read-only and unfiltered).
book.annotations({ withNotes: true });
// @ts-expect-error finish is a boolean.
session.close({ finish: 'yes' });
// @ts-expect-error A locator needs an href.
session.goTo({ type: 'application/xhtml+xml' });
