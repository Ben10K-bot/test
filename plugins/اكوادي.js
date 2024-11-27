import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; 
import { dirname } from 'path';
import { exec } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const handler = async (m, { conn }) => {
    try {
        // تحديد مسار الأكواد (المسار الذي يحتوي على ملفات الأكواد)
        const pluginsPath = path.join(__dirname, '../plugins');
        const zipFilePath = path.join(__dirname, '../plugins.zip');

        // التحقق من وجود الملفات
        let initialMessage = await conn.sendMessage(m.chat, { text: `📂 جاري قراءة ملفات الأكواد...` }, { quoted: m });
        console.log(`Reading files from: ${pluginsPath}`);
        
        const files = fs.readdirSync(pluginsPath);

        if (files.length === 0) {
            console.log("No files to zip.");
            await conn.sendMessage(m.chat, { text: `⚠️ لا توجد ملفات لضغطها.`, edit: initialMessage.key }, { quoted: m });
            return;
        }

        console.log(`Found ${files.length} files. Proceeding to zip...`);
        let zippingMessage = await conn.sendMessage(m.chat, { text: `🔄 تم العثور على ${files.length} ملفات. جاري إنشاء ملف ZIP...`, edit: initialMessage.key }, { quoted: m });

        // إنشاء ملف ZIP
        const zipCommand = `zip -r "${zipFilePath}" . -x ".npm/*" "node_modules/*"`;
        console.log(`Executing command: ${zipCommand}`);
        let processingMessage = await conn.sendMessage(m.chat, { text: `⏳ يتم الآن ضغط الملفات...`, edit: zippingMessage.key }, { quoted: m });

        exec(zipCommand, { cwd: pluginsPath }, async (error, stdout, stderr) => {
            if (error) {
                console.error(`Error creating zip: ${error.message}`);
                await conn.sendMessage(m.chat, { text: `❌ حدث خطأ أثناء إنشاء ملف ZIP: ${error.message}`, edit: processingMessage.key }, { quoted: m });
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                await conn.sendMessage(m.chat, { text: `⚠️ تحذير: ${stderr}`, edit: processingMessage.key }, { quoted: m });
                return;
            }

            console.log(`stdout: ${stdout}`);
            console.log(`Zip file created at: ${zipFilePath}`);

            // التحقق من وجود ملف الـ ZIP
            if (!fs.existsSync(zipFilePath)) {
                console.error("ZIP file not created.");
                await conn.sendMessage(m.chat, { text: `❌ لم يتم إنشاء ملف ZIP.`, edit: processingMessage.key }, { quoted: m });
                return;
            }

            // إرسال الملف بعد الإنشاء
            console.log(`Sending ZIP file to chat...`);
            let sendingMessage = await conn.sendMessage(m.chat, { text: `✅ تم إنشاء ملف ZIP بنجاح. يتم الآن إرساله...`, edit: processingMessage.key }, { quoted: m });
            await conn.sendMessage(m.chat, {
                document: fs.readFileSync(zipFilePath),
                mimetype: 'application/zip',
                fileName: 'plugins.zip'
            }, { quoted: m });

            // حذف الملف بعد إرساله
            fs.unlink(zipFilePath, async (err) => {
                if (err) {
                    console.error(`Error deleting zip file: ${err.message}`);
                    return;
                }
                console.log(`Zip file deleted: ${zipFilePath}`);
                await conn.sendMessage(m.chat, { text: `🗑️ تم حذف ملف ZIP بعد الإرسال.`, edit: sendingMessage.key }, { quoted: m });
            });
        });
    } catch (err) {
        console.error(`Failed to process plugins: ${err.message}`);
        await conn.sendMessage(m.chat, { text: `❌ فشل في معالجة ملفات الأكواد: ${err.message}`, edit: initialMessage.key }, { quoted: m });
    }
};

handler.help = ['getplugin'].map((v) => v + ' *<nombre>*');
handler.tags = ['owner'];
handler.command = /^(اكوادي)$/i;
handler.owner = true;

export default handler;