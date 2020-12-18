// server.route({
//     method: 'GET',
//     path: '/{filename*}',
//     handler: {
//       directory: {
//         path:    __dirname + '/public',
//         listing: false,
//         index:   false
//       }
//     }
//   });
  
//   server.route({
//     method: 'GET',
//     path: '/',
//     handler: function(request, reply) {
//       reply.view('homepage');
//     }
//   });