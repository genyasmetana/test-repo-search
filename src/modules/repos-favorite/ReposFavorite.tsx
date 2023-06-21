import { RepositoryTable, useLocalStorage } from '../../common'
import { NodesType } from '../../common/types/repositories/types'

export const ReposFavorite = () => {
  const [localStorageItems, , removeLocalStorageItem] = useLocalStorage('favorite')

  const removeFavorite = (item: NodesType) => {
    removeLocalStorageItem(item)
  }

  return (
    <div>
      <h1>Favorite</h1>
      {localStorageItems ? (
        <RepositoryTable repositories={localStorageItems} removeFavorite={removeFavorite} />
      ) : (
        <div>No Favorite Repositories</div>
      )}
    </div>
  )
}
