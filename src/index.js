import express from "express";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors());

const users = [];
const tweets = [];

server.post("/sign-up", (req, res) => {
	const user = req.body;

	users.push(user);

	res.send("OK");
});

server.post("/tweets", (req, res) => {
	const tweet = req.body;
	const picture = users.find((value) => value.username === tweet.username);
	const avatar = picture.avatar;

	tweet.avatar = avatar;
	tweets.push(tweet);

	res.send("OK");
});

server.listen(5000);
