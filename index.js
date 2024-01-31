const express = require('express');

const app = express();

app.get('/', (request, response) => {
	response.json({message: "🚀 Server is running..."});
});

app.listen(3000);
