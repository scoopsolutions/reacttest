import React,{useState} from 'react'
import { authantication } from "../firebase"
import { signInWithPopup, GoogleAuthProvider,signInWithEmailAndPassword ,getAuth } from "firebase/auth";
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
const Login = () => {
    const [show,setShow]=useState(false)
    const[Email,setEmail]=useState("")
    const[Password,setPassword]=useState("")
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
   else{
    signInWithEmailAndPassword(auth,Email, Password)
    .then((userCredential) => {
        const user = userCredential.user;
        alert("successfully login:",user.uid)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error)
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
                                                <label htmlFor="email">Login</label>
                                                <input placeholder='Email' onChange={(e)=>setEmail(e.target.value)} type="email" name='email' className="form-control" />
                                            </div>
                                            <div className="form-group mb-4 position-relative">
                                                <label htmlFor="password">Senha</label>
                                                <input placeholder='......' onChange={(e)=>setPassword(e.target.value)} type={show===true?"text":"password"} name="password" className="form-control" />
                                                <span className='visible-eyes'>
                                                    <img onClick={()=>setShow(!show)} src={eyes} className='img-fluid' alt="" />
                                                </span>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3"></div>
                                        <div className="col-md-6 text-end p-0">
                                        <Link onClick={()=>emailpassword()} className='text-purple'>Esqueci a senha</Link>
                                        </div>
                                        <div className="col-md-3"></div>
                                    </div>
                                    <div className="col-md-3"></div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-4 pt-2">
                                <div className="row justify-content-center">
                                    <div className="col-md-3 d-flex align-items-center justify-content-end"><p className="right-border"></p></div>
                                    <div className="col-md-3 text-center"> <p className='text-white'>Usar Login Social</p></div>
                                    <div className="col-md-3 d-flex align-items-center justify-content-center"><p className="right-border"></p></div>
                                </div>
                            </div>
                            <div className="col-md-12 text-center mt-2 ">
                                <Link> <img src={facebook} className="img-fluid mx-3" alt="" /></Link>
                                <Link> <img src={twitter} className="img-fluid mx-3" alt="" /></Link>
                                <Link onClick={()=>googleLogin()}> <img src={instagram} className="img-fluid mx-3" alt="" /></Link>
                            </div>
                            <div className="col-md-12 text-center mt-4">
                               <p className='text-white'>Não tem conta? <Link className='text-purple' to="/"> Registre-se</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 bg-purple d-md-block d-lg-block d-none responsive">
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
                                                <label htmlFor="email">Login</label>
                                                <input placeholder='Email' onChange={(e)=>setEmail(e.target.value)} type="email" name='email' className="form-control" />
                                            </div>
                                            <div className="form-group mb-4 position-relative">
                                                <label htmlFor="password">Senha</label>
                                                <input placeholder='.....' onChange={(e)=>setPassword(e.target.value)} type={show===true?"text":"password"} name="password" className="form-control" />
                                                <span className='visible-eyes'>
                                                    <img onClick={()=>setShow(!show)} src={eyes} className='img-fluid' alt="" />
                                                </span>

                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 text-end p-0">
                                        <Link onClick={()=>emailpassword()} className='text-purple'>Esqueci a senha</Link>
                                        </div>
                                    </div>
                                    <div className="col-md-3"></div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-4 pt-2">
                                <div className="row justify-content-center">
                                    <div className="col-3 mt-2 pt-1" style={{position:"relative",left:"10px"}}><p className="right-border"></p></div>
                                    <div className="col-6 text-center"> <p className='text-white'>Usar Login Social</p></div>
                                    <div className="col-3 mt-2 pt-1"><p className="right-border"></p></div>
                                </div>
                            </div>
                            <div className="col-md-12 text-center mt-2 ">
                                <Link> <img src={facebook} className="img-fluid mx-3" alt="" /></Link>
                                <Link> <img src={twitter} className="img-fluid mx-3" alt="" /></Link>
                                <Link onClick={()=>googleLogin()}> <img src={instagram} className="img-fluid mx-3" alt="" /></Link>
                            </div>
                            <div className="col-md-12 text-center mt-4">
                               <p className='text-white'>Não tem conta? <Link className='text-purple' to="/"> Registre-se</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login