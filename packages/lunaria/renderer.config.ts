import { defineRendererConfig } from '@lunariajs/core';

const htmlStr = `<p>
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

export default defineRendererConfig({
  slots: {
    afterTitle: (config) => htmlStr,
  },
});
