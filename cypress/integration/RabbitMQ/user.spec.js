const amqp = require("ampqlib");

const user = {Email}
async function connect()  {


    try {
        const connection = amqp.connect("ampp://localhost:5672")
        const channel = await connection.createChannel();
        const result = channel.assertQueue("jobs")
        channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)))
        console.log(`Jobs sent successfully ${user.Email}`);

    }

    catch (ex){
        console.error(ex)
    }
}