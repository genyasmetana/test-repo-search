import { useMemo, useState } from 'react'
import { useQuery } from '@apollo/client'

import { Loader, RepositoryTable } from '../../common'
import { NodesType } from '../../common/types/repositories/types'
import { useLocalStorage } from '../../common/useHooks/useLocalStorage'

import { GET_REPOSITORIES } from './queries'
import { SearchBlock } from './components/searchBox'

export const ReposList = () => {
  const [localStorageItems, addLocalStorageItem, removeLocalStorageItem] =
    useLocalStorage('favorite')
  const [search, setSearch] = useState('language:react stars:>1000')

  const { loading, data } = useQuery(GET_REPOSITORIES, {
    variables: {
      query: search,
    },
  })

  const setFavorite = (item: NodesType) => {
    addLocalStorageItem(item)
  }

  const removeFavorite = (item: NodesType) => {
    removeLocalStorageItem(item)
  }

  const nodes = useMemo(() => {
    return data?.search?.nodes?.map((item: any) => {
      const isFavorite =
        localStorageItems && localStorageItems.some((storage: any) => storage.id === item.id)
      return {
        ...item,
        isFavorite,
      }
    })
  }, [data, localStorageItems])

  // Cache update Not working
  // client.writeQuery({
  //   query: GET_REPOSITORIES,
  //   data: {
  //     search: {
  //       nodes: nodes
  //     }}
  // });

  return (
    <div>
      <h1>List</h1>
      <SearchBlock searchHandler={setSearch} searchValue={search} />
      {loading ? (
        <Loader />
      ) : nodes?.length ? (
        <RepositoryTable
          repositories={nodes}
          setFavorite={setFavorite}
          removeFavorite={removeFavorite}
        />
      ) : (
        <div>"Nothing to show"</div>
      )}
    </div>
  )
}
