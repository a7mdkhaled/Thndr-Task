## build 
    - yarn 
    - to run on IOS: yarn ios
    - to run on web : yarn web

## cypress
    - npx cypress open
    
## jest
    - yarn test 

## Structure of the project ###

# App/Containers

## /container-name contains: 
    - .container
    - .styles
    - .test
    - components ( Related to this specific container)
    
# App/Components: (related to the whole app)

## /component-name contains:
    - .component
    - .styles
    - .test


## Utils
 - mappers (Mainly used to map the endpoints)
 - api-service ( Used for handling the api calls, more methods can be added "Post - PUT...")
 - endpoints ( Contains all of our endpoints, ApiUrl is hardcoded in that file but of course it always should be store in env files" 
 
