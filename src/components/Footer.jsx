import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { Container, Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    const SocialButtons = () => {

        const socials = [
            { id: 'Email', logo: <Email />, url: 'mailto:jenniferdayanasr@gmail.com' },
            { id: 'LinkedIn', logo: <LinkedIn />, url: 'https://www.linkedin.com/in/jennifer-salazar-r/' },
            { id: 'GitHub', logo: <GitHub />, url: 'https://github.com/jenni-03' }
        ]

        return (
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}>
                {
                    socials.map((item) => {
                        return (
                            <button className="rounded-full  hover:bg-white hover:text-violet-700 p-2 border" key={item.id} onClick={() => window.open(item.url, '_blank')}>
                                {item.logo}
                            </button>
                        )
                    })
                }
            </Stack>
        );
    };



    return (
        <Container maxWidth='' sx={{ backgroundColor: '#6d28d9', color: 'white', pb: 5 }} >

            <Stack direction="column" justifyContent="center" alignItems="center" spacing={4}>
            
                <div className='mt-8'>

                </div>
            

                <SocialButtons />

                <Typography  variant='h8'>
                    &copy; {new Date().getFullYear()} Jennifer Salazar. All rights reserved.
                </Typography>
            </Stack>
        </Container>
    )
}

export default Footer