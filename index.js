// Importa o Fastify
const fastify = require('fastify')({ logger: true });

// Define uma rota GET
fastify.get('/', async (request, reply) => {
    return { message: 'Hello, World!' };
});

// Inicia o servidor
const start = async () => {
    try {
        await fastify.listen({ port: 80 });
        console.log('Server running at http://localhost:80/');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
