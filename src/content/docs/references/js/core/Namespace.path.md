---
title: 'path'
editUrl: false
prev: false
next: false
---

The path module provides utilities for working with file and directory paths.

This package is also accessible with `window.__TAURI__.path` when [`app.withGlobalTauri`](https://tauri.app/v1/api/config/#appconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

It is recommended to allowlist only the APIs you use for optimal bundle size and security.

## Enumerations

### BaseDirectory

#### Since

2.0.0

#### Enumeration Members

##### AppCache

```ts
AppCache: 16;
```

**Source**: [path.ts:35](undefined)

---

##### AppConfig

```ts
AppConfig: 13;
```

**Source**: [path.ts:32](undefined)

---

##### AppData

```ts
AppData: 14;
```

**Source**: [path.ts:33](undefined)

---

##### AppLocalData

```ts
AppLocalData: 15;
```

**Source**: [path.ts:34](undefined)

---

##### AppLog

```ts
AppLog: 17;
```

**Source**: [path.ts:36](undefined)

---

##### Audio

```ts
Audio: 1;
```

**Source**: [path.ts:20](undefined)

---

##### Cache

```ts
Cache: 2;
```

**Source**: [path.ts:21](undefined)

---

##### Config

```ts
Config: 3;
```

**Source**: [path.ts:22](undefined)

---

##### Data

```ts
Data: 4;
```

**Source**: [path.ts:23](undefined)

---

##### Desktop

```ts
Desktop: 18;
```

**Source**: [path.ts:38](undefined)

---

##### Document

```ts
Document: 6;
```

**Source**: [path.ts:25](undefined)

---

##### Download

```ts
Download: 7;
```

**Source**: [path.ts:26](undefined)

---

##### Executable

```ts
Executable: 19;
```

**Source**: [path.ts:39](undefined)

---

##### Font

```ts
Font: 20;
```

**Source**: [path.ts:40](undefined)

---

##### Home

```ts
Home: 21;
```

**Source**: [path.ts:41](undefined)

---

##### LocalData

```ts
LocalData: 5;
```

**Source**: [path.ts:24](undefined)

---

##### Picture

```ts
Picture: 8;
```

**Source**: [path.ts:27](undefined)

---

##### Public

```ts
Public: 9;
```

**Source**: [path.ts:28](undefined)

---

##### Resource

```ts
Resource: 11;
```

**Source**: [path.ts:30](undefined)

---

##### Runtime

```ts
Runtime: 22;
```

**Source**: [path.ts:42](undefined)

---

##### Temp

```ts
Temp: 12;
```

**Source**: [path.ts:31](undefined)

---

##### Template

```ts
Template: 23;
```

**Source**: [path.ts:43](undefined)

---

##### Video

```ts
Video: 10;
```

**Source**: [path.ts:29](undefined)

## Functions

### appCacheDir()

```ts
appCacheDir(): Promise< string >
```

Returns the path to the suggested directory for your app's cache files.
Resolves to `${cacheDir}/${bundleIdentifier}`, where `bundleIdentifier` is the value [`tauri.bundle.identifier`](https://tauri.app/v1/api/config/#bundleconfig.identifier) is configured in `tauri.conf.json`.

#### Example

```typescript
import { appCacheDir } from '@tauri-apps/api/path';
const appCacheDirPath = await appCacheDir();
```

#### Since

1.2.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:108](undefined)

---

### appConfigDir()

```ts
appConfigDir(): Promise< string >
```

Returns the path to the suggested directory for your app's config files.
Resolves to `${configDir}/${bundleIdentifier}`, where `bundleIdentifier` is the value [`tauri.bundle.identifier`](https://tauri.app/v1/api/config/#bundleconfig.identifier) is configured in `tauri.conf.json`.

#### Example

```typescript
import { appConfigDir } from '@tauri-apps/api/path';
const appConfigDirPath = await appConfigDir();
```

#### Since

1.2.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:57](undefined)

---

### appDataDir()

```ts
appDataDir(): Promise< string >
```

Returns the path to the suggested directory for your app's data files.
Resolves to `${dataDir}/${bundleIdentifier}`, where `bundleIdentifier` is the value [`tauri.bundle.identifier`](https://tauri.app/v1/api/config/#bundleconfig.identifier) is configured in `tauri.conf.json`.

#### Example

```typescript
import { appDataDir } from '@tauri-apps/api/path';
const appDataDirPath = await appDataDir();
```

#### Since

1.2.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:74](undefined)

---

### appLocalDataDir()

```ts
appLocalDataDir(): Promise< string >
```

Returns the path to the suggested directory for your app's local data files.
Resolves to `${localDataDir}/${bundleIdentifier}`, where `bundleIdentifier` is the value [`tauri.bundle.identifier`](https://tauri.app/v1/api/config/#bundleconfig.identifier) is configured in `tauri.conf.json`.

#### Example

```typescript
import { appLocalDataDir } from '@tauri-apps/api/path';
const appLocalDataDirPath = await appLocalDataDir();
```

#### Since

1.2.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:91](undefined)

---

### appLogDir()

```ts
appLogDir(): Promise< string >
```

Returns the path to the suggested directory for your app's log files.

#### Platform-specific

- **Linux:** Resolves to `${configDir}/${bundleIdentifier}/logs`.
- **macOS:** Resolves to `${homeDir}/Library/Logs/{bundleIdentifier}`
- **Windows:** Resolves to `${configDir}/${bundleIdentifier}/logs`.

#### Example

```typescript
import { appLogDir } from '@tauri-apps/api/path';
const appLogDirPath = await appLogDir();
```

#### Since

1.2.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:520](undefined)

