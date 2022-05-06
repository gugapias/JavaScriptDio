
const MeuErro = new Error('Mensagem Invalida');
MeuErro.name = 'InvalidMessage';
throw MeuErro;