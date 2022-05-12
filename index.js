const app = require('./server');
require('dotenv/config');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`API rodando na porta ${PORT}`);
});
