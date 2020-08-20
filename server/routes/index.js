module.exports = function(app) {
    app.use('/api', require('./home'));
    app.use('/users', require('./users'));
};