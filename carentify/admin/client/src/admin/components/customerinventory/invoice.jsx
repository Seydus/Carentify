import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const Invoice = () => {
  return (
    <Container maxWidth="md" className="my-4">
      <Typography variant="h4" align="center" className="mb-2">
        PAID
      </Typography>

      <Typography variant="h5" align="center" className="m-10">
        INV-0019
      </Typography>

      <Grid container spacing={2} className="mt-2">
        <Grid item xs={6}>
          <Typography variant="body1">
            <strong>Due date:</strong> 25 Dec 2023
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">
            <strong>Date of issue:</strong> 20 Dec 2023
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="body1" className="mt-2">
        <strong>Number:</strong> INV-0019
      </Typography>

      <Typography variant="body1" className="mt-2">
        <strong>Billed to:</strong>
        <br />
        John Doe
        <br />
        john.doe@gmail.com
        <br />
        09165829832
      </Typography>

      <Paper className="mt-4">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>DESCRIPTION</TableCell>
              <TableCell>TOTAL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Rental Vehicle</TableCell>
              <TableCell>$55.50</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default Invoice;
