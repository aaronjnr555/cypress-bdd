Feature: Testing Login for a Standard user

    A standard user should hava a glitch free login experience


    Open Cypressm | Set '@focus'
    Scenario: A standard user should be able to login to SwagLabs
        Given I launch the SwagLab site
        And I insert the standard username
        And I insert the standard password
        When I click the Login button
        Then I should see the products page