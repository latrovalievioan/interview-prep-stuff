## Concepts/Techniques/Patterns:

-   Throttle Debounce \*
-   [Authentication vs Authorization](https://www.youtube.com/watch?v=zpbAzBgHq0o) \*
-   Infinite scroll
-   import lazy
-   OSI model
-   Design patterns
    -   Singleton
    -   Factory
    -   Dependency Injection

## Connection/Communication:

-   [TCP](https://www.youtube.com/watch?v=0y6FtKsg6J4) \*
    > Provides a reliable end-to-end communication between devices
    > Devides the data into small segments
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
-   Fetch vs XHR, Axios \*
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
    > STATELESS - partiest shouldn't store info for each other
    > PAGINATION - limit + offest
-   SSH

## JavaScript stuff:

-   Call apply and bind \*
-   Unit testing \*
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
