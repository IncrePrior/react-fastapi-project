from fastapi import HTTPException
import json


def create_delivery(state, event):
    data = json.loads(event.data)
    return {
        "id": event.delivery_id,
        "budget": int(data["budget"]),
        "notes": data["notes"],
        "status": "ready"
    }


def start_delivery(state, event):
    if state['status'] != 'ready':
        raise HTTPException(status_code=400, detail="Delivery already started")

    return state | {
        "status": "active"
    }


def pickup_products(state, event):
    data = json.loads(event.data)
    new_budget = state["budget"] - \
        int(data['purchase_price']) * int(data['quantity'])

    return state | {
        "budget": new_budget,
        "purchase_price": int(data['purchase_price']),
        "quantity": int(data['quantity']),
        "status": "collected"
    }


def deliver_products(state, event):
    data = json.loads(event.data)
    new_budget = state["budget"] + \
        int(data['sell_price']) * int(data['quantity'])
    new_quantity = state['quantity'] - int(data['quantity'])

    return state | {
        "budget": new_budget,
        "sell_price": int(data['sell_price']),
        "quantity": new_quantity,
        "status": "completed"
    }


CONSUMERS = {
    "CREATE_DELIVERY": create_delivery,
    "START_DELIVERY": start_delivery,
    "PICKUP_PRODUCTS": pickup_products,
    "DELIVER_PRODUCTS": deliver_products
}
