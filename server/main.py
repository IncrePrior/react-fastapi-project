import json
from fastapi import FastAPI, Request, Response
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


@app.post('/deliveries/create')
async def create(request: Request):
    body = await request.json()
    delivery = Delivery(budget=body['data']
                        ['budget'], notes=body['data']['notes']).save()

    event = Event(delivery_id=delivery.pk,
                  type=body['type'], data=json.dumps(body['data'])).save()

    return event
