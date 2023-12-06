export class UiEntity {
  themeMode: 'light' | 'dark';
  loading = false;

  constructor(opts: {
    themeMode: 'light' | 'dark',
  }) {
    this.themeMode = opts.themeMode;
  }

  toJSON(): string {
    return JSON.stringify({
      themeMode: this.themeMode,
    });
  }
}
