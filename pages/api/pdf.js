// pages/api/pdf.js
import { withPage } from '../../lib/browser';

export const config = {
  api: {
    // 关闭默认正文大小限制，确保大文件也能返回
    responseLimit: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: '缺少 URL' });

  try {
    const { result: buffer } = await withPage({
      url,
      action: page => page.pdf({ format: 'A4', printBackground: true }),
    });

    // 设置为 PDF 下载
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="page.pdf"');
    res.setHeader('Content-Length', buffer.length);

    // 使用 end 直接输出二进制
    res.status(200).end(buffer);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
}