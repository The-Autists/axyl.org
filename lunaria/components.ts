import { html } from '@lunariajs/core';
import { githubGet } from './github-get.mjs';

export const TitleParagraph = () =>
  html`<p>
      If you're interested in helping us translate
      <a href="https://v2.tauri.app/">v2.tauri.app</a> into one of the languages listed below,
      you've come to the right place! This auto-updating page always lists all the content that
      could use your help right now.
    </p>

    <p>
      Read the
      <a href="https://github.com/tauri-apps/tauri-docs/blob/v2/.github/TRANSLATING.md"
        >Translations Guide</a
      >
      for how to translate a document. Before starting a new translation, be sure to check the
      <a href="#needs-review">existing Tauri Docs PRs</a> to see if this page has already been
      translated, and consider reviewing any open PRs in your language!
    </p>`;

interface PullRequest {
  html_url: string;
  title: string;
  labels: {
    name: string;
  }[];
}
interface Options {
  githubRepo: string;
  githubToken: string;
}
async function getPullRequests(options: Options) {
  const pullRequests: PullRequest[] = await githubGet({
    url: `https://api.github.com/repos/${options.githubRepo}/pulls?state=open&per_page=100`,
    githubToken: options.githubToken,
  });

  return pullRequests.filter((pr) => pr.labels.find((label) => label.name === 'i18n'));
}
function renderLink(href: string, text: string, className = ''): string {
  return `<a href="${escape(href)}" class="${escape(
    className
  )}" target="_blank" rel="noopener noreferrer">${escape(text)}</a>`;
}
function renderTranslationNeedsReviewList(prs: PullRequest[]) {
  const lines: string[] = [];

  if (prs.length > 0) {
    lines.push(`<ul>`);
    lines.push(
      ...prs.map((pr) => {
        const title = pr.title.replaceAll('`', '');
        return `<li>` + renderLink(pr.html_url, title) + `</li>`;
      })
    );
    lines.push(`</ul>`);
  }
  lines.push(``);

  return lines.join('\n');
}

export function TranslationNeedsReview() {
  const conf: Options = {
    githubRepo: process.env.GITHUB_REPOSITORY || 'tauri-apps/tauri-docs',
    githubToken: process.env.GITHUB_TOKEN as string,
  };
  let ctx = `<h2 id="needs-review"><a href="#needs-review">Translations that need reviews</a></h2>`;
  getPullRequests(conf).then((data) => {
    let bodyHtml = renderTranslationNeedsReviewList(data);
    ctx += bodyHtml;
  });
  return ctx;
}
