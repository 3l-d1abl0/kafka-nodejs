const kafka = require('kafka-node');
const client = new kafka.KafkaClient();
const Consumer = kafka.Consumer;
const consumer = new Consumer(
    client,
        [
            { topic: 'test', partitions: 0 }, { topic: 'test', partitions: 1 }
        ],
        {
            autoCommit: false
        }
    );
 
consumer.on('message', function (message) {
    console.log(message);
});