import { Container, Box } from '@mui/material'
import { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import authUtils from '../../utils/authUtils'
import Loading from '../common/Loading'

const AuthLayout = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const user = await authUtils.isAuthenticated()
                if (user) {
                    navigate("/dashboard");
                }
            } catch (e) {
                setLoading(false)
                console.log(e)
            }
        }
        checkAuth().finally(() => setLoading(false))
    }, [])

    return (
        loading ? (
            <Loading fullHeight={100}/>
        ) : (
            <Container component='main' maxWidth='xs'>
                <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <Outlet />
                </Box>
            </Container>
        )
    )
}

export default AuthLayout;
