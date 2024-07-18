## TODO

[ ] Create a Voting Session
[ ] Add Ballots to Voting Session
[ ]

## Roles

Creator:
Responsible for creating and managing a Voting Session

Participant:
Can observe a Voting Session and optioanlly perticipate.

## Model/Schema

**Voting Session**

This is the parent object that represents a Voting Session. Voting Ballots can be added to a Voting Session.

| Property     | Type          | Required | Notes                                 |
| ------------ | ------------- | -------- | ------------------------------------- |
| Id           | UUID          | Yes      |                                       |
| Label        | string        | Yes      |                                       |
| Description  | string        | No       |                                       |
| Options      | string[]      | Yes      | can select from list and/or customize |
| Ballots      | Ballot[]      |          |                                       |
| Participants | Participant[] |          |                                       |

**Ballot**

| Property    | Type     | Required | Notes                                                 |
| ----------- | -------- | -------- | ----------------------------------------------------- |
| Id          | UUID     | Yes      |                                                       |
| Label       | string   | Yes      |                                                       |
| Description | string   | No       |                                                       |
| Ordinal     | number   | Yes      | can change order of Ballots                           |
| Options     | string[] | No       | defaults to those defined on Session but can override |
| Rounds      | Round[]  |          |                                                       |
| Final       | string   |          |                                                       |

**Round**

| Property  | Type   | Required | Notes |
| --------- | ------ | -------- | ----- |
| Id        | UUID   | Yes      |       |
| Number    | number | Yes      |       |
| StartDate | date   | Yes      |       |
| EndDate   | date   | No       |       |
| Final     | string |          |       |
| Votes     | Vote[] |          |       |

**Vote**

| Property | Type   | Required | Notes                      |
| -------- | ------ | -------- | -------------------------- |
| Id       | UUID   | Yes      |                            |
| From     | string | Yes      | Participant Name           |
| Vote     | string | Yes      | must be one of the Options |

**Participant**

| Property | Type    | Required | Notes                                   |
| -------- | ------- | -------- | --------------------------------------- |
| Id       | UUID    | Yes      |                                         |
| Name     | string  | Yes      |                                         |
| CanVote  | boolean | Yes      | false by default, admin can set to true |
| CanAdmin | boolean | Yes      | true for creator, false otherwise       |

**Options**

| Property | Type     | Required | Notes |
| -------- | -------- | -------- | ----- |
| Id       | UUID     | Yes      |       |
| Name     | string   | Yes      |       |
| Values   | string[] | Yes      |       |

Examples:

- Yes/No: ["Yes", "No"]
- Yes/No/Maybe: ["Yes", "No", "Maybe"]
- True/False: ["True", "False"]
- True/False/Unknown: ["True", "False", "Unknown"]
- Small/Medium/Large/Extra Large: [Small, Medium, Large, Extra Large]
- Agile Fibonacci [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
- Agile Story Points [0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100]

You can also define custom options:

- Lunch ["Burger", "Pizza", "Seafood"]