---

### audioDir()

```ts
audioDir(): Promise< string >
```

Returns the path to the user's audio directory.

#### Platform-specific

- **Linux:** Resolves to [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_MUSIC_DIR`.
- **macOS:** Resolves to `$HOME/Music`.
- **Windows:** Resolves to `{FOLDERID_Music}`.

#### Example

```typescript
import { audioDir } from '@tauri-apps/api/path';
const audioDirPath = await audioDir();
```

#### Since

1.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:130](undefined)

---

### basename()

```ts
basename(path, ext?): Promise< string >
```

Returns the last portion of a `path`. Trailing directory separators are ignored.

#### Example

```typescript
import { basename, resolveResource } from '@tauri-apps/api/path';
const resourcePath = await resolveResource('app.conf');
const base = await basename(resourcePath);
assert(base === 'app.conf');
```

#### Since

1.0.0

#### Parameters

| Parameter | Type     | Description                                                      |
| :-------- | :------- | :--------------------------------------------------------------- |
| `path`    | `string` | -                                                                |
| `ext`?    | `string` | An optional file extension to be removed from the returned path. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:653](undefined)

---

### cacheDir()

```ts
cacheDir(): Promise< string >
```

Returns the path to the user's cache directory.

#### Platform-specific

- **Linux:** Resolves to `$XDG_CACHE_HOME` or `$HOME/.cache`.
- **macOS:** Resolves to `$HOME/Library/Caches`.
- **Windows:** Resolves to `{FOLDERID_LocalAppData}`.

#### Example

```typescript
import { cacheDir } from '@tauri-apps/api/path';
const cacheDirPath = await cacheDir();
```

#### Since

1.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:152](undefined)

---

### configDir()

```ts
configDir(): Promise< string >
```

Returns the path to the user's config directory.

#### Platform-specific

- **Linux:** Resolves to `$XDG_CONFIG_HOME` or `$HOME/.config`.
- **macOS:** Resolves to `$HOME/Library/Application Support`.
- **Windows:** Resolves to `{FOLDERID_RoamingAppData}`.

#### Example

```typescript
import { configDir } from '@tauri-apps/api/path';
const configDirPath = await configDir();
```

#### Since

1.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:174](undefined)

---

### dataDir()

```ts
dataDir(): Promise< string >
```

Returns the path to the user's data directory.

#### Platform-specific

- **Linux:** Resolves to `$XDG_DATA_HOME` or `$HOME/.local/share`.
- **macOS:** Resolves to `$HOME/Library/Application Support`.
- **Windows:** Resolves to `{FOLDERID_RoamingAppData}`.

#### Example

```typescript
import { dataDir } from '@tauri-apps/api/path';
const dataDirPath = await dataDir();
```

#### Since

1.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:196](undefined)

---

### delimiter()

```ts
delimiter(): string
```

Returns the platform-specific path segment delimiter:

- `;` on Windows
- `:` on POSIX

#### Since

2.0.0

#### Returns

`string`

**Source**: [path.ts:560](undefined)

---

### desktopDir()

```ts
desktopDir(): Promise< string >
```

Returns the path to the user's desktop directory.

#### Platform-specific

- **Linux:** Resolves to [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_DESKTOP_DIR`.
- **macOS:** Resolves to `$HOME/Desktop`.
- **Windows:** Resolves to `{FOLDERID_Desktop}`.

#### Example

```typescript
import { desktopDir } from '@tauri-apps/api/path';
const desktopPath = await desktopDir();
```

#### Since

1.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:218](undefined)

---

### dirname()

```ts
dirname(path): Promise< string >
```

Returns the directory name of a `path`. Trailing directory separators are ignored.

#### Example

```typescript
import { dirname, appDataDir } from '@tauri-apps/api/path';
const appDataDirPath = await appDataDir();
const dir = await dirname(appDataDirPath);
```

