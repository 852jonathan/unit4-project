module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['images.unsplash.com'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              context: '',
              outputPath: 'static',
              publicPath: '_next/static',
              name: '[path][name].[hash].[ext]'
            }
          }
        ]
      }
    ]
  }
}
