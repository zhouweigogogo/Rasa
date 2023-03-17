import axios from "axios";
import {createCardMsg, createImgBotMsg, createTextBotMsg} from "./msgManager";

const RasaRestUrl = 'http://175.178.28.11:5005/webhooks/rest/webhook'
//const RasaRestUrl = 'http://backend:5005/webhooks/rest/webhook'
export const postToRasa = async (userInput) => {

	return await axios.post(RasaRestUrl,
		{'sender': '123', 'message': userInput}
	).then(function (response) {
		return response.data
	}).catch(function (error) {
		return [{'text': '小农小农 遭遇了短路，请稍后再试～', 'recipient_id': '123'}]
	})
}

export const getRasaResponse = async (msg) => {
	const data = msg.content;
	// 发送文本消息时
	if (msg.type === 'text') {
		return await postToRasa(data.text)
	}
}

export function parseResponse(res, reqType) {
	let botResponse = []

	if (res === undefined) {
			return botResponse
	}
	console.log("Res:", res)
	res.forEach((item) => {
		let msg;
		if (item.text !== undefined) {
			msg = createTextBotMsg(item.text)
			botResponse.push(msg)

		}
		if (item.image !== undefined) {
			let src = decodeURI(item.image)
			msg = createImgBotMsg(src)
			botResponse.push(msg)

		}
		if (item.buttons !== undefined) {
			msg = createCardMsg(item.buttons)
			botResponse.push(msg)

		}

	})
	return botResponse
}


