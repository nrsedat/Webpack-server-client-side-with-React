var Hapi = require('hapi');
var path = require('path');
var handlers = require('./server/handlers');


// Create a server with a host and port
var server = new Hapi.Server();


server.views({
    engines: {
        html: require('handlebars')
    },
    relativeTo: __dirname,
    path: './views',
    layoutPath: './views/layout',
    helpersPath: './views/helpers'
});


server.connection({ 
    host: 'localhost', 
    port: 8000 
});

// Add the route
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        handlers.index(request, reply);
    }
});

// Add the route
server.route({
    method: 'GET',
    path: '/{article}',
    handler: function (request, reply) {
        handlers.article(request, reply);
    }
});

// Add the route
server.route({
    method: 'GET',
    path: '/js/{filename}',
    handler: function (request, reply) {
        reply.file(path.join(__dirname,'client','build',request.params.filename));
    }
});

// Add the route
server.route({
    method: 'GET',
    path: '/css/{filename}',
    handler: function (request, reply) {
        reply.file(path.join(__dirname,'client','build',request.params.filename));
    }
});


// Start the server
server.start(function (err) {
    if(!err) {
        console.info('Server started at port number 8000');
    }
});
