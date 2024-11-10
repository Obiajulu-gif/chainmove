export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ 'ok' : IDL.Bool, 'err' : IDL.Text });
  const Result_1 = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const DestinationInfo = IDL.Record({
    'destinationId' : IDL.Nat,
    'fare' : IDL.Nat,
    'isAvailable' : IDL.Bool,
    'location' : IDL.Text,
    'driverName' : IDL.Text,
    'driverPrincipal' : IDL.Principal,
  });
  const UserProfile = IDL.Record({
    'username' : IDL.Text,
    'fullName' : IDL.Text,
    'email' : IDL.Text,
    'phoneNumber' : IDL.Text,
  });
  const SharedRide = IDL.Record({
    'isCancelled' : IDL.Bool,
    'completedAt' : IDL.Int,
    'userName' : IDL.Text,
    'destination' : IDL.Text,
    'bookedAt' : IDL.Int,
    'isCompleted' : IDL.Bool,
    'fare' : IDL.Nat,
    'rideId' : IDL.Nat,
    'user' : IDL.Principal,
    'driver' : IDL.Principal,
    'driverName' : IDL.Text,
  });
  const DriverProfile = IDL.Record({
    'username' : IDL.Text,
    'fullName' : IDL.Text,
    'email' : IDL.Text,
    'phoneNumber' : IDL.Text,
  });
  const ChainMoveContract = IDL.Service({
    'addDestination' : IDL.Func([IDL.Text, IDL.Nat], [Result], []),
    'bookRide' : IDL.Func([IDL.Principal, IDL.Nat], [Result_1], []),
    'cancelRide' : IDL.Func([IDL.Nat], [Result], []),
    'completeRide' : IDL.Func([IDL.Nat], [Result], []),
    'getAllAvailableDestinations' : IDL.Func(
        [],
        [IDL.Vec(DestinationInfo)],
        ['query'],
      ),
    'getAllRegisteredUsers' : IDL.Func([], [IDL.Vec(UserProfile)], ['query']),
    'getDriverActiveRides' : IDL.Func([], [IDL.Vec(SharedRide)], []),
    'getDriverCompletedRides' : IDL.Func([], [IDL.Vec(SharedRide)], []),
    'getDriverProfile' : IDL.Func(
        [IDL.Principal],
        [IDL.Opt(DriverProfile)],
        ['query'],
      ),
    'getUserActiveRides' : IDL.Func([], [IDL.Vec(SharedRide)], []),
    'getUserCancelledRides' : IDL.Func([], [IDL.Vec(SharedRide)], []),
    'getUserCompletedRides' : IDL.Func([], [IDL.Vec(SharedRide)], []),
    'getUserProfile' : IDL.Func(
        [IDL.Principal],
        [IDL.Opt(UserProfile)],
        ['query'],
      ),
    'isRegisteredDriver' : IDL.Func([IDL.Principal], [IDL.Bool], ['query']),
    'isRegisteredUser' : IDL.Func([IDL.Principal], [IDL.Bool], ['query']),
    'registerDriver' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [Result],
        [],
      ),
    'registerUser' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [Result],
        [],
      ),
  });
  return ChainMoveContract;
};
export const init = ({ IDL }) => { return []; };
