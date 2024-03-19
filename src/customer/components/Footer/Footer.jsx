import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10' container sx={{ bgcolor: "black", color: "white", py: 3 }}>


                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Company</Typography>

                    <div>
                        <Button className='pb-5' variant='h6'>About</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6'>Blog</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6'>Press</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6'>Jobs</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6'>partners</Button>
                    </div>
                </Grid>

                {/* *********************************************   */}

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Solution</Typography>

                    <div>
                        <Button className='pb-5' variant='h6'>Marketing</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6'>Analytics</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6'>Commerce</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6'>Insight</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6'>Support</Button>
                    </div>
                </Grid>

                {/* *********************************************   */}

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Documnetation</Typography>

                    <div>
                        <Button className='pb-5' variant='h6'>Guldes</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6'>API Status</Button>
                    </div>
                </Grid>
                

                {/* (*******************************) */}

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Legal</Typography>

                    <div>
                        <Button className='pb-5' variant='h6'>Cleaim</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6'>Privavcy</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6'>Tearms</Button>
                    </div>
                </Grid>

                
                    <Grid className='pt-20' item xs={12}>
                        <Typography variant='body2' component="p" align='center'>
                            $copy;  2024 My Company. All right reserved.
                        </Typography>
                        <Typography variant='body2' component='p' align='center'>
                            Made with love by me
                        </Typography>
                        <Typography variant='body2' component='p' align='center'>
                                Icons made by
                                {/* <link href='' color='white' underline='always'>
                                    Freepik
                                </link> */}
                        </Typography>
                    </Grid>
                </Grid>
            
        </div>
    )
}

export default Footer
