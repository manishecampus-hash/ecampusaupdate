require("dotenv").config();

const WebSocket = require("ws");
const http = require("http");

const server = http.createServer();

const wss = new WebSocket.Server({
    server,
    path: "/media-stream",
});

wss.on("connection", (twilioSocket) => {
    console.log("Twilio connected");

    const elevenSocket = new WebSocket(
        `wss://api.elevenlabs.io/v1/convai/conversation?agent_id=${process.env.ELEVENLABS_AGENT_ID}`,
        {
            headers: {
                "xi-api-key": process.env.ELEVENLABS_API_KEY,
            },
        }
    );

    elevenSocket.on("open", () => {
        console.log("Connected to ElevenLabs");
    });

    twilioSocket.on("message", (message) => {
        try {
            const data = JSON.parse(message);

            if (data.event === "media") {
                if (elevenSocket.readyState === WebSocket.OPEN) {
                    elevenSocket.send(
                        JSON.stringify({
                            user_audio_chunk: data.media.payload,
                        })
                    );
                }
            }
        } catch (err) {
            console.log(err.message);
        }
    });

    elevenSocket.on("message", (message) => {
        try {
            const data = JSON.parse(message.toString());

            if (data.audio_event) {
                twilioSocket.send(
                    JSON.stringify({
                        event: "media",
                        media: {
                            payload: data.audio_event.audio_base_64,
                        },
                    })
                );
            }
        } catch (err) {
            console.log(err.message);
        }
    });
});

server.listen(3001, () => {
    console.log("WebSocket running on ws://localhost:3001");
});