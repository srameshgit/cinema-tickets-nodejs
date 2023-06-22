# DWP Cinema Tickets API Servie Test

A Simple NodeJS-Express project is to handle tickt booking

## Prerequisites to start the app
- Node js version >=16.15.1
- Express js version 4.18.2

## Scripts

Install:
```
npm install
```
Run unit tests and Code Coverage (Jest):
```
npm test
```

Start server:
```
npm start
```

Example API Request Body:
```
1.
{
	"accountid": 123,
        "ticketRequests": [
        {
        	"ticketType": "ADULT",
         "noOfTickets": 1
	}]
}

2. 
{
	"accountid": 123,
        "ticketRequests": [
        {
        	"ticketType": "CHILD",
         "noOfTickets": 2
	}]
}

3.
{
   "accountid": "FOOBAR",
   "ticketRequests": [
      {
         "ticketType": "INFANT",
         "noOfTickets": 3
      },{
         "ticketType": "ADULT",
         "noOfTickets": 1
      }
   ]
}

```

API Endpoint:
```
http://localhost:8081/api/v1/tickets
```