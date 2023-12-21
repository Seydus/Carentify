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
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h4" align="center" sx={{ mb: 2 }}>
        PAID
      </Typography>

      <Typography variant="h5" align="center" sx={{ mb: 2 }}>
        INV-0019
      </Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>
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

      <Typography variant="body1" sx={{ mt: 2 }}>
        <strong>Number:</strong> INV-0019
      </Typography>

      <Typography variant="body1" sx={{ mt: 2 }}>
        <strong>Billed to:</strong>
        <br />
        John Doe
        <br />
        john.doe@gmail.com
        <br />
        09165829832
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 4 }}>
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
              <TableCell>
                Rental Vehicle
              </TableCell>
              <TableCell>$55.50</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Invoice;
