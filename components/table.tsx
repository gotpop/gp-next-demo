import { DataGrid } from '@mui/x-data-grid'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

interface FormData {
  form: {
    firstName: string
    lastName: string
    email: string
    password: string
  }
}

export default function FormResults({ form }: FormData) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Key</TableCell>
            <TableCell align="left">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="left">First name</TableCell>
            <TableCell align="left">{form.firstName.value}</TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="left">Last name</TableCell>
            <TableCell align="left">{form.lastName.value}</TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">{form.email.value}</TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="left">Password</TableCell>
            <TableCell align="left">{form.password.value}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}