import { ChangeEvent, FC } from 'react'
import TextField from '@mui/material/TextField'
interface ISearchBlock {
  searchValue: string
  searchHandler(searchValue: string): void
}

export const SearchBlock: FC<ISearchBlock> = ({ searchValue, searchHandler }) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    searchHandler(e.target.value)
  }

  return (
    <div>
      <TextField
        fullWidth
        id='standard-basic'
        label='Repositories'
        value={searchValue}
        onChange={onChangeHandler}
      />
    </div>
  )
}
