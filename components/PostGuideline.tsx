export default function PostGuideline() {
  return (
    <>
      <div className="rounded-2xl border-2 border-dashed border-amber-500 px-5 py-2.5">
        <h2 className="m-0 mb-1.5">閱讀指南</h2>
        <p>為了讓讀者更有效地閱讀此篇文章並理解每個段落的目的，文章段落採用以下架構：</p>
        <ul>
          <li>標題</li>
          <li>本段落目的</li>
          <li>實作研究 or 理論理解</li>
        </ul>
        <p>
          冀望以此方式，使每個段落都是一個完整的概念，讓讀者能夠透過逐步堆疊的方式，更容易地理解並吸收文章的內容。
        </p>
      </div>
    </>
  )
}
