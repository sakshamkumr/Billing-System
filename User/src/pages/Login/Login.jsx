import './Login.css';
import toast from 'react-hot-toast';
import { useContext, useState } from 'react';
import { login } from '../../service/AuthService';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext.jsx';


const Login = () => {
    const {setAuthData} = useContext(AppContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [data, setdata] = useState({
        email: '',
        password: ''});

    const onChnageHandler = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setdata((data)=>({...data, [name]: value}));
    }

    const onSubmitHandler = async (e) =>{
        e.preventDefault();
        setLoading(true);
        
        try{
            const response = await login(data);
            if(response.status === 200){
                toast.success('Login Successful');
                localStorage.setItem("token",response.data.token);
                localStorage.setItem("role", response.data.role);
                setAuthData(response.data.token, response.data.role);
                // Redirect to dashboard or home page
                navigate('/dashboard');

            }
            
            
        }catch(error){
            console.error(error);
            toast.error('Email/Password Invalid');
        }finally{
            setLoading(false);
        }
    }
        
    return (
        <div className="bg-light d-flex align-itmes-center justfy-content-center vh-100 login-background">
            <div className="card shadow-lg w-100" style={{maxWidth:'480px'}}>
                <div className="card-body">
                    <div className="text-center">
                        <h1 className="card-title">Sign in</h1>
                        <p className="card-text text-muted">
                            Sign in below to access your account
                        </p>
                    </div>
                    <div className="mt-4">
                        <form onSubmit={onSubmitHandler}>
                            <div className="mb-4">
                                <label htmlFor="email" className="form-lable text-muted">
                                    Email address
                                </label>
                                <input type="text" name='email' id = "email" placeholder='yourname@example.com' className='form-control' onChange={onChnageHandler} value={data.email}/>
                            </div>
                            <div className="mb-4">
                                 <label htmlFor="password" className="form-lable text-muted">
                                    password
                                </label>
                                <input type="password" name='password' id = "password" placeholder='*********' className='form-control' onChange={onChnageHandler} value={data.password}/>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-dark btn-lg" disabled={loading}>
                                    {loading ? 'Loading...' : 'Sign in'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;