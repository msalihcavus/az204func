module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name 
        : "No Name";

    context.res = {
        status: name ? 200 : 404,
        body: responseMessage
    };
}