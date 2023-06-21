import { Routes, Route } from 'react-router-dom'

import './App.css'

import { Layout } from './common'
import { ReposList } from './modules/repos-list/ReposList'
import { ReposFavorite } from './modules/repos-favorite/ReposFavorite'

export const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ReposList />} />
          <Route path='favorite' element={<ReposFavorite />} />

          <Route path='*' element={<div>Nothing Found</div>} />
        </Route>
      </Routes>
    </div>
  )
}
