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
            className="result-image"
            src={`data:image/png;base64,${data.image}`}
            alt="screenshot"
          />
        )
        break
      case 'html':
        setResult(
          <textarea
            readOnly
            rows={10}
            className="result-text"
            value={data.html}
          />
        )
        break
      case 'har':
        setResult(
          <pre className="result-code">
            {JSON.stringify(data.har, null, 2)}
          </pre>
        )
        break
      case 'evaluate':
        setResult(<pre className="result-code">{JSON.stringify(data.value)}</pre>)
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
    <div className="app-container">
      <h1 className="header">Headless Browser</h1>

      <div className="controls">
        <input
          className="input"
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder="输入 URL"
        />
        <input
          className="input"
          value={selector}
          onChange={e => setSelector(e.target.value)}
          placeholder="CSS 选择器（可选）"
        />
        <textarea
          className="textarea"
          rows={3}
          value={script}
          onChange={e => setScript(e.target.value)}
          placeholder="JS 表达式（Evaluate 用）"
        />
      </div>

      <div className="buttons">
        {Object.entries(API_MAP).map(([label, key]) => (
          <button
            key={key}
            className="btn"
            onClick={() => callApi(key)}
          >
            {label}
          </button>
        ))}
        <button className="btn btn-accent" onClick={downloadPDF}>
          PDF 下载
        </button>
      </div>

      <div className="output">
        <h2 className="subheader">结果</h2>
        <div className="result-area">{result}</div>

        <h2 className="subheader">控制台日志</h2>
        <pre className="logs">{logs.join('\n')}</pre>
      </div>
    </div>
  )
}