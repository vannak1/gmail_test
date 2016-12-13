# Gmail Integration Test

Testing features of Gmail to make sure it works.

To setup type in console: npm install
To run test:
1. Enter login information at sample.env
2. npm test
To generate fake user: grunt
To clean data: grunt done

### Test Cases

#### Scenario: User login
>Should display login page if user is not logged in.
>Then enters valid credentials & click signin
>Should display inbox
>When user signs out
>Should display Gmail about page.

### Scenario: Mail functions
>Given user is logged in
>When user goes to compose
>Then inputs To:, Subject, Body
>Then hits send
>When user visits sent:mail
>It should have recently sent message
>When user visits inbox
>It should have received sent message

## Scenario: Delete mail from "Tom"
>Given user is logged in
