function countSteps(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      return turn;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let [tot1, tot2] = [0, 0];
  for (let i = 0; i < 100; i++) {
    let state = VillageState.random();
    tot1 += countSteps(state, robot1, memory1);
    tot2 += countSteps(state, robot2, memory2);
  }
  console.log(`Robot 1: ${tot1 / 100} steps per turn`);
  console.log(`Robot 2: ${tot2 / 100} steps per turn`);
}

function quickGoalOrientedRobot({ place, parcels }, route) {
  function shortestRoute(addresses) {
    let shortestRoute = findRoute(roadGraph, place, addresses[0]);
    for (let address of addresses.slice(1)) {
      let r = findRoute(roadGraph, place, address);
      if (r.length < shortestRoute.length) shortestRoute = r;
    }
    return shortestRoute;
  }
  if (route.length == 0) {
    carried = parcels.filter(p => p.place == place);
    if (carried.length == 0) {
      route = shortestRoute(parcels.map(p => p.place));
    } else {
      let nextPickup = shortestRoute(
        parcels.filter(p => p.place != place).map(p => p.place)
      );
      let nextDropoff = shortestRoute(carried.map(p => p.address));
      if (!nextPickup) route = nextDropoff;
      else {
        // Make sure to favor the routes with pickups first
        route =
          nextPickup.length <= nextDropoff.length ? nextPickup : nextDropoff;
      }
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}

// Same function as above, but fancier code
function lazyRobot({ place, parcels }, route) {
  function score({ route, pickup }) {
    return (pickup ? 0.5 : 0) - route.length;
  }
  if (route.length == 0) {
    let routes = parcels.map(p => {
      if (p.place == place)
        return {
          route: findRoute(roadGraph, place, p.address),
          pickup: false
        };
      else {
        return {
          route: findRoute(roadGraph, place, p.place),
          pickup: true
        };
      }
    });
    route = routes.reduce((a, b) => (score(a) > score(b) ? a : b)).route;
  }
  return { direction: route[0], memory: route.slice(1) };
}

//runRobot(VillageState.random(), quickGoalOrientedRobot, []);
compareRobots(lazyRobot, [], goalOrientedRobot, []);
