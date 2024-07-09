This a Hotel Management app from where clients can book hotels room
 
Thora idhar dekh kr smj lo
-To create new application on react be ensure to open terminal and write `npx  create-react-app client` 
-Bootstrap functionalities dale h public index.html ke andar
-useUnifiedTopology:true, useNewUrlParser:true used for security purposes.

### Installation      

-The async and await keywords are used in JavaScript to work with asynchronous code in a more synchronous-looking manner, which makes it easier to read and write asynchronous code.

-jab async function define kiye ho iska matlab h ki ye ek promise return karega
-The await keyword is used inside an async function to pause the execution of the function until a promise is settled (that is, until it is either resolved or rejected)

-client ke andar package.json file me proxy lagaye h , usme backend ka domain with port number dale h

-For routing purpose firstly we have to install npm i react-router-dom.

-fir Homescreen set kiye usme useEffect hook se database ka data access kiye.

-model pop up mane andar se bahar ane wala view ke liye react-bootstrap install kiye h "npm i react-bootstrap".

-pop-up me body ke liye react-bootstarp carousel (google se) use kiye h

-react-sppinners -> isse loading sppinners liye h

-bootstrap-alerts(google) : udhar se success/error alerts le skte ho

-we are going to use moment.js function for date and time range:
        firstly install npm antd moment in client side.
        date range toh google me datepicker search maar kr mil jayega
        ab moment.js ka fyda ye h ki it convert any date into your liked format,
        wheather tmhara date bhara hua h ki nahi
        *** ye dates thik se set nahi hua h***











































Problems:
-params fetch nahi kr rha 
-api dikat de rha
-mongoDb se id fetch nahi kr rha h version 6 react-router use kiye tb bhi
-Error: Request failed with status code 500 = 
A status code of 500 typically indicates an internal server error on the backend. This means that there is an issue with the server-side code when processing the request, which prevents it from completing successfully.
-ECONNREFUSED (Connection refused): No connection could be made because the target machine actively refused it. This usually results from trying to connect to a service that is inactive on the foreign host.(proxy error h mane Could not proxy request /api/rooms/getroombyid from localhost:3000 to http://localhost:5000/)

-ye error dimag chaat gya tha:- CORS(Cross-Origin Resource Sharing) frontend se server-side request maang rha tha but 404 not found aa rha tha magar server side me CORS import kiye so chalne lagaa