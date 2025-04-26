import { useState } from 'react'

const API_MAP = {
  Screenshot: 'screenshot',
  HTML: 'html',
  HAR: 'har',
  Evaluate: 'evaluate',
}

export default function Home() {
  const [url, setUrl] = useState('https://example.com')
  const [selector, setSelector] = useState('')
  const [script, setScript] = useState('')
  const [result, setResult] = useState(null)
  const [logs, setLogs] = useState([])

  // 通用 API 调用（截图、HTML、HAR、Evaluate）
  const callApi = async (type) => {
    setResult(null)
    setLogs([])

    const body = { url }
    if (selector) body.selector = selector
    if (type === 'evaluate') body.script = script

    const res = await fetch(`/api/${type}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const data = await res.json()
    if (!res.ok) {
      alert(data.error || 'Error')
      return
    }

    setLogs(data.logs || [])
    switch (type) {
      case 'screenshot':
        setResult(
          <img
            src={`data:image/png;base64,${data.image}`}
            alt="screenshot"
            style={{ maxWidth: '100%' }}
          />
        )
        break
      case 'html':
        setResult(
          <textarea
            readOnly
            rows={10}
            style={{ width: '100%' }}
            value={data.html}
          />
        )
        break
      case 'har':
        setResult(
          <pre
            style={{
              background: '#f0f0f0',
              maxHeight: 200,
              overflow: 'auto',
            }}
          >
            {JSON.stringify(data.har, null, 2)}
          </pre>
        )
        break
      case 'evaluate':
        setResult(<pre>{JSON.stringify(data.value)}</pre>)
        break
    }
  }

  // 专门的 PDF 下载函数
  const downloadPDF = async () => {
    try {
      const res = await fetch('/api/pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      if (!res.ok) {
        // 如果后端返回 JSON 错误
        const err = await res.json();
        alert(err.error || '下载失败');
        return;
      }

      // 拿到真正的二进制流
      const blob = await res.blob();
      // 用 URL.createObjectURL 生成临时链接
      const pdfUrl = URL.createObjectURL(blob);

      // 动态创建 <a> 并点击，触发下载
      const a = document.createElement('a');
      a.href = pdfUrl;
      a.download = 'page.pdf';
      document.body.appendChild(a);
      a.click();

      // 清理
      a.remove();
      URL.revokeObjectURL(pdfUrl);
    } catch (err) {
      console.error(err);
      alert('下载出错：' + err.message);
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Headless Browser Demo</h1>

      <div style={{ marginBottom: 10 }}>
        <input
          style={{ width: 400 }}
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder="输入 URL"
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <input
          style={{ width: 200 }}
          value={selector}
          onChange={e => setSelector(e.target.value)}
          placeholder="CSS 选择器（可选）"
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <textarea
          rows={3}
          style={{ width: 400 }}
          value={script}
          onChange={e => setScript(e.target.value)}
          placeholder="JS 表达式（Evaluate 用）"
        />
      </div>

      {/* 常规 API 按钮 */}
      {Object.entries(API_MAP).map(([label, key]) => (
        <button
          key={key}
          onClick={() => callApi(key)}
          style={{ marginRight: 10 }}
        >
          {label}
        </button>
      ))}

      {/* PDF 下载按钮 */}
      <button onClick={downloadPDF} style={{ marginRight: 10 }}>
        PDF 下载
      </button>

      <div style={{ marginTop: 20 }}>
        <h2>结果</h2>
        {result}
      </div>
      <div style={{ marginTop: 20 }}>
        <h2>控制台日志</h2>
        <pre
          style={{ background: '#eee', maxHeight: 150, overflow: 'auto' }}
        >
          {logs.join('\n')}
        </pre>
      </div>
    </div>
  )
}