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
    > Singleton
    > Factory
    > Dependency Injection

## Connection/Communication:

-   [TCP](https://www.youtube.com/watch?v=0y6FtKsg6J4) \*
    > Transmission Control Protocol
    > Provides a reliable end-to-end communication between devices
    > Divides the data into small segments
    > Sends each segment individually
    > Each segment has a sequence number used to reassamble the data in order
-   [HTTP/HTTP2/HTTP3 ](https://www.youtube.com/watch?v=a-sBfyiXysI) \*
    > HTTP
        - Built on top of TCP
        - Every request requires a seprate TCP connection (with handshake)
        - HTTP 1.1 introduces "keep-alive" (connection can be reused for requests)
    > HTTP2
        - HTTP STREAMS (multiple requests into a single connection)
    > HTTP3
        - On top of QUIC (UDP)
        - Streams as a first-class citizen
-   [SSL/TSL/HTTPS](https://www.youtube.com/watch?v=j9QmMEWmcfo&t=8s) \*
    > HTTPS provides encrypts the data send from one end to another
    > TLS(Transport Layer Security) handshake
        - TCP Connection
        - Client hello
        - Server hello
        - Server sends certificate (Public key (asymetric encription))
        - Client generates a session key, encripted with the server's public key
        - Client sends the session key and decrypts it with the private key
        - Session key is used to encrypt/decrypt data
-   What is an endpoint \*
    > Specific URI where an API can be accessed.
-   [REST](https://www.youtube.com/watch?v=-mN3VyJuCjM) \*
    > Most common communication standard for APIs (RESTful APIs)
    > Loose set of rules
    > Organises resources into set of URIs (Uniform Resource Identifiers)
    > Resources should be combined by a noun, not a verb. (Ex. /products not /getProducts)
    > CRUD with HTTP methods
        - POST - CREATE
        - GET - READ
        - PUT/PATCH - UPDATE
        - DELETE - DELETE
    > HTTP status codes
        - 200 - success
        - 400 - something wrong with the request
        - 500 - something wrong with the server
    > STATELESS - parties shouldn't store info for each other
    > PAGINATION - limit + offest
-   Fetch vs XHR, Axios \*
    > Fetch
        - Native to the browser
        - Uses Promises
    > XHR(XMLHttpRequest)
        - Its an older way for making requests
        - Handling responses involves event listeners
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

-   React 18 render twice (strict mode) \*\*
-   hooks what are they: \*\*
    > useState \*\*
        - Initializes a value
        - Returns an array with 1st element being the state value, the 2nd a function to update the value
        - The value is immutable and can only be updated via the `setState` function
        - The `setState` function can be called with a new value
        - The `setState` function can be called with a callback that receives the previous state as an argument
    > useEffect \*\*
        - Used to handle side effects
        - The code inside is guaranteed to run at least once
        - Can be provided a depencency array
        - Whenever a dependency is updated, the `useEffect` callback is destroyed and new `useEffect` is creted
        - Can be provided a return callback which is executed once the `useEffect` callback is destroyed
    > useCallback/React.memo \*\*
        - React.memo is used when we want to memoize a component based on its props
        - useCallback is often used with React.memo to memoize a function (if the memoized component receives the function as a prop)
        - useCallback receives a callback function to memoize and a dependency array
    > useMemo \*\*
        - Used to memoize a function's return value
        - As a first param it receives a callback function which return value it will memoize
        - As a second param it receives a dependency array
        - The callback function's value will be recomputed only when something from the dependency array changes
    > useContext \*\*
        - A way to have a accesable data for components without props drilling
        - We create a context with the `createContext` function
        - We wrap the parent component with a context provider
        - The context provider receives a value prop
        - To consume the context we use the `useContext` hook
        - The `useContext` hook receives the created context as a prop
    > useReducer \*\*
        - Similar to `useState`
        - It receives a reducer function which handles actions as a first param
        - As a second param it receives an initial state
        - The reducer function is used to handle state updates based on different action types
        - The `useReducer` hook returns an array with two values
        - The first value is the state
        - The second value is a `dispatch` function which allows us to dispatch actions
    > useRef \*\*
        - Ref can hold a value, but it doesn't rerender the component and the value is mutable
    > use (React 18)\*\*
        - Unwraps data from a promise
        - Used with `suspense` to handle loading state and a `errorBoundry` to handle errors
-   Error boundry
    > Class component
    > Has a fallback prop
    > State has a `hasError` boolean field
    > Static method `getDerivedStateFromError` to update the `hasError` state
    > `componentDidCatch` lifecycle method to act on the error
    > `render` returns the children if there is no error
    > `render` returns the `fallback` prop if there is an error
-   Unit testing React components

## DSA & Algorhytms:

-   Binary Search \*
-   Stack, queue \*
-   Arrays \*
-   Two pointers \*
-   Sliding window
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
