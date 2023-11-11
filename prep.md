## Concepts/Techniques/Patterns:

-   Throttle Debounce \*
    > Throttle
        - Call the function maximum 1 time per delay time
    > Debounce
        - Call the function after a certain period of inactivity
-   [Authentication vs Authorization](https://www.youtube.com/watch?v=zpbAzBgHq0o) \*
    > Authentication
        - Authenticate a user with its credentials
    > Authorization
        - Checks is a user has the correct access rights
-   import lazy
-   Design patterns
    -   Singleton
    -   Factory
    -   Dependency Injection

## Connection/Communication:

-   [TCP](https://www.youtube.com/watch?v=0y6FtKsg6J4) \*
    > Transmission Control Protocol
    > Provides a reliable end-to-end communication between devices
    > Divides the data into small segments
    > Sends each segment individually
    > Each segment has a sequence number used to reassamble the data in order
-   [HTTP/HTTP2/HTTP3 ](https://www.youtube.com/watch?v=a-sBfyiXysI) \*
    > HTTP
        -   Built on top of TCP
        -   Every request requires a seprate TCP connection (with handshake)
        -   HTTP 1.1 introduces "keep-alive" (connection can be reused for requests)
    > HTTP2
        -   HTTP STREAMS (multiple requests into a single connection)
    > HTTP3
        -   On top of QUIC (UDP)
        -   Streams as a first-class citizen
-   [SSL/TSL/HTTPS](https://www.youtube.com/watch?v=j9QmMEWmcfo&t=8s) \*
    > HTTPS provides encrypts the data send from one end to another
    > TLS(Transport Layer Security) handshake
        -   TCP Connection
        -   Client hello
        -   Server hello
        -   Server sends certificate (Public key (asymetric encription))
        -   Client generates a session key, encripted with the server's public key
        -   Client sends the session key and decrypts it with the private key
        -   Session key is used to encrypt/decrypt data
-   What is an endpoint \*
    > Specific URI where an API can be accessed.
-   [REST](https://www.youtube.com/watch?v=-mN3VyJuCjM) \*
    > Most common communication standard for APIs (RESTful APIs)
    > Loose set of rules
    > Organises resources into set of URIs (Uniform Resource Identifiers)
    > Resources should be combined by a noun, not a verb. (Ex. /products not /getProducts)
    > CRUD with HTTP methods
        -   POST - CREATE
        -   GET - READ
        -   PUT/PATCH - UPDATE
        -   DELETE - DELETE
    > HTTP status codes
        -   200 - success
        -   400 - something wrong with the request
        -   500 - something wrong with the server
    > STATELESS - parties shouldn't store info for each other
    > PAGINATION - limit + offest
-   Fetch vs XHR, Axios \*
    > Fetch
        -   Native to the browser
        -   Uses Promises
    > XHR(XMLHttpRequest)
        -   Its an older way for making requests
        -   Handling responses involves event listeners
    > Axios
        -   Axios is a third party library that uses XHR under the hood
-   [Cookies and session tokens](https://www.youtube.com/watch?v=GhrvZ5nUWNg)
-   SSH
-   OSI model

## JavaScript stuff:

-   Call apply and bind \*
-   Unit testing \*
-   Event loop
-   Promises
-   [Hoisting](https://www.youtube.com/watch?v=EvfRXyKa_GI) \*

## React:

-   React 18 render twice (strict mode) \*
-   hooks what are they: \*
    -   useState \*
        -   Why not setState inside useEffect \*
    -   useEffect \*
        -   Problem with fetch in useEffect \*
    -   useCallback (Reac.Memo) \*
    -   useMemo \*
    -   useContext \*
    -   useReducer \*
    -   useRef \*
    -   use \*
-   Error boundry
-   Unit testing React components

## DSA & Algorhytms:

-   Binary Search \*
-   Stack, queue \*
-   Arrays \*
-   Two pointers \*
-   Linked list
-   Trees/Graphs - Dfs, Bfs

## Css:

-   Drawback of styled components
-   Drawback of importing css files
-   Design system
-   Difference between Grid and Flex
-   Difference between `display: inline` and `display: block`

## Typescript stuff:

-   [Discriminated union types](https://www.youtube.com/watch?v=BnhoHTbGVWY)
-   [Structural types and subtyping](https://www.youtube.com/watch?v=cIhvepd3-n8)
