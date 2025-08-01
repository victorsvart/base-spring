/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import type {
  Me200,
  SignIn200,
  SignInRequest,
  SignUp200,
  SignUpRequest,
  UserPresenter
} from '.././models';


export type signUpResponse200 = {
  data: SignUp200
  status: 200
}
    
export type signUpResponseComposite = signUpResponse200;
    
export type signUpResponse = signUpResponseComposite & {
  headers: Headers;
}

export const getSignUpUrl = () => {


  

  return `http://localhost:8080/user/signUp`
}

export const signUp = async (signUpRequest: SignUpRequest, options?: RequestInit): Promise<signUpResponse> => {
  
  const res = await fetch(getSignUpUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      signUpRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: signUpResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as signUpResponse
}


export type signInResponse200 = {
  data: SignIn200
  status: 200
}
    
export type signInResponseComposite = signInResponse200;
    
export type signInResponse = signInResponseComposite & {
  headers: Headers;
}

export const getSignInUrl = () => {


  

  return `http://localhost:8080/user/signIn`
}

export const signIn = async (signInRequest: SignInRequest, options?: RequestInit): Promise<signInResponse> => {
  
  const res = await fetch(getSignInUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      signInRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: signInResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as signInResponse
}


export type meResponse200 = {
  data: Me200
  status: 200
}
    
export type meResponseComposite = meResponse200;
    
export type meResponse = meResponseComposite & {
  headers: Headers;
}

export const getMeUrl = () => {


  

  return `http://localhost:8080/user/me`
}

export const me = async ( options?: RequestInit): Promise<meResponse> => {
  
  const res = await fetch(getMeUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: meResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as meResponse
}


export type logoutResponse200 = {
  data: string
  status: 200
}
    
export type logoutResponseComposite = logoutResponse200;
    
export type logoutResponse = logoutResponseComposite & {
  headers: Headers;
}

export const getLogoutUrl = () => {


  

  return `http://localhost:8080/user/logout`
}

export const logout = async ( options?: RequestInit): Promise<logoutResponse> => {
  
  const res = await fetch(getLogoutUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: logoutResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as logoutResponse
}


export type getAllUsersResponse200 = {
  data: UserPresenter[]
  status: 200
}
    
export type getAllUsersResponseComposite = getAllUsersResponse200;
    
export type getAllUsersResponse = getAllUsersResponseComposite & {
  headers: Headers;
}

export const getGetAllUsersUrl = () => {


  

  return `http://localhost:8080/user/getAllUsers`
}

export const getAllUsers = async ( options?: RequestInit): Promise<getAllUsersResponse> => {
  
  const res = await fetch(getGetAllUsersUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: getAllUsersResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as getAllUsersResponse
}


