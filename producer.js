
const kafka = require('kafka-node');
const Producer = kafka.Producer;
const client = new kafka.KafkaClient();
const producer = new Producer(client);
 
const payloads = [
    /*{ topic: 'test', messages: 'New sale happened', partition: 0 },
    { topic: 'test', messages: ['Refund', 'Sale'] }*/

    { topic: 'test', messages: 'Some more messages !!!' }
];
 
producer.send(payloads, function(error, data) {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }

});