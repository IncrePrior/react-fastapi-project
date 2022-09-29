from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from redis_om import get_redis_connection, HashModel
from secret import password

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000'],
    allow_methods=['*'],
    allow_headers=['*']
)

redis = get_redis_connection(
    host='redis-12804.c57.us-east-1-4.ec2.cloud.redislabs.com',
    port=12804,
    password=password,
    decode_responses=True
)


class Delivery(HashModel):
    budget: int = 0
    notes: str = ''

    class Meta:
        database = redis


class Event(HashModel):
    delivery_id: str = None
    type: str
    data: str

    class Meta:
        database = redis
