/** @type {import('next').NextConfig} */
module.exports = {
	images: {
	  domains: ['kfdniefadaanbjodldohaedphafoffoh'],
	},
	webpack(config, { isServer, dev }) {
	  config.experiments = {
		asyncWebAssembly: true,
		layers: true,
		topLevelAwait: true,
	  };
  
	  if (!dev && isServer) {
		config.output.webassemblyModuleFilename = 'chunks/[id].wasm';
		config.plugins.push(new WasmChunksFixPlugin());
	  }
  
	  config.resolve.fallback = {
		fs: false,
		module: false,
	  };
  
	  return config;
	},
	reactStrictMode: true,
  };
  

  class WasmChunksFixPlugin {
	apply(compiler) {
	  compiler.hooks.thisCompilation.tap('WasmChunksFixPlugin', (compilation) => {
		compilation.hooks.processAssets.tap(
		  { name: 'WasmChunksFixPlugin' },
		  (assets) =>
			Object.entries(assets).forEach(([pathname, source]) => {
			  if (!pathname.match(/\.wasm$/)) return;
			  compilation.deleteAsset(pathname);
  
			  const name = pathname.split('/')[1];
			  const info = compilation.assetsInfo.get(pathname);
			  compilation.emitAsset(name, source, info);
			})
		);
	  });
	}
  }
  
