// Importa o Fastify
const fastify = require('fastify')({ logger: true });

// Define uma rota GET
fastify.get('/', async (request, reply) => {
    return { message: 'Hello, World!' };
});

// Inicia o servidor
const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
        console.log('Server running at http://localhost:3000/');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
