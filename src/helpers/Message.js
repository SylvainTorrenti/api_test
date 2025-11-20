function Message(req) {
    console.log('Inside Message helper function');
    const hello = 'coucou!';
    return hello;
}


module.exports = {
    message: {
        hello: Message,
    },
};