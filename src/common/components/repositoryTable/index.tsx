import { FC } from 'react'

import StarIcon from '@mui/icons-material/Star'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Typography,
  Stack,
  Button,
} from '@mui/material'

import { NodesType } from '../../types/repositories/types'

type RepositoryTableType = {
  repositories: NodesType[]
  setFavorite?: (a: NodesType) => void
  removeFavorite: (a: NodesType) => void
}

export const RepositoryTable: FC<RepositoryTableType> = ({
  repositories,
  setFavorite,
  removeFavorite,
}) => (
  <Table aria-label='customized table'>
    <TableHead>
      <TableRow>
        <TableCell align='center'>Name</TableCell>
        <TableCell align='center'>Total Count Starts</TableCell>
        <TableCell align='center'>Total Count Forks</TableCell>
        <TableCell align='center' />
      </TableRow>
    </TableHead>
    <TableBody>
      {repositories.map((item: NodesType) => (
        <TableRow key={item.id}>
          <TableCell align='center'>
            <Typography variant='subtitle1'>{item.name}</Typography>
          </TableCell>
          <TableCell align='center'>
            <Stack flexDirection='row' alignItems='center' justifyContent='center' gap={1}>
              <StarIcon color='primary' />
              <Typography variant='body1'>{item.stargazers.totalCount}</Typography>
            </Stack>
          </TableCell>
          <TableCell align='center'>
            <Stack flexDirection='row' alignItems='center' justifyContent='center' gap={1}>
              <RestaurantIcon color='primary' />
              <Typography variant='body1'>{item.forks.totalCount}</Typography>
            </Stack>
          </TableCell>
          <TableCell align='center'>
            {item.isFavorite ? (
              <Button variant='text' onClick={() => removeFavorite(item)}>
                Remove Favorite
              </Button>
            ) : (
              <Button variant='text' onClick={() => setFavorite && setFavorite(item)}>
                Set Favorite
              </Button>
            )}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)
