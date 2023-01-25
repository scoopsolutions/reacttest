import React,{useState} from 'react'
import { authantication } from "../firebase"
import { signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword ,getAuth } from "firebase/auth";
import header_logo from '../img/image 1.png'
import back_img from '../img/Group.png'
import mask_logo from '../img/pack2818 1.png'
import mask_logo2 from '../img/pack2779 1.png'
import lang_logo from '../img/ようこそ.png';
import lang_logo2 from '../img/ひさしぶり.png';
import eyes from '../img/Vector.png'
import facebook from '../img/Group 98.png'
import twitter from '../img/Group 99.png'
import instagram from '../img/Group 100.png'
import { height } from '@mui/system';
import { Link } from 'react-router-dom'
import Slider from './Slider';
const Signup = () => {
    const[Email,setEmail]=useState("")
    const[Password,setPassword]=useState("")
    const[ConfirmPassword,setConfirmPassword]=useState("")
    const [show,setShow]=useState(false)
    const [show2,setShow2]=useState(false)
    const googleLogin = () => {
            const provider = new GoogleAuthProvider();
            provider.addScope('email');
            signInWithPopup(authantication, provider).then((result) => {
                var userEmail = result.user.email
                var user = result.user
                var first = user.displayName.split(" ")[0]
                var last = user.displayName.split(" ")[1]
               console.log(result)
                alert(`first name:${first}, last name:${last}`)
    
            }).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message
                var email = error.email
                var credential = error.credential
                console.log("ffff", errorMessage)
            })
    }
    const auth = getAuth();
    const emailpassword = () => {
        const reg = /^([a-zA-Z0-9~`!@#\$%\^&\*\(\)_\-\+={\[\}\]\|\\:;"'<,>\.\?\/  ]*)@([a-zA-Z0-9]+)\.(com+)$/;
       if(Email==""){
        alert("please enter email")
       }
       else if(reg.test(Email) === false){
alert("please enter correct email")
       }
     else if(Password==""){
        alert("please enter password")
       }
       else if(ConfirmPassword==""||ConfirmPassword!==Password){
        alert("please enter confirm password Or Password not matched")
       }
       else{
        createUserWithEmailAndPassword(auth,Email, Password)
        .then(() => {
          console.log('User signed in.');
          alert("successfull")
        })
        .catch((error) => {
          alert('Error signing in:', error);
        });
       }
}
    return (
        <>
            <div className="container-fluid d-lg-block d-md-block d-none">
                <div className="row">
                    <div className="col-md-6 bg-black">
                        <div className="row mt-3">
                            <div className="col-md-12">
                                <div className="header-logo">
                                    <img src={header_logo} className='img-fluid' alt="" />
                                    <span className='ms-3 header-logo-white-text'>anime</span><span className='header-logo-purple-text'>yabu.</span>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="back-img mt-3 ms-2">
                                    <img src={back_img} className='img-fluid' alt="" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-top-header text-center">
                                    <div className="mask-logo ">
                                        <img src={mask_logo} className='img-fluid' alt="" />
                                    </div>
                                    <div className="lang-logo ">
                                        <img src={lang_logo} className='img-fluid' alt="" />
                                    </div>
                                    <p className='form-top-para'>Bem-vindo (a)!</p>
                                </div>
                            </div>
                            <div className="col-md-12 text-center">
                                <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className="col-md-6">
                                        <div className="form-fields text-start text-white">
                                            <div className="form-group mb-4">
                                                <label htmlFor="email">Email</label>
                                                <input placeholder='usuario@' onChange={(e)=>setEmail(e.target.value)} type="email" name='email' className="form-control" />
                                            </div>
                                            <div className="form-group mb-4 position-relative">
                                                <label htmlFor="password">Senha</label>
                                                <input placeholder='......' onChange={(e)=>setPassword(e.target.value)} type={show===true?"text":"password"} name="password" className="form-control" />
                                                <span className='visible-eyes'>
                                                    <img onClick={()=>setShow(!show)} src={eyes} className='img-fluid' alt="" />
                                                </span>

                                            </div>
                                            <div className="form-group mb-4 position-relative">
                                                <label htmlFor="cpassword">Confirmar Senha</label>
                                                <input  placeholder='......' onChange={(e)=>setConfirmPassword(e.target.value)} type={show2===true?"text":"password"} name="cpassword" className="form-control" />
                                                <span className='visible-eyes'>
                                                    <img onClick={()=>setShow2(!show2)} src={eyes} className='img-fluid' alt="" />
                                                </span>
                                            </div>
                                            <div className="form-button text-center">
                                                <button onClick={()=>emailpassword()} className='registar-btn w-100'>Registrar</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3"></div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-4 pt-2">
                                <div className="row justify-content-center">
                                    <div className="col-md-3 d-flex align-items-center justify-content-end"><p className="right-border"></p></div>
                                    <div className="col-md-3 text-center"> <p className='text-white'>Ou se registre com</p></div>
                                    <div className="col-md-3 d-flex align-items-center justify-content-center"><p className="right-border"></p></div>
                                </div>
                            </div>
                            <div className="col-md-12 text-center mt-2 ">
                                <Link> <img src={facebook} className="img-fluid mx-3" alt="" /></Link>
                                <Link> <img src={twitter} className="img-fluid mx-3" alt="" /></Link>
                                <Link onClick={()=>googleLogin()}> <img src={instagram} className="img-fluid mx-3" alt="" /></Link>
                            </div>
                            <div className="col-md-12 text-center mt-4">
                               <p className='text-white'>Já é membro?<Link to="/login" className='text-purple'> Faça Login</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 bg-purple d-md-block d-lg-block d-none">
                        <Slider/>
                    </div>
                </div>
            </div>
            <div className="container-fluid  d-lg-none d-md-none d-block">
                <div className="row">
                    <div className="col-md-12 bg-gradient">
                        <div className="row mt-3">
                            <div className="col-md-12">
                                <div className="back-img mt-3 ms-2">
                                    <img src={back_img} className='img-fluid' alt="" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-top-header text-center">
                                    <div className="mask-logo ">
                                        <img src={mask_logo2} className='img-fluid' alt="" />
                                    </div>
                                    <div className="lang-logo ">
                                        <img src={lang_logo2} className='img-fluid' alt="" />
                                    </div>
                                    <p className='form-top-para'>Olá, sentimos sua falta!</p>
                                </div>
                            </div>
                            <div className="col-md-12 text-center">
                                <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className="col-md-6">
                                        <div className="form-fields text-start text-white">
                                            <div className="form-group mb-4">
                                                <label htmlFor="email">Email</label>
                                                <input placeholder='usuario@'  onChange={(e)=>setEmail(e.target.value)} type="email" name='email' className="form-control" />
                                            </div>
                                            <div className="form-group mb-4 position-relative">
                                                <label htmlFor="password">Senha</label>
                                                <input placeholder='.......' onChange={(e)=>setPassword(e.target.value)} type={show===true?"text":"password"} name="password" className="form-control" />
                                                <span className='visible-eyes'>
                                                    <img onClick={()=>setShow(!show)} src={eyes} className='img-fluid' alt="" />
                                                </span>

                                            </div>
                                            <div className="form-group mb-4 position-relative">
                                                <label htmlFor="cpassword">Confirmar Senha</label>
                                                <input placeholder='.......' onChange={(e)=>setConfirmPassword(e.target.value)} type={show2===true?"text":"password"} name="cpassword" className="form-control" />
                                                <span className='visible-eyes'>
                                                    <img onClick={()=>setShow2(!show2)} src={eyes} className='img-fluid' alt="" />
                                                </span>
                                            </div>
                                            <div className="form-button text-center">
                                                <button onClick={()=>emailpassword()} className='registar-btn w-100'>Registrar</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3"></div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-4 pt-2">
                                <div className="row justify-content-center">
                                    <div className="col-3 mt-2 pt-1" style={{position:"relative",left:"10px"}}><p className="right-border"></p></div>
                                    <div className="col-6 text-center"> <p className='text-white'>Ou se registre com</p></div>
                                    <div className="col-3 mt-2 pt-1"><p className="right-border"></p></div>
                                </div>
                            </div>
                            <div className="col-md-12 text-center mt-2 ">
                                <Link> <img src={facebook} className="img-fluid mx-3" alt="" /></Link>
                                <Link> <img src={twitter} className="img-fluid mx-3" alt="" /></Link>
                                <Link onClick={()=>googleLogin()}> <img src={instagram} className="img-fluid mx-3" alt="" /></Link>
                            </div>
                            <div className="col-md-12 text-center mt-4">
                               <p className='text-white'>Já é membro?<Link to="/login" className='text-purple'> Faça Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup