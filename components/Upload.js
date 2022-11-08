import React from 'react'
import { Button } from '@mui/material'
import IconButton from "@mui/material/IconButton";
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import MovieIcon from '@mui/icons-material/Movie';
import LinearProgress from '@mui/material/LinearProgress';

function Upload() {
    return (
        <div className='upload-btn'>
            <Button variant="outlined"  color="secondary" component="label" size="large" startIcon={<MovieIcon />} >
                Upload Video
                <input hidden accept="*" multiple type="file" />
            </Button>
            <LinearProgress color="secondary" variant="determinate" value={30} sx={{mt:'0.2rem'}} />
        </div>
    )
}

export default Upload