from pydantic import BaseModel, EmailStr, Field

class ContactBase(BaseModel):
    first_name: str = Field(..., alias='firstName')
    last_name: str = Field(..., alias='lastName')
    email: EmailStr = Field(..., alias='email')
    message: str = Field(..., alias='message')

class ContactCreate(ContactBase):
    pass

class Contact(ContactBase):
    id: int

    class Config:
        orm_mode = True
        allow_population_by_field_name = True