#### Since

1.0.0

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `path`    | `string` |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:619](undefined)

---

### documentDir()

```ts
documentDir(): Promise< string >
```

Returns the path to the user's document directory.

#### Example

```typescript
import { documentDir } from '@tauri-apps/api/path';
const documentDirPath = await documentDir();
```

#### Platform-specific

- **Linux:** Resolves to [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_DOCUMENTS_DIR`.
- **macOS:** Resolves to `$HOME/Documents`.
- **Windows:** Resolves to `{FOLDERID_Documents}`.

#### Since

1.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:240](undefined)

---

### downloadDir()

```ts
downloadDir(): Promise< string >
```

Returns the path to the user's download directory.

#### Platform-specific

- **Linux**: Resolves to [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_DOWNLOAD_DIR`.
- **macOS**: Resolves to `$HOME/Downloads`.
- **Windows**: Resolves to `{FOLDERID_Downloads}`.

#### Example

```typescript
import { downloadDir } from '@tauri-apps/api/path';
const downloadDirPath = await downloadDir();
```

#### Since

1.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:262](undefined)

---

### executableDir()

```ts
executableDir(): Promise< string >
```

Returns the path to the user's executable directory.

#### Platform-specific

- **Linux:** Resolves to `$XDG_BIN_HOME/../bin` or `$XDG_DATA_HOME/../bin` or `$HOME/.local/bin`.
- **macOS:** Not supported.
- **Windows:** Not supported.

#### Example

```typescript
import { executableDir } from '@tauri-apps/api/path';
const executableDirPath = await executableDir();
```

#### Since

1.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:284](undefined)

---

### extname()

```ts
extname(path): Promise< string >
```

Returns the extension of the `path`.

#### Example

```typescript
import { extname, resolveResource } from '@tauri-apps/api/path';
const resourcePath = await resolveResource('app.conf');
const ext = await extname(resourcePath);
assert(ext === 'conf');
```

#### Since

1.0.0

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `path`    | `string` |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:635](undefined)

---

### fontDir()

```ts
fontDir(): Promise< string >
```

Returns the path to the user's font directory.

#### Platform-specific

- **Linux:** Resolves to `$XDG_DATA_HOME/fonts` or `$HOME/.local/share/fonts`.
- **macOS:** Resolves to `$HOME/Library/Fonts`.
- **Windows:** Not supported.

#### Example

```typescript
import { fontDir } from '@tauri-apps/api/path';
const fontDirPath = await fontDir();
```

#### Since

1.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:306](undefined)

---

### homeDir()

```ts
homeDir(): Promise< string >
```

Returns the path to the user's home directory.

#### Platform-specific

- **Linux:** Resolves to `$HOME`.
- **macOS:** Resolves to `$HOME`.
- **Windows:** Resolves to `{FOLDERID_Profile}`.

#### Example

```typescript
import { homeDir } from '@tauri-apps/api/path';
const homeDirPath = await homeDir();
```

#### Since

1.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:328](undefined)

---

### isAbsolute()

```ts
isAbsolute(path): Promise< boolean >
```

Returns whether the path is absolute or not.

#### Example

```typescript
import { isAbsolute } from '@tauri-apps/api/path';
assert(await isAbsolute('/home/tauri'));
```

#### Since

1.0.0

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `path`    | `string` |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `boolean` \>

**Source**: [path.ts:667](undefined)

---

### join()

```ts
join(...paths): Promise< string >
```

Joins all given `path` segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.

#### Example

```typescript
import { join, appDataDir } from '@tauri-apps/api/path';
const appDataDirPath = await appDataDir();
const path = await join(appDataDirPath, 'users', 'tauri', 'avatar.png');
```

#### Since

1.0.0

#### Parameters

| Parameter  | Type       |
| :--------- | :--------- |
| ...`paths` | `string`[] |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:604](undefined)

---

### localDataDir()

```ts
localDataDir(): Promise< string >
```

Returns the path to the user's local data directory.

#### Platform-specific

- **Linux:** Resolves to `$XDG_DATA_HOME` or `$HOME/.local/share`.
- **macOS:** Resolves to `$HOME/Library/Application Support`.
- **Windows:** Resolves to `{FOLDERID_LocalAppData}`.

#### Example

```typescript
import { localDataDir } from '@tauri-apps/api/path';
const localDataDirPath = await localDataDir();
```

#### Since

1.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:350](undefined)

---

### normalize()

```ts
normalize(path): Promise< string >
```

Normalizes the given `path`, resolving `'..'` and `'.'` segments and resolve symbolic links.

#### Example

