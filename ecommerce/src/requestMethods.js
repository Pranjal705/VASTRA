import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmI4NjE3YTJlZmJiZjgwOWFhZWQ4MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTg3MDU5MiwiZXhwIjoxNjUwMTI5NzkyfQ.DkxYEAj-OPlP38BksKFp6qCkbIDgv9MMHrC75cGTWzk";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{ token: `Bearer ${TOKEN}`}
})