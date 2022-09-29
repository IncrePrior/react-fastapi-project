from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origions=['http://localhost:3000'],
    allow_methods=['*'],
    allow_headers=['*']
)