```typescript
import { normalize, appDataDir } from '@tauri-apps/api/path';
const appDataDirPath = await appDataDir();
const path = await normalize(appDataDirPath, '..', 'users', 'tauri', 'avatar.png');
```

#### Since

1.0.0

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `path`    | `string` |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:589](undefined)

---

### pictureDir()

```ts
pictureDir(): Promise< string >
```

Returns the path to the user's picture directory.

#### Platform-specific

- **Linux:** Resolves to [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_PICTURES_DIR`.
- **macOS:** Resolves to `$HOME/Pictures`.
- **Windows:** Resolves to `{FOLDERID_Pictures}`.

#### Example

```typescript
import { pictureDir } from '@tauri-apps/api/path';
const pictureDirPath = await pictureDir();
```

#### Since

1.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:372](undefined)

---

### publicDir()

```ts
publicDir(): Promise< string >
```

Returns the path to the user's public directory.

#### Platform-specific

- **Linux:** Resolves to [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_PUBLICSHARE_DIR`.
- **macOS:** Resolves to `$HOME/Public`.
- **Windows:** Resolves to `{FOLDERID_Public}`.

#### Example

```typescript
import { publicDir } from '@tauri-apps/api/path';
const publicDirPath = await publicDir();
```

#### Since

1.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:394](undefined)

---

### resolve()

```ts
resolve(...paths): Promise< string >
```

Resolves a sequence of `paths` or `path` segments into an absolute path.

#### Example

```typescript
import { resolve, appDataDir } from '@tauri-apps/api/path';
const appDataDirPath = await appDataDir();
const path = await resolve(appDataDirPath, '..', 'users', 'tauri', 'avatar.png');
```

#### Since

1.0.0

#### Parameters

| Parameter  | Type       |
| :--------- | :--------- |
| ...`paths` | `string`[] |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:574](undefined)

---

### resolveResource()

```ts
resolveResource(resourcePath): Promise< string >
```

Resolve the path to a resource file.

#### Example

```typescript
import { resolveResource } from '@tauri-apps/api/path';
const resourcePath = await resolveResource('script.sh');
```

#### Since

1.0.0

#### Parameters

| Parameter      | Type     | Description                                                                                                                                                                 |
| :------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `resourcePath` | `string` | The path to the resource.<br />Must follow the same syntax as defined in `tauri.conf.json > bundle > resources`, i.e. keeping subfolders and parent dir components (`../`). |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

The full path to the resource.

**Source**: [path.ts:431](undefined)

---

### resourceDir()

```ts
resourceDir(): Promise< string >
```

Returns the path to the application's resource directory.
To resolve a resource path, see the [[resolveResource | `resolveResource API`]].

#### Example

```typescript
import { resourceDir } from '@tauri-apps/api/path';
const resourceDirPath = await resourceDir();
```

#### Since

1.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:411](undefined)

---

### runtimeDir()

```ts
runtimeDir(): Promise< string >
```

Returns the path to the user's runtime directory.

#### Platform-specific

- **Linux:** Resolves to `$XDG_RUNTIME_DIR`.
- **macOS:** Not supported.
- **Windows:** Not supported.

#### Example

```typescript
import { runtimeDir } from '@tauri-apps/api/path';
const runtimeDirPath = await runtimeDir();
```

#### Since

1.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:454](undefined)

---

### sep()

```ts
sep(): string
```

Returns the platform-specific path segment separator:

- `\` on Windows
- `/` on POSIX

#### Since

2.0.0

#### Returns

`string`

**Source**: [path.ts:549](undefined)

---

### tempDir()

```ts
tempDir(): Promise< string >
```

Returns a temporary directory.

#### Example

```typescript
import { tempDir } from '@tauri-apps/api/path';
const temp = await tempDir();
```

#### Since

2.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:536](undefined)

---

### templateDir()

```ts
templateDir(): Promise< string >
```

Returns the path to the user's template directory.

#### Platform-specific

- **Linux:** Resolves to [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_TEMPLATES_DIR`.
- **macOS:** Not supported.
- **Windows:** Resolves to `{FOLDERID_Templates}`.

#### Example

```typescript
import { templateDir } from '@tauri-apps/api/path';
const templateDirPath = await templateDir();
```

#### Since

1.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:476](undefined)

---

### videoDir()

```ts
videoDir(): Promise< string >
```

Returns the path to the user's video directory.

#### Platform-specific

- **Linux:** Resolves to [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_VIDEOS_DIR`.
- **macOS:** Resolves to `$HOME/Movies`.
- **Windows:** Resolves to `{FOLDERID_Videos}`.

#### Example

```typescript
import { videoDir } from '@tauri-apps/api/path';
const videoDirPath = await videoDir();
```

#### Since

1.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [path.ts:498](undefined)