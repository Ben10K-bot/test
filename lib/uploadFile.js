import fetch from 'node-fetch'; 
import { FormData, Blob } from 'formdata-node'; 
import { fileTypeFromBuffer } from 'file-type';

/**
 * Upload ephemeral file to file.io
 * `Expired in 1 day`
 * `100MB Max Filesize`
 * @param {Buffer} buffer File Buffer
 */
const fileIO = async buffer => {
    const { ext, mime } = await fileTypeFromBuffer(buffer) || {};
    if (!ext || !mime) throw new Error("Unable to determine file type.");

    let form = new FormData();
    const blob = new Blob([buffer], { type: mime }); // Use buffer directly
    form.append('file', blob, 'tmp.' + ext);

    let res = await fetch('https://file.io/?expires=1d', { // 1 Day Expiry Date
        method: 'POST',
        body: form
    });

    let json = await res.json();
    if (!json.success) throw json;
    return json.link;
}

/**
 * Upload file to storage.restfulapi.my.id
 * @param {Buffer|ReadableStream|(Buffer|ReadableStream)[]} inp File Buffer/Stream or Array of them
 * @returns {string|null|(string|null)[]}
 */
const RESTfulAPI = async inp => {
    let form = new FormData();
    let buffers = Array.isArray(inp) ? inp : [inp];

    for (let buffer of buffers) {
        const blob = new Blob([buffer]); // Use buffer directly
        form.append('file', blob);
    }

    let res = await fetch('https://storage.restfulapi.my.id/upload', {
        method: 'POST',
        body: form
    });

    let jsonResponse = await res.text();
    try {
        const json = JSON.parse(jsonResponse);
        if (!Array.isArray(inp)) return json.files[0].url;
        return json.files.map(res => res.url);
    } catch (e) {
        throw new Error(`Failed to parse response: ${jsonResponse}`);
    }
}

/**
 * 
 * @param {Buffer} inp 
 * @returns {Promise<string>}
 */
export default async function (inp) {
    let err = null;
    for (let upload of [RESTfulAPI, fileIO]) {
        try {
            return await upload(inp);
        } catch (e) {
            err = e;
        }
    }
    if (err) throw err;
}