/*
MODULES

./graphs
Exports a single function buildGraph. This should be
in the form expected by dijkstrajs so we can use that 
NPM package

./roads 
Contains the raw data in roads and a roadGraph binding.
To create this binding, it must be dependent on ./graphs.

./state
This exports the VillageState class and runRobot. It is
dependent on roads so it can validate roads and 
connections.

./robot-examples
This exports the functions for routeRobot, randomRobot,
etc. It must depend on roads, as these are needed for the 
routeRobot. It is also dependent on diskstrajs to make
use of the graph functions.

*/
