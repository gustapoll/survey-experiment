var express = require("express")

var app = express()

app.use(express.static('./dist/survey-experiment'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {
        root: 'dist/survey-experiment/'
    });
});

app.listen(process.env.PORT || 8080);