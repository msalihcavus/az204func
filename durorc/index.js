const df = require("durable-functions");

module.exports = df.orchestrator(function* (context) {
    const outputs = [];

    // Replace "Hello" with the name of your Durable Activity Function.
    outputs.push(yield context.df.callActivity("duract", "Tokyo"));
    outputs.push(yield context.df.callActivity("duract", "Seattle"));
    outputs.push(yield context.df.callActivity("duract", "London"));

    
    //birden fazla activity i orchestrator içinden çağırabiliriz
    outputs.push(yield context.df.callActivity("duract1", "Seattle"));
    outputs.push(yield context.df.callActivity("duract2", "London"));

    // returns ["Hello Tokyo!", "Hello Seattle!", "Hello London!"]
    return outputs;
});