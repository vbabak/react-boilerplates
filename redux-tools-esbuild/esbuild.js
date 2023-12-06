const path = require("path");
const sass = require("sass");
const esbuild = require("esbuild");
const fs = require("fs");
const VERSION = require("./package.json").version;


const DIST = './dist';
const OUT_BUILD = `${DIST}/v${VERSION}`;
const OUT_SERVE = `${DIST}/v${VERSION}`;

const args = process.argv;
const isProd = args[2] === '--prod';

const scssPlugin = {
  name: "scss",

  /**
   * @param {esbuild.PluginBuild} build 
   */
  setup(build) {
    build.onResolve({ filter: /\.scss$/ }, (args) => {
      return {
        path: path.join(__dirname, args.path),
      }
    });
    build.onLoad({ filter: /\.scss$/, }, async (args) => {
      const result = await sass.compileAsync(args.path, { style: isProd ? "compressed" : "expanded" });
      return {
        contents: result.css,
        loader: "css",
      }
    });
  },
};

/**
 * 
 * @returns {esbuild.BuildOptions}
 */
function getOptions() {
  return {
    entryPoints: [
      'src/index.tsx',
      'src/styles/index.scss',
      // 'src/index.html',
    ],
    outdir: OUT_BUILD,
    // entryNames: '[dir]/[name].[hash]',
    metafile: true,
    bundle: true,
    drop: isProd ? ['debugger'] : [],
    format: 'iife',
    minify: isProd ? true : false,
    keepNames: true,
    sourcemap: 'external',
    sourcesContent: false,
    target: [
      'chrome60',
      'firefox60',
      'safari11',
      'edge18',
    ],
    plugins: [scssPlugin],
    loader: {
      // '.html': 'text',
    },
  };
}

async function copyHTML() {
  const file = path.join(__dirname, 'src/index.html');
  const data = fs.readFileSync(file, { encoding: 'utf8', flag: 'r' }).replaceAll('{v}', VERSION);
  fs.writeFileSync(path.join(DIST, 'index.html'), data);
}

async function build() {
  await copyHTML();

  const result = await esbuild.build(getOptions()).catch(() => process.exit(1));

  if (isProd) {
    // --analyze
    console.log(await esbuild.analyzeMetafile(result.metafile));
  }

  if (!isProd) {
    const ctx = await esbuild.context(getOptions());
    // await ctx.watch(); // reload browser to rebuild app
    const { port, host } = await ctx.serve({
      servedir: DIST,
      port: 3000,
      host: 'localhost',
    });
    console.log(`Serving on "http://${host}:${port}"`);
  }
}

build().catch(console.error);
