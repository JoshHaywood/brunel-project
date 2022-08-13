import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Preamble() {
    return (
        /* Background */
        <div className="bg-secondary py-5">
            {/* Text */}
            <div className="px-5 xl:px-0 py-5 lg:w-4/5 xl:w-3/5 mx-auto">
                <p className="text-slate-300 pb-5">
                    Students and Staff from the Games and Photography departments of <a href="https://www.falmouth.ac.uk/"><span className='font-medium hover:underline text-slate-300'>Falmouth University</span></a> have created an experimental interactive workshop.
                    Based on the lifetime of engineering innovation from <a href="https://en.wikipedia.org/wiki/Isambard_Kingdom_Brunel"><span className='font-medium hover:underline text-slate-300'>Isambard Kingdom Brunel</span></a> and the photographic work of <a href="https://en.wikipedia.org/wiki/Robert_Howlett"><span className='font-medium hover:underline text-slate-300'>Robert Howlett.</span></a> Allowing you to follow their footsteps at the launching chains of the Great Eastern.
                </p>

                <Link to="/history">
                    <Button 
                        variant="contained"
                        sx={{
                            bgcolor: '#f2a900',

                            ':hover': {
                                bgcolor: 'rgba(242, 169, 0, 0.75)',
                            },
                        }}
                    >
                        View additional information here
                    </Button>
                </Link>
            </div>
        </div>
    );
};