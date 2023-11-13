## Throttle

-   Button that sends a request (handle spamming), but more logically is the button to have a loading state
-   Delay bullets (but better to handle it with frames)
-   Drag mouse
-   Fast updates via socket for example

## JWT

-   Public info
-   has to be signed
-   best practice is to be return via cookie header
-   it has info about when to be invalidated
-   HTTP only cookies cant be edited by javascript

## Oath

-   Redirect to UAuth
-   OAuth calls server
-   Server consumes data and redirects back to original domain

## HTTP

REQUEST:
{METHOD} {PATH} {HTTP_VERSION}
{HEADERS?}
{BODY?}

RESPONSE:
{HTTP_VERSION} {STATUS_CODE} {STATUS_MESSAGE}
{HEADERS?}
{BODY?}

-   React memo higher order component

## Error boundary

catches only errors when rendering
