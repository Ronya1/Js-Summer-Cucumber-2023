Feature: Login

    Scenario: verify login fields are enabled by default
        Given I am on facebook landing page
        Then I verify login username field is enabled
        When I verify login password field is enabled
        When I verify login button field is enabled


# // automate the below
#     Scenario: verify user get error for invalid credentials
#         Given I am on facebook landing page
#         When I enter "@#$%^^^" as username
#         And I enter "invalidPwd" as password
#         And I click login button
#         Then I verify error is deiplayed


# // automate the below
#     Scenario: verify user get error for valid credentials
#         Given I am on facebook landing page
#         When I enter "deepak@facebook.com" as username
#         And I enter "validPwd@1234" as password
#         And I click login button
#         Then I verify I am on Homepage
    