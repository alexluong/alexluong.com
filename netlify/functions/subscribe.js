import axios from "axios"

const LIST_ID = process.env.EO_LIST_ID
const API_KEY = process.env.EO_API_KEY
const API_URL = `https://emailoctopus.com/api/1.5/lists/${LIST_ID}/contacts`
const DEFAULT_ERROR_MESSAGE =
  "There is some problems adding your email to the my newsletter. Please let me know on Twitter (@alex__luong) and I'd be happy to figure this out for you. Sorry for the inconvenience 🙇"

export async function handler(event) {
  const body = JSON.parse(event.body)

  try {
    await axios.post(API_URL, {
      api_key: API_KEY,
      email_address: body.email,
    })
    return { statusCode: 200 }
  } catch (error) {
    let message = DEFAULT_ERROR_MESSAGE

    if (error.response && error.response.data) {
      switch (error.response.data.error.code) {
        case "MEMBER_EXISTS_WITH_EMAIL_ADDRESS":
          message = "You're already a subscriber silly 😍"
        default:
      }
    }

    return {
      statusCode: 500,
      body: JSON.stringify({ message }),
    }
  }
}
