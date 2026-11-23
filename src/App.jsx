import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { articles } from './articles.js'
import './App.css'

const dateFormat = new Intl.DateTimeFormat('id-ID', { dateStyle: 'long', timeZone: 'UTC' })
const textSizes = { kecil: 'Kecil', standar: 'Standar', besar: 'Besar' }
const sizeKey = 'fokusbaca:ukuran-teks'
const articleUrl = (slug) => `#/artikel/${slug}`

function savedSize() {
  try {
    const value = localStorage.getItem(sizeKey)
    if (Object.hasOwn(textSizes, value)) return value
  } catch {
    // The reader still works when browser storage is unavailable.
  }
  return 'standar'
}

function Brand() {
  return <a className="brand" href="#/" aria-label="FokusBaca, daftar artikel"><span className="brand-mark" aria-hidden="true" />FokusBaca</a>
}

function Metadata({ article }) {
  return (
    <div className="metadata">
      <span className="category">{article.category}</span>
      <time dateTime={article.date}>{dateFormat.format(new Date(article.date))}</time>
    </div>
  )
}

function ArticleList({ query, onQueryChange }) {
  const heading = useRef(null)
  const search = useRef(null)
  const keyword = query.trim().toLocaleLowerCase('id-ID')
  const matches = articles.filter((article) =>
    [article.title, article.summary, article.category].some((field) => field.toLocaleLowerCase('id-ID').includes(keyword)),
  )

  useEffect(() => { heading.current.focus({ preventScroll: true }) }, [])

  function clearSearch() {
    onQueryChange('')
    search.current.focus()
  }

  return (
    <>
      <header className="masthead">
        <div className="site-width masthead-inner">
          <Brand />
          <span className="edition">Prototipe bacaan</span>
        </div>
      </header>
      <main>
        <section className="intro">
          <div className="site-width intro-inner">
            <div>
              <h1 ref={heading} tabIndex={-1}>Daftar artikel</h1>
              <p>Pilih bacaan yang relevan dan temukan informasi intinya. Semua artikel adalah konten demonstrasi orisinal.</p>
            </div>
            <div className="search" role="search">
              <label htmlFor="search-articles">Cari artikel</label>
              <div className="search-controls">
                <input id="search-articles" ref={search} type="search" value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Judul, ringkasan, atau kategori" />
                {query && <button type="button" onClick={clearSearch}>Bersihkan</button>}
              </div>
            </div>
          </div>
        </section>
        <section className="site-width results" aria-label="Hasil pencarian artikel">
          <p className="result-count" role="status">{matches.length} artikel</p>
          {matches.length ? (
            <ul className="article-list">
              {matches.map((article) => (
                <li key={article.slug} className="article-card">
                  <Metadata article={article} />
                  <h2><a href={articleUrl(article.slug)}>{article.title}</a></h2>
                  <p>{article.summary}</p>
                  {article.sampleLabel && <span className="sample-label">{article.sampleLabel}</span>}
                  <a className="read-link" href={articleUrl(article.slug)} aria-label={`Baca artikel ${article.title}`}>
                    Baca artikel <span aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="empty-state">
              <h2>Hasil tidak ditemukan</h2>
              <p>Coba kata kunci lain atau lihat kembali semua artikel.</p>
              <button className="action" type="button" onClick={clearSearch}>Lihat semua artikel</button>
            </div>
          )}
        </section>
      </main>
      <footer className="site-footer"><div className="site-width">FokusBaca · Konten demonstrasi</div></footer>
    </>
  )
}

// Keep the same visible line when a font change reflows the article.
function readingPosition(reader) {
  const edge = reader.getBoundingClientRect().top
  const block = Array.from(reader.querySelectorAll('[data-reading-block]'))
    .find((element) => element.getBoundingClientRect().bottom > edge + 1)

  if (!block || reader.scrollTop === 0) return null

  const bounds = block.getBoundingClientRect()
  const position = { block, offset: bounds.top - edge }
  const text = block.firstChild
  if (bounds.top >= edge || text?.nodeType !== Node.TEXT_NODE || text.nextSibling) return position

  const range = document.createRange()
  range.selectNodeContents(block)
  const line = Array.from(range.getClientRects()).find((rect) => rect.bottom > edge + 1)
  if (!line) return position

  const x = line.left + 1
  const y = Math.max(edge + 1, line.top + line.height / 2)
  const caret = document.caretPositionFromPoint?.(x, y)
  const fallback = caret ? null : document.caretRangeFromPoint?.(x, y)
  if ((caret?.offsetNode ?? fallback?.startContainer) === text) {
    position.character = Math.min(caret?.offset ?? fallback.startOffset, text.length - 1)
    position.offset = line.top - edge
  }
  return position
}

function restorePosition(reader, position) {
  const { block, character, offset } = position
  let top = block.getBoundingClientRect().top
  if (character !== undefined) {
    const range = document.createRange()
    range.setStart(block.firstChild, character)
    range.setEnd(block.firstChild, character + 1)
    top = range.getBoundingClientRect().top
  }
  reader.scrollTop += top - reader.getBoundingClientRect().top - offset
}

function ArticleDetail({ article, section, size, onSizeChange }) {
  const [focused, setFocused] = useState(false)
  const reader = useRef(null)
  const heading = useRef(null)
  const position = useRef(null)

  function goToSection(id) {
    const target = document.getElementById(id)
    if (!target || !reader.current.contains(target)) return false
    target.focus({ preventScroll: true })
    target.scrollIntoView({ block: 'start' })
    return true
  }

  useLayoutEffect(() => {
    if (!section || !goToSection(section)) {
      reader.current.scrollTop = 0
      heading.current.focus({ preventScroll: true })
    }
  }, [section])

  useLayoutEffect(() => {
    if (position.current) {
      restorePosition(reader.current, position.current)
      position.current = null
    }
  }, [size])

  return (
    <div className="reader-shell" data-focus={focused}>
      <header className="masthead reader-header">
        <div className="site-width masthead-inner">
          <div className="reader-nav" hidden={focused}>
            <Brand />
            <nav aria-label="Lokasi halaman"><a href="#/">Daftar artikel</a><span aria-hidden="true">/</span><span aria-current="page">Detail artikel</span></nav>
          </div>
          <div className="reader-actions" role="group" aria-label="Tampilan bacaan">
            <label htmlFor="article-size">Ukuran teks</label>
            <select id="article-size" value={size} onChange={(event) => {
              position.current = readingPosition(reader.current)
              onSizeChange(event.target.value)
            }}>
              {Object.entries(textSizes).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
            </select>
            <button type="button" className="focus-toggle" onClick={() => setFocused(!focused)}>
              {focused ? 'Keluar dari mode fokus' : 'Mode fokus'}
            </button>
          </div>
        </div>
      </header>
      <main className="reading-scroll" ref={reader} tabIndex={0} aria-label="Bacaan artikel">
        <article className="reading-article" data-size={size}>
          <header className="article-heading">
            <Metadata article={article} />
            <h1 ref={heading} tabIndex={-1} data-reading-block>{article.title}</h1>
            <p className="article-summary" data-reading-block>{article.summary}</p>
            <p className="sample-label" data-reading-block>{article.sampleNotice ?? 'Artikel demonstrasi orisinal'}</p>
          </header>
          <section className="key-facts" aria-labelledby="facts-heading">
            <h2 id="facts-heading" data-reading-block>Informasi kunci</h2>
            <dl>
              {article.facts.map((fact) => (
                <div key={fact.section}>
                  <dt data-reading-block>{fact.label}</dt>
                  <dd><a data-reading-block href={`${articleUrl(article.slug)}?bagian=${fact.section}`} onClick={(event) => {
                    if (event.currentTarget.hash === window.location.hash && goToSection(fact.section)) event.preventDefault()
                  }}>{fact.value} <span aria-hidden="true">↓</span></a></dd>
                </div>
              ))}
            </dl>
          </section>
          <div className="article-body">
            {article.sections.map((item) => (
              <section key={item.id} aria-labelledby={item.id}>
                <h2 id={item.id} tabIndex={-1} data-reading-block>{item.title}</h2>
                {item.paragraphs.map((paragraph) => <p key={paragraph} data-reading-block>{paragraph}</p>)}
              </section>
            ))}
          </div>
          <footer className="article-end"><a href="#/" className="read-link"><span aria-hidden="true">←</span> Kembali ke daftar artikel</a></footer>
        </article>
      </main>
    </div>
  )
}

function NotFound() {
  const heading = useRef(null)
  useEffect(() => { heading.current.focus({ preventScroll: true }) }, [])

  return (
    <>
      <header className="masthead"><div className="site-width masthead-inner"><Brand /></div></header>
      <main className="site-width missing">
        <h1 ref={heading} tabIndex={-1}>Artikel tidak ditemukan</h1>
        <p>Tautan artikel tidak tersedia. Anda dapat memilih bacaan lain dari daftar artikel.</p>
        <a href="#/" className="action">Kembali ke daftar artikel</a>
      </main>
    </>
  )
}

function App() {
  const [hash, setHash] = useState(window.location.hash)
  const [query, setQuery] = useState('')
  const [size, setSize] = useState(savedSize)
  const [path, parameters] = hash.slice(1).split('?')
  const article = articles.find((entry) => articleUrl(entry.slug) === `#${path}`)
  const isHome = !path || path === '/'
  const section = new URLSearchParams(parameters).get('bagian')

  useEffect(() => {
    const update = () => setHash(window.location.hash)
    window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [])

  useLayoutEffect(() => {
    document.title = article ? `${article.title} · FokusBaca` : isHome ? 'FokusBaca' : 'Artikel tidak ditemukan · FokusBaca'
    window.scrollTo(0, 0)
  }, [article, isHome])

  function changeSize(value) {
    setSize(value)
    try {
      localStorage.setItem(sizeKey, value)
    } catch {
      // The current session can still use the selected size.
    }
  }

  if (article) return <ArticleDetail key={article.slug} article={article} section={section} size={size} onSizeChange={changeSize} />
  if (isHome) return <ArticleList query={query} onQueryChange={setQuery} />
  return <NotFound />
}

export default App
