const express = require('express');

const app = express();

app.get('/', (request, response) => {
	response.json({message: "Health check"});
});

app.listen(3333, () => console.log('🚀 Server is running on port 3333...'));
