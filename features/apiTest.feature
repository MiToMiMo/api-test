Feature: Testing the API

  Scenario: response code is 200 when create pet
    Given the API URL is "https://petstore.swagger.io/v2"
    When make a POST request to "/pet"
    Then the response status is 200
    And delete pet
    
  Scenario: response body have the correct structure is 200 when create pet
    Given the API URL is "https://petstore.swagger.io/v2"
    When make a POST request to "/pet"
    Then the response body have the correct structure
    And delete pet
