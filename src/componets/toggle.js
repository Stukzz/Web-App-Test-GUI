import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtons() {
    const [alignment, setAlignment] = React.useState('selected');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="E/R"
        >
            <ToggleButton variant="text" value="Regular" size="large">
                Regular
            </ToggleButton>
            <ToggleButton variant="text" value="Extra" size="Large" >
                Extra
            </ToggleButton>
        </ToggleButtonGroup>
    );
}