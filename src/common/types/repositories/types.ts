export type RepositoriesDataType = {
  nodes: NodesType[]
}

export type NodesType = {
  id: string
  name: string
  url: string
  forks: {
    totalCount: number
  }
  stargazers: {
    totalCount: number
  }
  isFavorite: boolean
}
