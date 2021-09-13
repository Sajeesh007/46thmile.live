const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: true,
    register :true,
    skipWaiting :true
  },
  images :{
    domains :[
        "i.scdn.co",
        'images.prismic.io',
        'prismic-io.s3.amazonaws.com'
    ]
  }
})