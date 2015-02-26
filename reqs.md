# Starship Command

## Components
1. table
1. favorites

## live binding
1. points (adjusted with up and down votes)
1. favorite
1. delete


How I would do this:
1. create a table widget
1. create a captain's model
1. create a votes property (could be computed property of the diff of up & down votes)
1. create a generic control
    1. create a votes control
    1. crate a favorites control
    1. create a delete control
1.
