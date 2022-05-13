const getSummary = async () => {

	const summary = {
		Summary: [
			{
				description: 'Retorna saldos e transações de um endereço de Bitcoin',
				route: '/details/{address}',
			},
			{
				description: 'Retorna uma lista de transações confirmadas e não confirmadas',
				route: '/balance/{address}',
			},
			{
				description: 'Enviar transações de btc',
				route: '/send',
			},
			{
				description: 'Retornar dados "normalizados" sobre a transação',
				route: '/tx/{transaction}',
			}
		]
	};

	return summary;
};

module.exports = {
	getSummary,
};
