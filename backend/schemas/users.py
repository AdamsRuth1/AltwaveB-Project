from pydantic import BaseModel, EmailStr, validator
from typing import Optional

class UserBase(BaseModel):
    email: EmailStr
    first_name: str
    last_name: str
    phone_number: str

    @validator('phone_number')
    def phone_number_must_include_country_code(cls, v):
        print("Validating phone number:", v, type(v))  # Detailed debugging 
        if not isinstance(v, str):  # Check if v is even a string
            raise ValueError(f"Invalid phone number type: {type(v)}")
        if not v.startswith('+'):
            raise ValueError('Phone number must include country code. Example: +123456789')
        return v

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int

    class Config:
        orm_mode = True

class UserSignIn(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class SignIn(BaseModel):
    email: str
    password: str

class Country(BaseModel):
    name: str
    flag: str
