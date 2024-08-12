import React from 'react'

const Searcher = () => {
  return (
    <div class="search-container">
    <form action="/search" method="get">
        <input type="text" placeholder="Buscar..." name="query" class="search-input" />
    </form>
</div>
  )
}

export default Searcher
