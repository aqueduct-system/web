// export const BASE_URL = 'http://map.njgingrich.com/api'
export const BASE_URL = 'http://localhost:5000/api'

export function fetcher(input, ...args) {
    return fetch(`${BASE_URL}${input}`, ...args).then(res => res.json())
};

const postOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
};

export default {
    async post(url, body) {
        const opts = Object.assign({}, postOptions, { body: JSON.stringify(body) });

        try {
            const res = await fetch(`${BASE_URL}${url}`, opts);
            return res.json();
        } catch (err) {
            return null;
        }
    }
}