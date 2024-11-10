import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface ChainMoveContract {
  'addDestination' : ActorMethod<[string, bigint], Result>,
  'bookRide' : ActorMethod<[Principal, bigint], Result_1>,
  'cancelRide' : ActorMethod<[bigint], Result>,
  'completeRide' : ActorMethod<[bigint], Result>,
  'getAllAvailableDestinations' : ActorMethod<[], Array<DestinationInfo>>,
  'getAllRegisteredUsers' : ActorMethod<[], Array<UserProfile>>,
  'getDriverActiveRides' : ActorMethod<[], Array<SharedRide>>,
  'getDriverCompletedRides' : ActorMethod<[], Array<SharedRide>>,
  'getDriverProfile' : ActorMethod<[Principal], [] | [DriverProfile]>,
  'getUserActiveRides' : ActorMethod<[], Array<SharedRide>>,
  'getUserCancelledRides' : ActorMethod<[], Array<SharedRide>>,
  'getUserCompletedRides' : ActorMethod<[], Array<SharedRide>>,
  'getUserProfile' : ActorMethod<[Principal], [] | [UserProfile]>,
  'isRegisteredDriver' : ActorMethod<[Principal], boolean>,
  'isRegisteredUser' : ActorMethod<[Principal], boolean>,
  'registerDriver' : ActorMethod<[string, string, string, string], Result>,
  'registerUser' : ActorMethod<[string, string, string, string], Result>,
}
export interface DestinationInfo {
  'destinationId' : bigint,
  'fare' : bigint,
  'isAvailable' : boolean,
  'location' : string,
  'driverName' : string,
  'driverPrincipal' : Principal,
}
export interface DriverProfile {
  'username' : string,
  'fullName' : string,
  'email' : string,
  'phoneNumber' : string,
}
export type Result = { 'ok' : boolean } |
  { 'err' : string };
export type Result_1 = { 'ok' : bigint } |
  { 'err' : string };
export interface SharedRide {
  'isCancelled' : boolean,
  'completedAt' : bigint,
  'userName' : string,
  'destination' : string,
  'bookedAt' : bigint,
  'isCompleted' : boolean,
  'fare' : bigint,
  'rideId' : bigint,
  'user' : Principal,
  'driver' : Principal,
  'driverName' : string,
}
export interface UserProfile {
  'username' : string,
  'fullName' : string,
  'email' : string,
  'phoneNumber' : string,
}
export interface _SERVICE extends ChainMoveContract {}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
