import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard() {
    return (
        <Card sx={{ minWidth: 50 }}>
            <CardActions>
                <Button size='large'>Submit</Button>
            </CardActions>
        </Card>
    );
}
