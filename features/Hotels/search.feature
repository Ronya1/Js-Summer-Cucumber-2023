Feature: Search


    Scenario: Verify search location is displayed on Search page
        Given I am on hotels landing page
        When I enter "new" in going to
        And I select "MANHATTAN" from auto-suggestion
        And I click on search button
        Then I verify going to location contains "MANHATTAN"
