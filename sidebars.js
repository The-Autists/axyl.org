const alterLink = (link) => link.replace('en/', '')



const typedocSidebar = require('./typedoc-sidebar')

for (const prop in typedocSidebar) {
  if (typeof typedocSidebar[prop] === 'string') {
    typedocSidebar[prop] = alterLink(typedocSidebar[prop]);
  } else {
    typedocSidebar[prop].items = typedocSidebar[prop].items.map(alterLink);
  }
}
// typedocSidebar.filter(item => typeof item === 'string').forEach(alterLink;
// typedocSidebar.filter(item => typeof item === 'object').map(alterLink);

module.exports = {
  docs: [
    {
      label: 'Getting started',
      type: 'category',
      items: [
        'getting-started/intro',
        'getting-started/setup-linux',
        'getting-started/setup-macos',
        'getting-started/setup-windows',
        'getting-started/technical-details',
      ],
    },
    {
      label: 'Usage',
      type: 'category',
      items: [
        'usage/intro',
        {
          label: 'Development',
          type: 'category',
          items: [
            'usage/development/integration',
            'usage/development/development',
            'usage/development/debugging',
            'usage/development/publishing',
            'usage/development/updating',
          ],
        },
        {
          label: 'Patterns',
          type: 'category',
          items: [
            'usage/patterns/about-patterns',
            'usage/patterns/hermit',
            'usage/patterns/bridge',
            'usage/patterns/cloudish',
            'usage/patterns/cloudbridge',
            'usage/patterns/lockdown',
            'usage/patterns/multiwin',
            'usage/patterns/glui',
          ],
        },
        {
          label: 'Recipes',
          type: 'category',
          items: [
            {
              label: 'Bundler',
              type: 'category',
              items: [
                'usage/recipes/bundler/introduction',
                'usage/recipes/bundler/anti-bloat',
                'usage/recipes/bundler/sidecar',
              ],
            },
            'usage/recipes/cli',
            'usage/recipes/command',
            'usage/recipes/plugin',
            {
              label: 'Visual',
              type: 'category',
              items: [
                'usage/recipes/visual/icons',
                'usage/recipes/visual/splashscreen',
              ],
            },
          ],
        },
        'usage/modes',
        'usage/detailed-flow',
        {
          label: 'CI/CD',
          type: 'category',
          items: ['usage/ci-cd/workflow', 'usage/ci-cd/cross-platform'],
        },
        'usage/contributor-guide',
      ],
    },
    {
      label: 'Tips',
      type: 'category',
      items: [],
    },
    {
      label: 'API',
      type: 'category',
      items: [
        'api/config',
        'api/cli',
        {
          label: 'JavaScript',
          type: 'category',
          items: typedocSidebar
        },
        {
          label: 'Rust',
          type: 'category',
          items: [
            {
              label: 'tauri',
              type: 'category',
              items: [
                {
                  label: 'app',
                  type: 'category',
                  items: [],
                },
                {
                  label: 'event',
                  type: 'category',
                  items: [
                    'api/rust/tauri/event/fn.emit',
                    'api/rust/tauri/event/fn.emit_function_name',
                    'api/rust/tauri/event/fn.event_listeners_object_name',
                    'api/rust/tauri/event/fn.event_queue_object_name',
                    'api/rust/tauri/event/fn.listen',
                    'api/rust/tauri/event/fn.on_event',
                  ],
                },
                {
                  label: 'plugin',
                  type: 'category',
                  items: [
                    'api/rust/tauri/plugin/fn.register',
                    'api/rust/tauri/plugin/trait.Plugin',
                  ],
                },
                {
                  label: 'settings',
                  type: 'category',
                  items: [
                    'api/rust/tauri/settings/fn.read_settings',
                    'api/rust/tauri/settings/struct.Settings',
                  ],
                },
                'api/rust/tauri/fn.call',
                'api/rust/tauri/fn.close_splashscreen',
                'api/rust/tauri/fn.execute_promise',
                'api/rust/tauri/fn.execute_promise_sync',
                'api/rust/tauri/fn.spawn',
                'api/rust/tauri/struct.App',
                'api/rust/tauri/struct.AppBuilder',
                'api/rust/tauri/struct.Webview',
                'api/rust/tauri/struct.WebviewMut',
                'api/rust/tauri/type.Result',
              ],
            },
            {
              label: 'tauri_api',
              type: 'category',
              items: [
                {
                  label: 'command',
                  type: 'category',
                  items: [
                    'api/rust/tauri_api/command/fn.binary_command',
                    'api/rust/tauri_api/command/fn.command_path',
                    'api/rust/tauri_api/command/fn.get_output',
                    'api/rust/tauri_api/command/fn.spawn_relative_command',
                  ],
                },
                {
                  label: 'config',
                  type: 'category',
                  items: [
                    'api/rust/tauri_api/config/enum.Port',
                    'api/rust/tauri_api/config/fn.get',
                    'api/rust/tauri_api/config/struct.BuildConfig',
                    'api/rust/tauri_api/config/struct.BundleConfig',
                    'api/rust/tauri_api/config/struct.CliArg',
                    'api/rust/tauri_api/config/struct.CliConfig',
                    'api/rust/tauri_api/config/struct.Config',
                    'api/rust/tauri_api/config/struct.EmbeddedServerConfig',
                    'api/rust/tauri_api/config/struct.TauriConfig',
                    'api/rust/tauri_api/config/struct.WindowConfig',
                  ],
                },
                {
                  label: 'dialog',
                  type: 'category',
                  items: [
                    'api/rust/tauri_api/dialog/enum.DialogSelection',
                    'api/rust/tauri_api/dialog/enum.Response',
                    'api/rust/tauri_api/dialog/fn.ask',
                    'api/rust/tauri_api/dialog/fn.message',
                    'api/rust/tauri_api/dialog/fn.pick_folder',
                    'api/rust/tauri_api/dialog/fn.save_file',
                    'api/rust/tauri_api/dialog/fn.select',
                    'api/rust/tauri_api/dialog/fn.select_multiple',
                  ],
                },
                {
                  label: 'dir',
                  type: 'category',
                  items: [
                    'api/rust/tauri_api/dir/fn.is_dir',
                    'api/rust/tauri_api/dir/fn.read_dir',
                    'api/rust/tauri_api/dir/fn.with_temp_dir',
                    'api/rust/tauri_api/dir/struct.DiskEntry',
                  ],
                },
                {
                  label: 'file',
                  type: 'category',
                  items: [
                    {
                      label: 'extract',
                      type: 'category',
                      items: [],
                    },
                    {
                      label: 'file_move',
                      type: 'category',
                      items: [],
                    },
                    'api/rust/tauri_api/file/enum.ArchiveFormat',
                    'api/rust/tauri_api/file/enum.Compression',
                    'api/rust/tauri_api/file/fn.read_binary',
                    'api/rust/tauri_api/file/fn.read_string',
                    'api/rust/tauri_api/file/struct.Extract',
                    'api/rust/tauri_api/file/struct.Move',
                  ],
                },
                {
                  label: 'http',
                  type: 'category',
                  items: [
                    'api/rust/tauri_api/http/enum.BodyType',
                    'api/rust/tauri_api/http/enum.ResponseType',
                    'api/rust/tauri_api/http/fn.make_request',
                    'api/rust/tauri_api/http/struct.HttpRequestBuilder',
                    'api/rust/tauri_api/http/struct.HttpRequestOptions',
                  ],
                },
                {
                  label: 'notification',
                  type: 'category',
                  items: [
                    'api/rust/tauri_api/notification/struct.Notification',
                  ],
                },
                {
                  label: 'path',
                  type: 'category',
                  items: [
                    'api/rust/tauri_api/path/enum.BaseDirectory',
                    'api/rust/tauri_api/path/fn.app_dir',
                    'api/rust/tauri_api/path/fn.audio_dir',
                    'api/rust/tauri_api/path/fn.cache_dir',
                    'api/rust/tauri_api/path/fn.config_dir',
                    'api/rust/tauri_api/path/fn.data_dir',
                    'api/rust/tauri_api/path/fn.desktop_dir',
                    'api/rust/tauri_api/path/fn.document_dir',
                    'api/rust/tauri_api/path/fn.download_dir',
                    'api/rust/tauri_api/path/fn.executable_dir',
                    'api/rust/tauri_api/path/fn.font_dir',
                    'api/rust/tauri_api/path/fn.home_dir',
                    'api/rust/tauri_api/path/fn.local_data_dir',
                    'api/rust/tauri_api/path/fn.picture_dir',
                    'api/rust/tauri_api/path/fn.public_dir',
                    'api/rust/tauri_api/path/fn.resolve_path',
                    'api/rust/tauri_api/path/fn.resource_dir',
                    'api/rust/tauri_api/path/fn.runtime_dir',
                    'api/rust/tauri_api/path/fn.template_dir',
                    'api/rust/tauri_api/path/fn.video_dir',
                  ],
                },
                {
                  label: 'platform',
                  type: 'category',
                  items: [
                    'api/rust/tauri_api/platform/fn.resource_dir',
                    'api/rust/tauri_api/platform/fn.target_triple',
                  ],
                },
                {
                  label: 'process',
                  type: 'category',
                  items: [
                    'api/rust/tauri_api/process/enum.Signal',
                    'api/rust/tauri_api/process/fn.get_parent_process',
                    'api/rust/tauri_api/process/struct.Process',
                    'api/rust/tauri_api/process/struct.System',
                    'api/rust/tauri_api/process/trait.ProcessExt',
                    'api/rust/tauri_api/process/trait.SystemExt',
                  ],
                },
                {
                  label: 'rpc',
                  type: 'category',
                  items: [
                    'api/rust/tauri_api/rpc/fn.format_callback',
                    'api/rust/tauri_api/rpc/fn.format_callback_result',
                  ],
                },
                {
                  label: 'tcp',
                  type: 'category',
                  items: [
                    'api/rust/tauri_api/tcp/fn.get_available_port',
                    'api/rust/tauri_api/tcp/fn.port_is_available',
                  ],
                },
                {
                  label: 'version',
                  type: 'category',
                  items: [
                    'api/rust/tauri_api/version/fn.compare',
                    'api/rust/tauri_api/version/fn.is_compatible',
                    'api/rust/tauri_api/version/fn.is_major',
                    'api/rust/tauri_api/version/fn.is_minor',
                    'api/rust/tauri_api/version/fn.is_patch',
                  ],
                },
                'api/rust/tauri_api/enum.Error',
                'api/rust/tauri_api/type.Result',
              ],
            },
            {
              label: 'tauri_utils',
              type: 'category',
              items: [
                {
                  label: 'platform',
                  type: 'category',
                  items: [
                    'api/rust/tauri_utils/platform/fn.resource_dir',
                    'api/rust/tauri_utils/platform/fn.target_triple',
                  ],
                },
                {
                  label: 'process',
                  type: 'category',
                  items: [
                    'api/rust/tauri_utils/process/enum.Signal',
                    'api/rust/tauri_utils/process/fn.get_parent_process',
                    'api/rust/tauri_utils/process/struct.Process',
                    'api/rust/tauri_utils/process/struct.System',
                    'api/rust/tauri_utils/process/trait.ProcessExt',
                    'api/rust/tauri_utils/process/trait.SystemExt',
                  ],
                },
                'api/rust/tauri_utils/enum.Error',
                'api/rust/tauri_utils/type.Result',
              ],
            },
          ],
        },
      ],
    },
  ],
  about: [
    {
      label: 'About Tauri',
      type: 'category',
      items: [
        'about/intro',
        'about/security',
        'about/governance',
        'about/book',
      ],
    },
  ],
}
