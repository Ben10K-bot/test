
import fetch from 'node-fetch'; 
import { FormData, Blob } from 'formdata-node';
import { fileTypeFromBuffer } from 'file-type';

/**
 * Upload image to telegra.ph
 * Supported mimetype:
 * - `image/jpeg`
 * - `image/jpg`
 * - `image/png`
 * @param {Buffer} buffer Image Buffer
 * @return {Promise<string>}
 */
export default async buffer => {
  const { ext, mime } = await fileTypeFromBuffer(buffer);
  let form = new FormData();
  const blob = new Blob([buffer], { type: mime }); // `buffer` هنا هو كائن Buffer
  form.append('file', blob, 'tmp.' + ext);

  let res = await fetch('https://telegra.ph/upload', {
    method: 'POST',
    body: form
  });

  let img = await res.json();
  if (img.error) throw img.error;

  if (!img[0]) throw new Error('No image returned'); // تحقق من وجود الصورة

  return 'https://telegra.ph/' + img[0].src;
}
