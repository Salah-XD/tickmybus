
# API Endpoints Documentation

## Hubs

### Get All Hubs

```
GET localhost:3000/api/v1/hubs
```

### Create Hub

```
POST localhost:3000/api/v1/hubs/create
```

Request Body (raw/JSON):

```json
{
  "hub_name": "secondary hub",
  "city": "mumbai",
  "balance_credit": 100000
}
```

## Agents

### Get All Agents

```
GET localhost:3000/api/v1/agents
```

### Create Agent

```
POST localhost:3000/api/v1/agents/create
```

Request Body (raw/JSON):

```json
{
  "agent_name": "John Doe",
  "agent_phonenumber": "9876543210",
  "balance_credit": 1000,
  "hub_id": 1
}
```

### Get Agents by Hub ID

```
GET localhost:3000/api/v1/agents/hub/{hubID}
```
