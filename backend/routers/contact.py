from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import models, schemas, services
from ..database import get_db

router = APIRouter()

@router.post("/contacts/", response_model=schemas.Contact)
def create_contact(contact: schemas.ContactCreate, db: Session = Depends(get_db)):
    return services.ContactService.create_contact(db, contact)

@router.get("/contacts/", response_model=list[schemas.Contact])
def read_contacts(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    contacts = services.ContactService.get_contacts(db, skip=skip, limit=limit)
    return contacts

@router.get("/contacts/{contact_id}", response_model=schemas.Contact)
def read_contact(contact_id: int, db: Session = Depends(get_db)):
    db_contact = services.ContactService.get_contact(db, contact_id)
    if db_contact is None:
        raise HTTPException(status_code=404, detail="Contact not found")
    return db_contact
