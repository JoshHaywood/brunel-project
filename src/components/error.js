import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Error() {
    const navigate = useNavigate();

    return (
        <div className="bg-secondary flex flex-col text-center items-center justify-center h-screen space-y-8 pb-20 px-5">
            <h1 className="text-4xl sm:text-6xl">This page does not exist</h1>

            <h5 className="text-sm sm:text-xl">The page you were looking for does not exist or has been removed.</h5>

            <Button
                    onClick={() => navigate(-1)}
                    variant="contained"
                    sx={{
                        bgcolor: '#f2a900',

                        ':hover': {
                            bgcolor: 'rgba(242, 169, 0, 0.75)',
                        },
                    }}
                >
                Go Back
            </Button>
        </div>
    );
}